-- --------------------------------------------------------
-- Máy chủ:                      127.0.0.1
-- Server version:               8.4.3 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Phiên bản:           12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for sach
CREATE DATABASE IF NOT EXISTS `sach` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sach`;

-- Dumping structure for table sach.book_catalog
CREATE TABLE IF NOT EXISTS `book_catalog` (
  `idCatalog` int NOT NULL AUTO_INCREMENT,
  `nameCatalog` varchar(255) NOT NULL,
  PRIMARY KEY (`idCatalog`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table sach.book_catalog: ~0 rows (approximately)
INSERT INTO `book_catalog` (`idCategory`, `nameCategory`) VALUES
	(1, 'Khoa học'),
	(2, 'Văn học'),
	(3, 'Tiểu thuyết'),
	(4, 'Lịch sử'),
	(5, 'Tài chính');

-- Dumping structure for table sach.book_products
CREATE TABLE IF NOT EXISTS `book_products` (
  `idProduct` int NOT NULL AUTO_INCREMENT,
  `nameProduct` varchar(255) NOT NULL,
  `priceProduct` decimal(10,2) NOT NULL,
  `nameCategory` varchar(255) DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idProduct`)
  CONSTRAINT `fk_catalog`
    FOREIGN KEY (`idCatalog`) REFERENCES `book_catalog`(`idCatelory`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table sach.book_products: ~0 rows (approximately)
INSERT INTO `book_products` (`idProduct`, `nameProduct`, `priceProduct`, `idCategory`, `images`) VALUES
	(1, 'Toán Cao Cấp', 120000.00, 1, '1.jpg'),
	(2, 'Văn Học Việt Nam', 95000.00, 2, '2.jpg'),
	(3, 'Harry Potter', 150000.00, 3, '3.jpg'),
	(4, 'Lịch sử Thế giới', 130000.00, 4, '4.jpg'),
	(5, 'Đầu tư chứng khoán', 200000.00, 5, '5.jpg');
  (6, 'Công nghệ thông tin', 180000.00, 1, '6.jpg'),
  (7, 'Tiếng Anh giao tiếp', 110000.00, 2, '7.jpg'),
  (8, 'Khoa học tự nhiên', 125000.00, 3, '8.jpg'),
  (9, 'Marketing căn bản', 140000.00, 4, '9.jpg');


-- Dumping structure for table sach.book_tbluser
CREATE TABLE IF NOT EXISTS `book_tbluser` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `username` (`username`),
  `rule` int DEFAULT '0',
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table sach.book_tbluser: ~0 rows (approximately)
INSERT INTO `book_tbluser` (`idUser`, `username`, `password`, `rule`) VALUES
	(1, 'admin', '1', 1),
	(2, 'user', 'pass'),
	(3, 'user2', 'pass2');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
