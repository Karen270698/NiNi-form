//Кнопка обновить
document.querySelectorAll('.refresh-btn').forEach(button => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('img');

        // --Если иконка уже крутится, прекращаем анимацию
        if (icon.classList.contains('spinning')) {
            icon.classList.remove('spinning');
        } else {
            // --Запускаем бесконечное вращение
            icon.classList.add('spinning');
        }
    });
});

//Сбросс сессии
document.getElementById('reset-session-btn').addEventListener('click', function() {
    // --Показать зеленую строку успеха
    document.getElementById('success-status').style.display = 'flex';

    // --Красная строка не отображается в JavaScript
    // --document.getElementById('error-status').style.display = 'none';  // Это исключено
});

//Модельное окно
// --Получаем элементы
const modal = document.getElementById('history-modal');
const historyBtn = document.querySelector('.history-btn');
const closeBtn = document.querySelector('.close-btn');

// --Открыть модальное окно при нажатии на кнопку
historyBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// --Закрыть модальное окно при нажатии на крестик
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// --Закрыть модальное окно при клике на фон
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Изменения статуса динамически
document.addEventListener('DOMContentLoaded', () => {
    updateStatusBox('ok'); // Установить статус "Ok" по умолчанию
});

function updateStatusBox(status) {
    const statusElement = document.querySelector('.status-box');
    if (statusElement) {
        statusElement.setAttribute('data-status-box', status);
        statusElement.textContent = {
            ok: 'Ok',
            warning: 'Warning',
            error: 'Error',
            info: 'Info'
        }[status] || 'Unknown';
    }
}
