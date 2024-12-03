let users = []; // Список пользователей (для симуляции базы данных)
let currentUser = null;

function showRegisterForm() {
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
}

function showLoginForm() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (username && password) {
        // Проверка на существующего пользователя
        if (users.find(user => user.username === username)) {
            alert('Username already exists!');
            return;
        }

        users.push({ username, password });
        alert('Registration successful!');
        showLoginForm();
    } else {
        alert('Please fill in both fields.');
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        currentUser = user;
        alert('Login successful!');
        showGame();
    } else {
        alert('Invalid username or password.');
    }
}

function showGame() {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
}

function startGame() {
    alert('The game has started! (This is just a placeholder.)');
}

function logout() {
    currentUser = null;
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('auth-container').style.display = 'block';
}
