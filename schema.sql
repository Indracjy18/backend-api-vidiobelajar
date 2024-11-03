-- Membuat database
CREATE DATABASE vidio_belajar;

USE vidio_belajar;

CREATE TABLE USER (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
    fullname VARCHAR(100) NOT NULL
    password VARCHAR(100) NOT NULL  
);

CREATE TABLE TUTOR (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(100) NOT NULL
);

CREATE TABLE KATEGORI_KELAS (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE PRODUK_KELAS (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(100) NOT NULL,
    deskripsi TEXT NOT NULL,
    tutor_id INT,
    kategori_id INT,
    FOREIGN KEY (tutor_id) REFERENCES TUTOR(id),
    FOREIGN KEY (kategori_id) REFERENCES KATEGORI_KELAS(id)
);

CREATE TABLE KELAS_SAYA (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    produk_kelas_id INT,
    tanggal_mulai DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES USER(id),
    FOREIGN KEY (produk_kelas_id) REFERENCES PRODUK_KELAS(id)
);

CREATE TABLE MODUL_KELAS (
    id INT PRIMARY KEY AUTO_INCREMENT,
    produk_kelas_id INT,
    judul VARCHAR(100) NOT NULL,
    urutan INT NOT NULL,
    FOREIGN KEY (produk_kelas_id) REFERENCES PRODUK_KELAS(id)
);

CREATE TABLE MATERIAL (
    id INT PRIMARY KEY AUTO_INCREMENT,
    modul_kelas_id INT,
    judul VARCHAR(100) NOT NULL,
    tipe ENUM('video', 'dokumen', 'quiz') NOT NULL,
    konten TEXT,
    FOREIGN KEY (modul_kelas_id) REFERENCES MODUL_KELAS(id)
);

CREATE TABLE PRETEST (
    id INT PRIMARY KEY AUTO_INCREMENT,
    material_id INT,
    pertanyaan TEXT NOT NULL,
    FOREIGN KEY (material_id) REFERENCES MATERIAL(id)
);

CREATE TABLE `ORDER` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    produk_kelas_id INT,
    tanggal_order DATETIME DEFAULT CURRENT_TIMESTAMP,
    status ENUM('pending', 'completed', 'cancelled') DEFAULT 'pending',
    FOREIGN KEY (user_id) REFERENCES USER(id),
    FOREIGN KEY (produk_kelas_id) REFERENCES PRODUK_KELAS(id)
);

CREATE TABLE PEMBAYARAN (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    jumlah DECIMAL(10, 2) NOT NULL,
    tanggal_pembayaran DATETIME DEFAULT CURRENT_TIMESTAMP,
    status ENUM('success', 'failed', 'pending') DEFAULT 'pending',
    FOREIGN KEY (order_id) REFERENCES `ORDER`(id)
);

CREATE TABLE REVIEW (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    produk_kelas_id INT,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    komentar TEXT,
    tanggal_review DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES USER(id),
    FOREIGN KEY (produk_kelas_id) REFERENCES PRODUK_KELAS(id)
);