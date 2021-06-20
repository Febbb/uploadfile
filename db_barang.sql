-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2021 at 01:35 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_barang`
--

-- --------------------------------------------------------

--
-- Table structure for table `tabel_barang`
--

CREATE TABLE `tabel_barang` (
  `id_barang` int(4) NOT NULL,
  `nama_barang` varchar(30) NOT NULL,
  `harga_jual` int(18) NOT NULL,
  `harga_beli` int(18) NOT NULL,
  `stok` int(4) NOT NULL,
  `path_barang` varchar(40) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tabel_barang`
--

INSERT INTO `tabel_barang` (`id_barang`, `nama_barang`, `harga_jual`, `harga_beli`, `stok`, `path_barang`, `created_at`, `updated_at`) VALUES
(51, 'kursi', 100000, 100000, 20, 'assets/img/uploads/kursi-studio.jpg', '2021-06-20 04:46:16', '2021-06-20 07:29:50'),
(52, 'rice cooker', 230000, 190000, 12, 'assets/img/uploads/rice_cooker.jpg', '2021-06-20 04:47:26', '2021-06-20 04:47:26'),
(53, 'seterika', 100000, 100000, 20, 'assets/img/uploads/setrika.jpg', '2021-06-20 06:07:36', '2021-06-20 07:25:21'),
(54, 'microwave', 120000, 100000, 21, 'assets/img/uploads/microwave.jpg', '2021-06-20 07:24:17', '2021-06-20 07:25:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tabel_barang`
--
ALTER TABLE `tabel_barang`
  ADD PRIMARY KEY (`id_barang`),
  ADD UNIQUE KEY `UNIQUE` (`nama_barang`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tabel_barang`
--
ALTER TABLE `tabel_barang`
  MODIFY `id_barang` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
