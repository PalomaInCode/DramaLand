CREATE DATABASE DramaLand;

USE DramaLand;

-- Criação da tabela 'dramas'
CREATE TABLE dramas (
    id_drama INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    genero VARCHAR(100),
    ano_lancamento YEAR,
    pais_origem VARCHAR(100),
    classificacao VARCHAR(10)
);

-- Criação da tabela 'usuarios'
CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE respostas_quiz (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,  -- Se você tiver uma tabela de usuários
    quiz_id INT,     -- Pode ser usado para identificar o quiz
    pergunta TEXT,
    resposta_usuario TEXT,
    resposta_correta TEXT,
    data_resposta TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select * from usuarios;