-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: minireto
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ingrediente`
--

DROP TABLE IF EXISTS `ingrediente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingrediente` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `medida` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingrediente`
--

LOCK TABLES `ingrediente` WRITE;
/*!40000 ALTER TABLE `ingrediente` DISABLE KEYS */;
INSERT INTO `ingrediente` VALUES (1,'Pan',''),(2,'Mantequilla','gramos'),(3,'Pollo','pechugas'),(4,'Lechuga','hojas'),(5,'Tomate','unidades'),(6,'Cebolla','rodajas'),(7,'Aguacate','cubos'),(8,'Aceite de oliva','cucharadas'),(9,'Vinagre','cucharadas'),(10,'Sal','al gusto'),(11,'Pimienta','al gusto'),(12,'Plátano','unidades'),(13,'Fresas','tazas'),(14,'Piña','tazas'),(15,'Yogur natural','tazas'),(16,'Leche','tazas');
/*!40000 ALTER TABLE `ingrediente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proporcion`
--

DROP TABLE IF EXISTS `proporcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proporcion` (
  `ingrediente_id` int NOT NULL,
  `receta_id` int NOT NULL,
  `proporcion` varchar(255) NOT NULL,
  PRIMARY KEY (`ingrediente_id`,`receta_id`),
  KEY `receta_id` (`receta_id`),
  CONSTRAINT `proporcion_ibfk_1` FOREIGN KEY (`ingrediente_id`) REFERENCES `ingrediente` (`id`),
  CONSTRAINT `proporcion_ibfk_2` FOREIGN KEY (`receta_id`) REFERENCES `receta` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proporcion`
--

LOCK TABLES `proporcion` WRITE;
/*!40000 ALTER TABLE `proporcion` DISABLE KEYS */;
INSERT INTO `proporcion` VALUES (1,1,'2'),(2,1,'20'),(3,2,'2'),(4,2,'1'),(5,2,'2'),(6,2,'0.5'),(7,2,'1'),(8,2,'2'),(9,2,'1'),(10,2,'0.5'),(11,2,'0.5'),(12,3,'1'),(13,3,'1.5'),(14,3,'1'),(15,3,'1'),(16,3,'2');
/*!40000 ALTER TABLE `proporcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receta`
--

DROP TABLE IF EXISTS `receta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `tiempo` int DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `pasos` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receta`
--

LOCK TABLES `receta` WRITE;
/*!40000 ALTER TABLE `receta` DISABLE KEYS */;
INSERT INTO `receta` VALUES (1,'Pan tostado',20,'entrada','1. Saca pan 2. Ponlo en un comal hasta el tostado deseado 3. Agrega mantequilla 4. Disfruta'),(2,'Ensalada de pollo',30,'entrada','1. Cocina el pollo a la parrilla hasta que esté bien cocido. 2. Corta el pollo en trozos pequeños. 3. Mezcla el pollo, lechuga, tomate, cebolla y aguacate en un tazón. 4. Aliña con aceite de oliva, vinagre, sal y pimienta al gusto. 5. Mezcla bien y sirve.'),(3,'Smoothie de frutas',10,'bebida','1. Corta las frutas en trozos pequeños. 2. Agrega las frutas al vaso de la licuadora. 3. Añade el yogur y la leche al vaso. 4. Licúa todo hasta obtener una consistencia suave. 5. Sirve el smoothie en vasos y decora con frutas frescas.');
/*!40000 ALTER TABLE `receta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-09 11:12:55
