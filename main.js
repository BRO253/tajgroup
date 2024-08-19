document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('.options-list input[type="checkbox"]');
    const checkboxCountElement = document.getElementById('checkboxCount');
    const optionsList = document.querySelector('.options-list');
    const selectContainer = document.querySelector('.select-container');
    const selectorButton = document.querySelector('.selector-button');
    let isOptionsVisible = false;

    function updateCheckboxCount() {
        const checkedCount = document.querySelectorAll('.options-list input[type="checkbox"]:checked').length;
        checkboxCountElement.innerText = `Выбрано: ${checkedCount}`;
    }

    function toggleOptions() {
        isOptionsVisible = !isOptionsVisible;
        optionsList.style.display = isOptionsVisible ? 'block' : 'none';
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateCheckboxCount);
    });

    selectorButton.addEventListener('click', function () {
        isOptionsVisible = false;
        optionsList.style.display = 'none';
    });

    selectContainer.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleOptions();
    });

    document.addEventListener('click', function () {
        if (isOptionsVisible) {
            isOptionsVisible = false;
            optionsList.style.display = 'none';
        }
    });

    // Предотвращаем закрытие списка при клике внутри него
    optionsList.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    updateCheckboxCount();
});


////////////////


const input = document.getElementById('region-input');
const optionsList = document.getElementById('options-list');

// Предустановленный список подсказок 
const defaultSuggestions = [
    "Нижний Новгород",
    "Нижегородская область",
    "Арзамас",
    "Балахна",
    "Богородск",
    "Бор",
    "Выкса",
    "Дзержинск",
    "Кстово",
    "Павлово"
];

const cities = [
    "Нижний Новгород",
    "Нижегородская область",
    "Арзамас",
    "Балахна",
    "Богородск",
    "Бор",
    "Выкса",
    "Дзержинск",
    "Кстово",
    "Павлово",
    "Ветлуга",
    "Володарск",
    "Ворсма",
    "Заволжье",
    "Княгинино",
    "Лукоянов",
    "Лысково",
    "Навашино",
    "Первомайск",
    "Перевоз",
    "Саров",
    "Семенов",
    "Сергач",
    "Урень",
    "Чкаловск",
    "Шахунья",
    "Алтайский край",
    "Амурская область",
    "Архангельская область",
    "Астраханская область",
    "Белгородская область",
    "Брянская область",
    "Владимирская область",
    "Волгоградская область",
    "Вологодская область",
    "Воронежская область",
    "Донецкая Народная Республика",
    "Еврейская автономная область",
    "Забайкальский край",
    "Запорожская область",
    "Ивановская область",
    "Иркутская область",
    "Кабардино-Балкарская Республика",
    "Калининградская область",
    "Калужская область",
    "Камчатский край",
    "Карачаево-Черкесская Республика",
    "Кемеровская область",
    "Кировская область",
    "Костромская область",
    "Краснодарский край",
    "Красноярский край",
    "Крым",
    "Курганская область",
    "Курская область",
    "Ленинградская область",
    "Липецкая область",
    "Луганская Народная Республика",
    "Магаданская область",
    "Москва",
    "Московская область",
    "Мурманская область",
    "Ненецкий автономный округ",
    "Новгородская область",
    "Новосибирская область",
    "Омская область",
    "Оренбургская область",
    "Орловская область",
    "Пензенская область",
    "Пермский край",
    "Приморский край",
    "Псковская область",
    "Республика Адыгея",
    "Республика Алтай",
    "Республика Башкортостан",
    "Республика Бурятия",
    "Республика Дагестан",
    "Республика Ингушетия",
    "Республика Калмыкия",
    "Республика Карелия",
    "Республика Коми",
    "Республика Марий Эл",
    "Республика Мордовия",
    "Республика Саха (Якутия)",
    "Саратовская область",
    "Сахалинская область",
    "Свердловская область",
    "Севастополь",
    "Смоленская область",
    "Ставропольский край",
    "Тамбовская область",
    "Тверская область",
    "Томская область",
    "Тульская область",
    "Тюменская область",
    "Удмуртская Республика",
    "Ульяновская область",
    "Хабаровский край",
    "Ханты-Мансийский автономный округ — Югра",
    "Херсонская область",
    "Челябинская область",
    "Чеченская Республика",
    "Чувашская Республика",
    "Чукотский автономный округ",
    "Ямало-Ненецкий автономный округ",
    "Ярославская область",
    "Республика Северная Осетия — Алания",
    "Республика Татарстан",
    "Республика Тыва",
    "Республика Хакасия",
    "Ростовская область",
    "Рязанская область",
    "Самарская область",
    "Санкт-Петербург"
];

