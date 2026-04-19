CREATE DATABASE `sach`;

CREATE TABLE `book_catalog` (
  `idCatalog` int NOT NULL AUTO_INCREMENT,
  `nameCatalog` varchar(255) NOT NULL,
  PRIMARY KEY (`idCatalog`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `book_catalog` (`idCatalog`, `nameCatalog`) VALUES
	(1, 'Khoa học'),
	(2, 'Văn học'),
	(3, 'Tiểu thuyết'),
	(4, 'Lịch sử'),
	(5, 'Tài chính');

CREATE TABLE IF NOT EXISTS `book_products` (
  `idProduct` int NOT NULL AUTO_INCREMENT,
  `nameProduct` varchar(255) NOT NULL,
  `priceProduct` decimal(10,2) NOT NULL,
  `idCatalog` int DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idProduct`),
  CONSTRAINT `fk_catalog`
    FOREIGN KEY (`idCatalog`) REFERENCES `book_catalog`(`idCatalog`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `book_products` (`idProduct`, `nameProduct`, `priceProduct`, `idCatalog`, `images`) VALUES
	(1, 'Toán Cao Cấp', 120000.00, 1, '1.jpg'),
	(2, 'Văn Học Việt Nam', 95000.00, 2, '2.jpg'),
	(3, 'Harry Potter', 150000.00, 3, '3.jpg'),
	(4, 'Lịch sử Thế giới', 130000.00, 4, '4.jpg'),
	(5, 'Đầu tư chứng khoán', 200000.00, 5, '5.jpg'),
  (6, 'Công nghệ thông tin', 180000.00, 1, '6.jpg'),
  (7, 'Tiếng Anh giao tiếp', 110000.00, 2, '7.jpg'),
  (8, 'Khoa học tự nhiên', 125000.00, 3, '8.jpg'),
  (9, 'Marketing căn bản', 140000.00, 4, '9.jpg');


CREATE TABLE IF NOT EXISTS `book_tbluser` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `username` (`username`),
  `role` int DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `book_tbluser` (`idUser`, `username`, `password`, `role`) VALUES
	(1, 'admin', '1', 1),
	(2, 'user', 'pass', 0);