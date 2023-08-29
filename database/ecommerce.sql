-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 26, 2023 at 11:03 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `customer_email` varchar(255) DEFAULT NULL,
  `customer_address` text DEFAULT NULL,
  `total_amount` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`) VALUES
(1, 'Product 1', 500.00, 'product1.jpg'),
(2, 'Product 2', 100.00, 'product2.jpg'),
(3, 'Product 3', 200.00, 'product3.jpg'),
(4, 'Product 4', 599.00, 'product4.jpg'),
(5, 'Product 5', 199.00, 'product5.jpg'),
(6, 'Product 6', 99.00, 'product6.jpg'),
(7, 'Product 7', 50.00, 'product7.jpg'),
(8, 'Product 8', 1199.00, 'product8.jpg'),
(9, 'Product 9', 1500.00, 'product9.jpg'),
(10, 'Product 10', 1000.00, 'product10.jpg'),
(11, 'Product 11', 799.00, 'product11.jpg'),
(12, 'Product 12', 699.00, 'product12.jpg'),
(13, 'Product 13', 599.00, 'product13.jpg'),
(14, 'Product 14', 450.00, 'product14.jpg'),
(15, 'Product 15', 500.00, 'product15.jpg'),
(16, 'Product 16', 1000.00, 'product16.jpg'),
(17, 'Product 17', 999.00, 'product17.jpg'),
(18, 'Product 18', 580.00, 'product18.jpg'),
(19, 'Product 19', 690.00, 'product19.jpg'),
(20, 'Product 20', 870.00, 'product20.jpg'),
(21, 'Product 21', 5.00, 'product21.jpg'),
(22, 'Product 22', 10.00, 'product22.jpg'),
(23, 'Product 23', 10.00, 'product23.jpg'),
(24, 'Product 24', 760.00, 'product24.jpg'),
(25, 'Product 25', 299.00, 'product25.jpg'),
(26, 'Product 26', 399.00, 'product26.jpg'),
(27, 'Product 27', 499.00, 'product27.jpg'),
(28, 'Product 28', 599.00, 'product28.jpg'),
(29, 'Product 29', 699.00, 'product29.jpg'),
(30, 'Product 30', 799.00, 'product30.jpg'),
(31, 'Product 31', 899.00, 'product31.jpg'),
(32, 'Product 32', 999.00, 'product32.jpg'),
(33, 'Product 33', 1000.00, 'product33.jpg'),
(34, 'Product 34', 200.00, 'product34.jpg'),
(35, 'Product 35', 300.00, 'product35.jpg'),
(36, 'Product 36', 400.00, 'product36.jpg'),
(37, 'Product 37', 500.00, 'product37.jpg'),
(38, 'Product 38', 699.00, 'product38.jpg'),
(39, 'Product 39', 750.00, 'product39.jpg'),
(40, 'Product 40', 850.00, 'product40.jpg'),
(41, 'Product 41', 950.00, 'product41.jpg'),
(42, 'Product 42', 1000.00, 'product42.jpg'),
(43, 'Product 43', 2000.00, 'product43.jpg'),
(44, 'Product 44', 3000.00, 'product44.jpg'),
(45, 'Product 45', 2099.00, 'product45.jpg'),
(46, 'Product 46', 1999.00, 'product46.jpg'),
(47, 'Product 47', 700.00, 'product47.jpg'),
(48, 'Product 48', 800.00, 'product48.jpg'),
(49, 'Product 49', 900.00, 'product49.jpg'),
(50, 'Product 50', 1000.00, 'product50.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(2, 'aaa', 'aaa@aaa', '$2y$10$R8mCPSD0xh6EOmRVhtPD..KlzGoYPEIWL2wWlqwnAwvrKf4TasKCm'),
(3, 'linta', 'aaa@aaa', '$2y$10$qqaqZTUVzlKdxLkDcDEebOj5aw4yTYoPilQNM61IIinxdhrmdhtDW'),
(4, 'lintarana', 'lintarana16@gmail.com', '$2y$10$vBYnBcG.E5zf9Cy7Pf0GpeatJXOFbszqdJW4URllPdi9RpGox1zZG'),
(6, 'aaa', 'aaa@aaa', '$2y$10$NHyhLDhRV2qi7ijKTCdf3OQMM81LkvwdbHKC40ZeYIEGEOSrJIXTW'),
(7, 'aaa', 'aaa@aaa', '$2y$10$zy2xTWEN19tUmeoaWKN38OtgL.QAbfsf3PQaVwDLW0yq/g/uPRwPW'),
(8, 'aa', 'aa@aa', '$2y$10$QRSOWJtQ5OEhwT3IhDjB3ecNY8UW9Jz9dCOgSUGSm3Lbv5MvOq3KW'),
(9, 'aa', 'aa@aa', '$2y$10$xnPbxrW4OE2mZxygsVqAXeFETYAea4E0NhHQKSwWTmgRrSHw2Ci0G'),
(10, '123', '123@123', '$2y$10$Usmzf87IXDXhM/88VV4Qx.qwkRtHXrT7O9g3FTalAlJIB1SuW3BOW'),
(12, 'linta', 'linta@gmail.com', '$2y$10$QlUW/r2zkSjc9tgqvGqMeOqVLjgDGintRrK9ST02AkNaHn2ytGDLC');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