// При фокусе на поле ввода показываем предустановленный список
input.addEventListener('focus', () => {
    showOptions(defaultSuggestions);
});

 //Фильтрация списка при вводе текста
input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
const filteredCities = cities.filter(city => city.toLowerCase().includes(query));

    showOptions(filteredCities.slice(0, 10)); // Ограничиваем количество отображаемых элементов до 10
});

// Функция для отображения опций
function showOptions(options) {
    optionsList.innerHTML = '';
    options.forEach(option => {
        const div = document.createElement('div');
        div.textContent = option;
        div.addEventListener('click', () => {
            input.value = option;
            optionsList.style.display = 'none';
        });
        optionsList.appendChild(div);
    });

    // Проверяем количество элементов и скрываем/отображаем список
    optionsList.style.display = options.length ? 'block' : 'none';
}

// Закрытие списка при клике вне области
document.addEventListener('click', (e) => {
    if (!e.target.closest('.select-two')) {
        optionsList.style.display = 'none';
    }
});


// Массив с регионами
const regions = [
    "Нижний Новгород",
    "Нижегородская область",
    "Арзамас",
    "Балахна",
    "Богородск",
    "Бор",
    "Выкса",
    "Дзержинск",
    "Кстово",
    "Павлово",
    "Ветлуга",
    "Володарск",
    "Ворсма",
    "Заволжье",
    "Княгинино",
    "Лукоянов",
    "Лысково",
    "Навашино",
    "Первомайск",
    "Перевоз",
    "Саров",
    "Семенов",
    "Сергач",
    "Урень",
    "Чкаловск",
    "Шахунья",
    "Алтайский край",
    "Амурская область",
    "Архангельская область",
    "Астраханская область",
    "Белгородская область",
    "Брянская область",
    "Владимирская область",
    "Волгоградская область",
    "Вологодская область",
    "Воронежская область",
    "Донецкая Народная Республика",
    "Еврейская автономная область",
    "Забайкальский край",
    "Запорожская область",
    "Ивановская область",
    "Иркутская область",
    "Кабардино-Балкарская Республика",
    "Калининградская область",
    "Калужская область",
    "Камчатский край",
    "Карачаево-Черкесская Республика",
    "Кемеровская область",
    "Кировская область",
    "Костромская область",
    "Краснодарский край",
    "Красноярский край",
    "Крым",
    "Курганская область",
    "Курская область",
    "Ленинградская область",
    "Липецкая область",
    "Луганская Народная Республика",
    "Магаданская область",
    "Москва",
    "Московская область",
    "Мурманская область",
    "Ненецкий автономный округ",
    "Новгородская область",
    "Новосибирская область",
    "Омская область",
    "Оренбургская область",
    "Орловская область",
    "Пензенская область",
    "Пермский край",
    "Приморский край",
    "Псковская область",
    "Республика Адыгея",
    "Республика Алтай",
    "Республика Башкортостан",
    "Республика Бурятия",
    "Республика Дагестан",
    "Республика Ингушетия",
    "Республика Калмыкия",
    "Республика Карелия",
    "Республика Коми",
    "Республика Марий Эл",
    "Республика Мордовия",
    "Республика Саха (Якутия)",
    "Саратовская область",
    "Сахалинская область",
    "Свердловская область",
    "Севастополь",
    "Смоленская область",
    "Ставропольский край",
    "Тамбовская область",
    "Тверская область",
    "Томская область",
    "Тульская область",
    "Тюменская область",
    "Удмуртская Республика",
    "Ульяновская область",
    "Хабаровский край",
    "Ханты-Мансийский автономный округ — Югра",
    "Херсонская область",
    "Челябинская область",
    "Чеченская Республика",
    "Чувашская Республика",
    "Чукотский автономный округ",
    "Ямало-Ненецкий автономный округ",
    "Ярославская область",
    "Республика Северная Осетия — Алания",
    "Республика Татарстан",
    "Республика Тыва",
    "Республика Хакасия",
    "Ростовская область",
    "Рязанская область",
    "Самарская область",
    "Санкт-Петербург"
    // добавьте другие регионы сюда...
];



///////////

// Очистка поля ввода при нажатии на изображение
clearButton.addEventListener('click', function() {
    input.value = ''; // Очищаем поле ввода
    filterOptions(''); // Очищаем список
});

// Функция для отображения списка регионов
function showOptionsList() {
    optionsList.style.display = 'block'; // Показываем список
}

