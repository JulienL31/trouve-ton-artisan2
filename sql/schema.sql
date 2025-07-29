
DROP DATABASE IF EXISTS trouve_ton_artisan;
CREATE DATABASE trouve_ton_artisan CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE trouve_ton_artisan;

CREATE TABLE artisans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    profession VARCHAR(100) NOT NULL,
    description TEXT,
    ville VARCHAR(100),
    note FLOAT CHECK (note >= 0 AND note <= 5),
    email VARCHAR(150),
    telephone VARCHAR(20),
    photo VARCHAR(255)
);
