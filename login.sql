-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 05, 2022 at 07:57 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodelogin`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `Names` varchar(20) NOT NULL,
  `Passwords` varchar(20) NOT NULL,
  `IDS` varchar(20) NOT NULL,
  `Roles` varchar(20) NOT NULL,
  `Department` text NOT NULL,
  `AppAcess` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`Names`, `Passwords`, `IDS`, `Roles`, `Department`, `AppAcess`) VALUES
('User1', 'User1Password', 'User1001', 'Payroll manager', 'HR', 'Table 1, 2, 3, 4'),
('User2', 'User2Password', 'User2001', 'Payroll specialist', 'HR', 'Table 1, 2, 3, 4'),
('User3', 'User3Password', 'User3001', 'Payroll assistant', 'HR', 'Table 1'),
('User4', 'User4Password', 'User4001', 'Payroll assistant', 'HR', 'Table 1');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