// Функция для фильтрации списка регионов
function filterOptions(query) {
    optionsList5.innerHTML = ''; // Очищаем список
    const filteredRegions = regions.filter(regions => 
        regions.toLowerCase().includes(query.toLowerCase())
    );
    filteredRegions.forEach(cities => {
        const option = document.createElement('div');
        option.textContent = regions;
        option.addEventListener('click', function() {
            input.value = regions;
            optionsList.style.display = 'none'; // Скрываем список после выбора
        });
        optionsList.appendChild(option);
    });
}

// Обработчик ввода текста
input.addEventListener('input', function() {
    filterOptions(input.value);
    showOptionsList();
});

// Показать подсказки при фокусе
input.addEventListener('focus', function() {
    filterOptions(input.value);
    showOptionsList();
});

// Скрываем список при клике вне области
document.addEventListener('click', function(event) {
    if (!event.target.closest('.select-two')) {
        optionsList.style.display = 'none'; // Скрываем список
    }
});

// Убираем прокрутку, но оставляем прокрутку колесиком мыши
optionsList.addEventListener('mousewheel', function(e) {
    e.preventDefault();
    optionsList.scrollTop += e.deltaY;
});



/////////

// Находим необходимые элементы
const regionInput = document.getElementById('region-input');
const clearIcon = document.getElementById('clearButton');

// Изначально скрываем иконку
clearIcon.style.display = 'none';

// Обработчик события на ввод текста
regionInput.addEventListener('input', function() {
    if (regionInput.value.length > 0) {
        // Показываем иконку, если есть текст
        clearIcon.style.display = 'block';
    } else {
        // Прячем иконку, если текст удален
        clearIcon.style.display = 'none';
    }
});

// Обработчик для очистки контента (предположительно у вас это уже настроено)
clearIcon.addEventListener('click', function() {
    regionInput.value = ''; // Очищаем текст
    clearIcon.style.display = 'none'; // Прячем иконку после очистки
});





//////////////////////


 // Функция для отображения опций с подсветкой совпадающих букв в начале
function highlightMatchingOptions(options) {
    const query = input.value.toLowerCase(); // Получаем текст из поля ввода

    optionsList.innerHTML = ''; // Очищаем предыдущие результаты

    options.forEach(option => {
        const optionLower = option.toLowerCase();

        // Проверяем, начинается ли текст с введенного значения
        if (optionLower.startsWith(query)) {
            // Подсвечиваем совпадающие буквы в начале строки
            const highlightedText = `<span style="color: blue;">${option.slice(0, query.length)}</span>${option.slice(query.length)}`;

            const optionDiv = document.createElement('div');
            optionDiv.innerHTML = highlightedText; // Вставляем подсвеченный текст в список
            optionDiv.addEventListener('click', () => {
                input.value = option; // Устанавливаем выбранное значение в поле ввода
                optionsList.style.display = 'none'; // Скрываем список опций
            });
            optionsList.appendChild(optionDiv);
        }
    });

    // Проверяем количество элементов и скрываем/отображаем список
    optionsList.style.display = options.length ? 'block' : 'none';
}

// Обновляем существующий обработчик ввода, чтобы он вызывал новую функцию
input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filteredCities = cities.filter(city => city.toLowerCase().startsWith(query));
    highlightMatchingOptions(filteredCities.slice(0, 10)); // Ограничиваем до 10 элементов
});

// Вызываем функцию отображения предустановленных опций при фокусе
input.addEventListener('focus', () => {
    highlightMatchingOptions(defaultSuggestions);
});

 
// JavaScript

