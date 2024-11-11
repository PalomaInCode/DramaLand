var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.autenticar(email)
            .then(function (resultadoAutenticar) {
                if (resultadoAutenticar.length == 1) {
                    // Comparando diretamente a senha informada com a senha armazenada no banco de dados
                    if (senha === resultadoAutenticar[0].senha) {
                        const { senha, ...usuarioSemSenha } = resultadoAutenticar[0];
                        res.json(usuarioSemSenha);
                    } else {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    }
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined || email == undefined || senha == undefined) {
        return res.status(400).send("Dados incompletos!");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).send("Formato de email inválido!");
    }

    usuarioModel.verificarEmailExistente(email)
        .then(function (resultadoVerificacao) {
            if (resultadoVerificacao.length > 0) {
                res.status(400).send("Email já cadastrado.");
            } else {
                // Armazenando a senha em texto simples (não recomendado em produção)
                usuarioModel.cadastrar(nome, email, senha)
                    .then(function (resultado) {
                        res.json(resultado);
                    })
                    .catch(function (erro) {
                        res.status(500).json(erro.sqlMessage);
                    });
            }
        });
}

module.exports = {
    autenticar,
    cadastrar
}
