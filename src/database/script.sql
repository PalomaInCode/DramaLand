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

-- Criação da tabela 'episodios'
CREATE TABLE episodios (
    id_episodio INT AUTO_INCREMENT PRIMARY KEY,
    id_drama INT,
    numero INT,
    titulo VARCHAR(255) NOT NULL,
    duracao TIME,
    data_lancamento DATE,
    FOREIGN KEY (id_drama) REFERENCES dramas(id_drama)
);

-- Criação da tabela 'personagens'
CREATE TABLE personagens (
    id_personagem INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    id_drama INT,
    descricao TEXT,
    ator VARCHAR(255),
    FOREIGN KEY (id_drama) REFERENCES dramas(id_drama)
);

-- Criação da tabela 'elenco'
CREATE TABLE elenco (
    id_elenco INT AUTO_INCREMENT PRIMARY KEY,
    id_drama INT,
    id_personagem INT,
    papel VARCHAR(255),
    FOREIGN KEY (id_drama) REFERENCES dramas(id_drama),
    FOREIGN KEY (id_personagem) REFERENCES personagens(id_personagem)
);

-- Criação da tabela 'classificacoes'
CREATE TABLE classificacoes (
    id_classificacao INT AUTO_INCREMENT PRIMARY KEY,
    id_drama INT,
    id_usuario INT,
    nota INT CHECK (nota BETWEEN 1 AND 10),
    comentario TEXT,
    FOREIGN KEY (id_drama) REFERENCES dramas(id_drama)
);

-- Criação da tabela 'usuarios'
CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    data_registro DATETIME
);

select * from usuarios;