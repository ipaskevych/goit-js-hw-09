console.log('Form');

let formData = { 
    email: "", 
    message: "" 
};

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

// 2. Перевірка сховища при завантаженні сторінки
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
    formData = JSON.parse(savedData);
    // Заповнюємо поля форми даними з об'єкта
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

// 3. Делегування події input
form.addEventListener('input', (event) => {
    // Оновлюємо значення в об'єкті (використовуємо trim для видалення пробілів)
    formData[event.target.name] = event.target.value.trim();
    
    // Записуємо оновлений об'єкт у локальне сховище
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 4. Сабміт форми
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Перевірка на порожні поля
    if (formData.email === "" || formData.message === "") {
        return alert('Fill please all fields');
    }

    // Вивід у консоль та очищення
    console.log(formData);
    
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: "", message: "" };
    form.reset();
});