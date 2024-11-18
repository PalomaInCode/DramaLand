document.addEventListener("DOMContentLoaded", function () {
  // Função para atualizar mensagens de status
  function atualizarStatus(campo, mensagem, isErro) {
    const statusDiv = document.getElementById(`${campo}Status`);
    if (statusDiv) {
      statusDiv.innerText = mensagem;
      statusDiv.style.color = isErro ? "red" : "green";
    } else {
      console.error(`Elemento de status ${campo} não encontrado.`);
    }
  }

  // Função para validações complexas
  function validarCampos(nome, email, senha, confirmSenha) {
    const nomeRegex = /^[a-zA-ZÀ-ÿ\s]{2,}$/;
    if (!nomeRegex.test(nome)) {
      return { campo: "name", mensagem: "O nome deve conter apenas letras e espaços e ter no mínimo 2 caracteres." };
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA4A-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return { campo: "email", mensagem: "Por favor, insira um e-mail válido." };
    }

    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!senhaRegex.test(senha)) {
      return {
        campo: "password",
        mensagem:
          "A senha deve ter no mínimo 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial.",
      };
    }

    if (senha !== confirmSenha) {
      return { campo: "confirmPassword", mensagem: "As senhas não coincidem." };
    }

    return null; // Nenhum erro encontrado
  }

  // Função principal para cadastro
  function cadastrar() {
    const nome = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const senha = document.getElementById("registerPassword").value.trim();
    const confirmSenha = document.getElementById("confirmPassword").value.trim();
    const loadingContainer = document.getElementById("loading-container");
    const successMessage = document.getElementById("successMessage");

    // Resetando mensagens de status
    atualizarStatus("name", "", false);
    atualizarStatus("email", "", false);
    atualizarStatus("password", "", false);
    atualizarStatus("confirmPassword", "", false);

    // Validação complexa
    const erro = validarCampos(nome, email, senha, confirmSenha);
    if (erro) {
      atualizarStatus(erro.campo, erro.mensagem, true);
      return false;
    }

    // Exibe o spinner ao iniciar o processo
    loadingContainer.style.display = "block"; // Exibe o spinner

    // Requisição para a API
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeServer: nome,
        emailServer: email,
        senhaServer: senha,
      }),
    })
      .then((resposta) => {
        if (resposta.ok) {
          // Cadastro bem-sucedido
          document.getElementById("registerForm").reset(); // Limpa o formulário
          successMessage.classList.remove("hidden"); // Exibe a mensagem de sucesso
          setTimeout(() => {
            window.location.href = "/login.html"; // Redireciona para login
          }, 3000);
        } else {
          return resposta.text().then((erro) => {
            if (erro.includes("E-mail já cadastrado")) {
              atualizarStatus("email", "E-mail já cadastrado, por favor use outro e-mail.", true);
            } else {
              throw new Error(erro);
            }
          });
        }
      })
      .catch((erro) => {
        console.error("Erro no cadastro:", erro);
        atualizarStatus("email", erro.message || "Erro ao realizar o cadastro.", true);
      })
      .finally(() => {
        // Oculta o spinner após o processo (tanto sucesso quanto erro)
        loadingContainer.style.display = "none"; // Esconde o spinner
      });

    return true;
  }

  // Evento para validar e processar o formulário
  document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Impede recarregamento padrão
    cadastrar(); // Chama a função de cadastro
  });
});
