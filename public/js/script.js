document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('loginMessage');

    // Simulação de verificação de usuário
    if (username === "user" && password === "1234") {
        message.textContent = "Login bem-sucedido!";
        message.style.color = "green";
    } else {
        message.textContent = "Usuário ou senha incorretos.";
        message.style.color = "red";
    }
});

document.getElementById('signupForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    const newUsername = document.getElementById('newUsername').value;
    const email = document.getElementById('email').value;
    const newPassword = document.getElementById('newPassword').value;
    const message = document.getElementById('signupMessage');

    // Simulação de criação de conta
    if (newUsername && email && newPassword) {
        message.textContent = "Cadastro realizado com sucesso!";
        message.style.color = "green";
    } else {
        message.textContent = "Por favor, preencha todos os campos.";
        message.style.color = "red";
    }
});
