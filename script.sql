CREATE DATABASE DramaLand;
USE DramaLand;

CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(60) NOT NULL
);

SELECT * FROM usuarios;

CREATE TABLE doramas (
    id_dorama INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    genero VARCHAR(100)
);

CREATE TABLE dramaland.votos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dorama VARCHAR(255) NOT NULL,
	quantidade INT NOT NULL DEFAULT 0 
);

-- Inserindo os doramas atualizados com votos iniciais igual a 0
INSERT INTO dramaland.votos (dorama) VALUES 
('It’s Okay to Not Be Okay'),
('Hospital Playlist'),
('Beautiful World'),
('Extraordinary Attorney Woo'),
('Round 6'),
('Sweet Home');

SELECT * FROM dramaland.votos;