// Приветственное сообщение
function greetUser() {
    alert("Добро пожаловать на мой медицинский сайт!");
}

// Функция для показа текущей даты в разделе "Главная"
function showDate() {
    const dateElement = document.getElementById("date");
    const today = new Date();
    dateElement.innerText = "Сегодня: " + today.toLocaleDateString();
}

// Запуск функций при загрузке страницы
window.onload = function() {
    greetUser();
    showDate();
};
// Функция для переключения темы
function toggleTheme() {
    document.body.classList.toggle("dark-theme");

    // Меняем текст кнопки в зависимости от текущей темы
    const button = document.querySelector("button");
    if (document.body.classList.contains("dark-theme")) {
        button.innerText = "Светлая тема";
    } else {
        button.innerText = "Тёмная тема";
    }
}
// Функция для отображения разделов при прокрутке
function revealOnScroll() {
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const isVisible = sectionTop < window.innerHeight - 100;
        if (isVisible) {
            section.classList.add('visible');
        }
    });
}

// Добавляем событие прокрутки
window.addEventListener('scroll', revealOnScroll);
// Обработка формы обратной связи
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы при отправке
    
    // Можно добавить логику отправки данных на сервер здесь
    
    // Выводим сообщение об успешной отправке
    alert('Спасибо! Ваше сообщение отправлено.');
    
    // Сброс формы
    this.reset();
});
// Обработка формы для добавления отзывов
document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Получаем данные из формы
    const name = document.getElementById('review-name').value;
    const message = document.getElementById('review-message').value;

    // Создаем новый элемент для отзыва
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');
    reviewItem.innerHTML = `<strong>${name}</strong><p>${message}</p>`;

    // Добавляем отзыв в список
    document.getElementById('review-list').appendChild(reviewItem);

    // Очищаем форму
    this.reset();
});
// Находим элементы формы и список отзывов
const reviewForm = document.getElementById('reviewForm');
const reviewsList = document.getElementById('reviewsList');

// Обработчик отправки формы
reviewForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Отключаем стандартное поведение формы

    // Получаем значения из полей формы
    const name = document.getElementById('reviewName').value;
    const text = document.getElementById('reviewText').value;

    // Создаём новый элемент для отзыва
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review');
    reviewItem.innerHTML = `<strong>${name}</strong><p>${text}</p>`;

    // Добавляем отзыв в список
    reviewsList.appendChild(reviewItem);

    // Очищаем форму
    reviewForm.reset();
});

