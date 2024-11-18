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

// Verificar o estado de login quando a página for carregada
window.onload = function() {
    if (sessionStorage.EMAIL_USUARIO) {
        // Esconde as opções de "Login" e "Cadastro"
        document.getElementById("loginLink").style.display = "none";
        document.getElementById("cadastroLink").style.display = "none";

        // Exibe a opção de "Perfil" e "Sair"
        document.getElementById("perfilLink").style.display = "block";
        document.getElementById("sairLink").style.display = "block";
    }
}

// Função de logout
function sair() {
    sessionStorage.removeItem("EMAIL_USUARIO");
    window.location = "login.html";
}

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function updateSlider(index) {
        slides.style.transform = `translateX(-${index * 100}%)`;

        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        currentIndex = index;
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'), 10);
            updateSlider(index);
        });
    });

    // Navegação automática
    setInterval(() => {
        const nextIndex = (currentIndex + 1) % slides.children.length;
        updateSlider(nextIndex);
    }, 3000); // Trocar de slide a cada 5 segundos
});