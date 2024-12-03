let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;

const dino = document.getElementById('dino');
const gameContainer = document.getElementById('game-container');
const authContainer = document.getElementById('auth-container');
const logoutButton = document.getElementById('logout');

const jumpDino = () => {
    dino.classList.add('jumping');
    setTimeout(() => {
        dino.classList.remove('jumping');
    }, 500); // Динозаврик будет прыгать 0.5 секунды
};

const startGame = () => {
    gameContainer.style.display = 'block';
    authContainer.style.display = 'none';
    setInterval(jumpDino, 2000); // Динозаврик будет прыгать каждые 2 секунды
};

const logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    gameContainer.style.display = 'none';
    authContainer.style.display = 'flex';
};

const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (localStorage.getItem('username') === username) {
        alert('Пользователь с таким именем уже существует');
        return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Регистрация успешна!');
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (localStorage.getItem('username') === username && localStorage.getItem('password') === password) {
        alert('Авторизация успешна!');
        startGame();
    } else {
        alert('Неверные данные');
    }
});

logoutButton.addEventListener('click', logout);

// Проверка, авторизован ли пользователь
if (localStorage.getItem('username') && localStorage.getItem('password')) {
    gameContainer.style.display = 'block';
    authContainer.style.display = 'none';
    setInterval(jumpDino, 2000); // Динозаврик начнёт прыгать сразу после авторизации
}