document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('.options-list input[type="checkbox"]');
    const checkboxCountElement = document.getElementById('checkboxCount');
    const optionsList = document.querySelector('.options-list');
    const selectContainer = document.querySelector('.select-container');
    const selectorButton = document.querySelector('.selector-button');
    const vectorImage = document.getElementById('vect');
    const allCheckbox = document.querySelector('input[value="all"]');
    let isOptionsVisible = false;

    function updateCheckboxCount() {
        const checkedCount = document.querySelectorAll('.options-list input[type="checkbox"]:checked').length;
        checkboxCountElement.innerText = `Выбрано: ${checkedCount}`;

        // Показать или скрыть картинку в зависимости от количества выбранных чекбоксов
        if (checkedCount > 0) {
            vectorImage.style.display = 'inline';
        } else {
            vectorImage.style.display = 'none';
        }
    }

    function toggleOptions() {
        isOptionsVisible = !isOptionsVisible;
        optionsList.style.display = isOptionsVisible ? 'block' : 'none';
    }

    // Обработчик клика на первом чекбоксе (По всем)
    allCheckbox.addEventListener('change', function () {
        if (this.checked) {
            checkboxes.forEach(checkbox => {
                if (checkbox !== allCheckbox) {
                    checkbox.checked = false;
                    checkbox.disabled = true; // Делаем остальные чекбоксы неактивными и отключаем их
                }
            });
        } else {
            // Разблокируем остальные чекбоксы, если первый чекбокс не выбран
            checkboxes.forEach(checkbox => {
                if (checkbox !== allCheckbox) {
                    checkbox.disabled = false; // Делаем остальные чекбоксы активными
                }
            });
        }
        updateCheckboxCount();
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateCheckboxCount);
    });

    selectorButton.addEventListener('click', function () {
        isOptionsVisible = false;
        optionsList.style.display = 'none';
    });

    selectContainer.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleOptions();
    });

    document.addEventListener('click', function () {
        if (isOptionsVisible) {
            isOptionsVisible = false;
            optionsList.style.display = 'none';
        }
    });

    // Предотвращаем закрытие списка при клике внутри него
    optionsList.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    // Изначально скрываем картинку
    vectorImage.style.display = 'none';

    updateCheckboxCount();
});


// Новая часть

document.addEventListener("DOMContentLoaded", function () {
    const vectorImage = document.getElementById('vect');
    const checkboxes = document.querySelectorAll('.options-list input[type="checkbox"]');

    // Обработчик клика на картинку
    vectorImage.addEventListener('click', function () {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false; // Снимаем выбор со всех чекбоксов
        });

        // Скрываем картинку, так как больше нет выбранных чекбоксов
        vectorImage.style.display = 'none';

        // Обновляем счетчик выбранных чекбоксов (если используете счетчик)
        const checkboxCountElement = document.getElementById('checkboxCount');
        checkboxCountElement.innerText = `Выбрано: 0`;
    });
});


// Новая часть

document.addEventListener('DOMContentLoaded', function () {
    const nextButton = document.getElementById('next');
    const firstButton = document.getElementById('first');
    const lastButton = document.getElementById('last');
    const previousButton = document.getElementById('dis-one');
    const pageLinksContainer = document.getElementById('page-links');
    const dotsElement = document.getElementById('Ttx');
    const lastPageElement = document.getElementById('twent-three');
    const goButton = document.querySelector('.input_div button');
    const inputField = document.querySelector('.input_div input');
    let currentPage = 1;
    const totalPages = 23;

    function renderPageLinks() {
        pageLinksContainer.innerHTML = ''; // Очищаем контейнер с номерами страниц

        // Определяем диапазон отображаемых страниц
        let startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
        let endPage = Math.min(startPage + 9, totalPages);

        for (let i = startPage; i <= endPage; i++) {
            const pageLink = document.createElement('a');
            pageLink.href = '#';
            pageLink.textContent = i;
            if (i === currentPage) {
                pageLink.classList.add('active');
            }
            pageLink.addEventListener('click', function (e) {
                e.preventDefault();
                currentPage = i;
                renderPageLinks();
            });
            pageLinksContainer.appendChild(pageLink);
        }

        // Обновляем видимость многоточия и последней страницы
        updateVisibility();
    }

    function updateVisibility() {
        if (currentPage >= 21) {
            dotsElement.style.display = 'none';
            lastPageElement.style.display = 'none';
        } else {
            dotsElement.style.display = 'inline';
            lastPageElement.style.display = 'inline';
        }
    }

    nextButton.addEventListener('click', function (e) {
        e.preventDefault();
        if (currentPage < totalPages) {
            currentPage++;
            renderPageLinks();
        }
    });

    previousButton.addEventListener('click', function (e) {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            renderPageLinks();
        }
    });

    firstButton.addEventListener('click', function (e) {
        e.preventDefault();
        currentPage = 1;
        renderPageLinks();
    });

    lastButton.addEventListener('click', function (e) {
        e.preventDefault();
        currentPage = totalPages;
        renderPageLinks();
    });

    // Реализация перехода на страницу при вводе числа и нажатии кнопки "Go"
    goButton.addEventListener('click', function (e) {
        e.preventDefault();
        const inputPage = parseInt(inputField.value);
        if (inputPage >= 1 && inputPage <= totalPages) {
            currentPage = inputPage;
            renderPageLinks();
        } else {
            alert(`Введите число от 1 до ${totalPages}`);
        }
    });

    // Изначально отображаем страницы 1-10
    renderPageLinks();
});


//////////////////////////////////////


