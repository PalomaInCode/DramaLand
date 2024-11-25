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

// Adiciona evento ao botão para aplicar filtros
document.addEventListener("DOMContentLoaded", () => {
    const botaoFiltros = document.getElementById("aplicarFiltros");
    botaoFiltros.addEventListener("click", () => {
        const genero = document.getElementById("filtroGenero").value;
        const nota = document.getElementById("filtroNota").value;

        console.log(`Filtros aplicados:\nGênero: ${genero}\nNota: ${nota}`);
        alert(`Filtros aplicados:\nGênero: ${genero}\nNota: ${nota}`);
    });
});

// Simulação de busca de dramas
const dramas = [
    { name: "Goblin", genre: "Fantasia", country: "Coreia do Sul" },
    { name: "Vincenzo", genre: "Ação", country: "Coreia do Sul" },
    { name: "Itaewon Class", genre: "Drama", country: "Coreia do Sul" },
    { name: "Hotel Del Luna", genre: "Fantasia", country: "Coreia do Sul" },
  ];
  
  const searchBar = document.getElementById("searchBar");
  const searchResults = document.getElementById("searchResults");
  
  searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    const filteredDramas = dramas.filter(drama => 
      drama.name.toLowerCase().includes(query) || 
      drama.genre.toLowerCase().includes(query) ||
      drama.country.toLowerCase().includes(query)
    );
  
    // Exibir resultados
    searchResults.innerHTML = "";
    filteredDramas.forEach(drama => {
      const div = document.createElement("div");
      div.textContent = `${drama.name} - ${drama.genre} (${drama.country})`;
      div.style.padding = "5px";
      searchResults.appendChild(div);
    });
  });
  