-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 20, 2021 at 12:55 AM
-- Server version: 10.3.28-MariaDB-log
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yiwenguc_individual_assignment`
--

-- --------------------------------------------------------

--
-- Table structure for table `Persons2`
--

CREATE TABLE `Persons2` (
  `ID` int(11) NOT NULL,
  `Question` varchar(255) DEFAULT NULL,
  `Option1` varchar(255) DEFAULT NULL,
  `Option2` varchar(255) DEFAULT NULL,
  `Option3` varchar(255) DEFAULT NULL,
  `Option4` varchar(255) DEFAULT NULL,
  `Correct` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Persons2`
--

INSERT INTO `Persons2` (`ID`, `Question`, `Option1`, `Option2`, `Option3`, `Option4`, `Correct`) VALUES
(0, 'Who is your favorite teacher?', 'Amir', 'darcy', 'Albert', '', 'A'),
(1, 'Who is your LEAST favorite teacher?', 'Amir', 'darcy', '', '', 'B'),
(2, 'Which is your favorite course?', 'Web dev', 'Database', 'C', '', 'A'),
(3, 'Favorite food?', 'Chicken', 'Beef', '', '', 'A'),
(4, 'Are you happy', 'Yes', 'No', '', '', 'A'),
(5, 'test', 'A', 'B', '', '', 'A'),
(6, 'rgeger', 'A', 'B', '', '', 'A'),
(7, 'ergerg', 'A', 'B', '', '', 'A'),
(8, 'test1', '1', '2', '', '', 'A');

-- --------------------------------------------------------

--
-- Table structure for table `scoreboard`
--

CREATE TABLE `scoreboard` (
  `Username` varchar(255) DEFAULT NULL,
  `Score` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `scoreboard`
--

INSERT INTO `scoreboard` (`Username`, `Score`) VALUES
('Tiffany', 60),
('Judao', 98),
('Iris', 99),
('Amir', 100),
('Rahim', 102),
('Kurt', 92),
('Billy', 94),
('Yang', 60),
('Random', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Persons2`
--
ALTER TABLE `Persons2`
  ADD PRIMARY KEY (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
