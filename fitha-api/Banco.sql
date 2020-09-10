-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: fitha
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `categoria_nome` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (4,'Madeira'),(6,'Cerâmica'),(7,'Plástico'),(8,'Tecido'),(9,'Vidro'),(10,'Metal');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `cor` varchar(20) DEFAULT NULL,
  `descricao` varchar(200) DEFAULT NULL,
  `disponibilidade` bit(1) NOT NULL,
  `material` varchar(50) DEFAULT NULL,
  `nome` varchar(40) DEFAULT NULL,
  `preco` float NOT NULL,
  `produto_imagem` varchar(255) DEFAULT NULL,
  `quantidade` decimal(19,2) DEFAULT NULL,
  `categoria_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKopu9jggwnamfv0c8k2ri3kx0a` (`categoria_id`),
  CONSTRAINT `FKopu9jggwnamfv0c8k2ri3kx0a` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (1,'Variado','Garrafas 750ml Decoradas \nCor aleatória',_binary '','Vidro','Garrafas Decoradas - Cores Diversas',24.99,'https://i.imgur.com/Iu8XbnK.png',10.00,9),(2,'Roxo/Am/Ver','3 unidades - 2L cada . Decorados com massa biscuit. ',_binary '','Vidro','Jogo de Porta Mantimentos ',58.99,'https://i.imgur.com/LihcNvu.jpg',8.00,9),(3,'Azul/Ros/Amar','Luminária com efeito de Plasma. 110v.',_binary '','Vidro','Luminária de Plasma',74.99,'https://i.imgur.com/nzB6qjX.png',8.00,9),(4,'Nenhuma','3 unidades.  Inclui areia. Tamanho grande.',_binary '\0','Vidro','Conjunto Porta Vela',69.99,'https://i.imgur.com/i0IymoM.jpg',3.00,9),(5,'Preto','5 unidades. Tamanhos variados.',_binary '','Vidro','Conjunto Porta Mantimentos',29.99,'https://i.imgur.com/2q5W8Dh.jpg',10.00,9),(6,'Palha','5 potes diversos decorados com fita de palha. Inclui uma vela aromatizada de baunilha.',_binary '','Vidro','Conjunto Potes Decorados',27.99,'https://i.imgur.com/JUnycRY.jpg',20.00,9),(7,'Azul','Boneca de 50 centímetros com ursinho. ',_binary '','Tecido','Boneca Amigurumi',79.99,'https://i.imgur.com/1MGlnfp.jpg',5.00,8),(8,'Azul','Boneco de 55 centímetros com peixe.',_binary '\0','Tecido','Boneco Amigurumi',79.99,'https://i.imgur.com/DWnQ3oo.jpg',2.00,8),(9,'Rosa/verm','Boneca de 45 centímetros com bolsa e flor de crochet.',_binary '','Tecido','Boneca Amigurumi',59.99,'https://i.imgur.com/ndDuh7J.jpg',1.00,8),(10,'Rosa/amar','Boneca de 38 centímetros com laço de fita.',_binary '','Tecido','Boneca Amigurumi',39.99,'https://i.imgur.com/Hux9QIc.jpg',2.00,8),(11,'Azul','Descanso de 40 centímetros. ',_binary '\0','Tecido','Descanso Abajur Amigurumi',29.99,'https://i.imgur.com/Q4Ku2dS.jpg',10.00,8),(12,'Rosa','Vaso de plantas pequeno.',_binary '','Cerâmica','Vaso Decorativo',19.99,'https://i.imgur.com/RvK3Fw6.jpg',20.00,6),(13,'Amarelo','Vaso pequeno decorativo.',_binary '\0','Cerâmica','Vaso Raposa',29.99,'https://i.imgur.com/nXZVkKB.jpg',2.00,6),(14,'Rosa/Azul/Amar','3 unidades de 15 centímetros cada.\nNão inclui planta.',_binary '','Cerâmica','Conjunto Vaso Meninas',29.99,'https://i.imgur.com/MSB3f2x.jpg',3.00,6),(15,'Diverso',' Namoradeira de 60 centímetros.',_binary '\0','Cerâmica','Namoradeira',89.99,'https://i.imgur.com/2BeTnJ4.jpg',1.00,6),(16,'Bege','Duas unidades pequenas.\nNão inclui planta.',_binary '','Argila','Duo Mini-vasos',29.99,'https://i.imgur.com/KDO2H9S.jpg',2.00,6),(17,'Neutra','Fusca de 15 centímetros. Réplica.',_binary '','Madeira','Fusca',59.99,'https://i.imgur.com/jIVshcu.jpg',5.00,4),(18,'Neutro','Avião Biplano de 15 centímetros. Réplica.',_binary '','Madeira','Avião Biplano',59.99,'https://i.imgur.com/F1Iu71j.jpg',2.00,4),(19,'Neutro','Em MDF. Possui 15 centímetros.',_binary '','Madeira MDF','Avião',39.99,'https://i.imgur.com/JVrpNqB.jpg',1.00,4),(20,'Neutro','Possui 75 centímetros e três prateleiras.',_binary '','Madeira','Estante Pendurável',79.99,'https://i.imgur.com/xv0lrDy.jpg',1.00,4),(21,'Neutro','Possui 10 centímetros.',_binary '\0','Madeira','Motocicleta',69.99,'https://i.imgur.com/76hn35K.jpg',2.00,4),(22,'Neutro','3 unidades de 30 centímetros cada. Não inclui velas.',_binary '','Madeira','Trio Porta Velas',59.99,'https://i.imgur.com/lM5tqye.jpg',9.00,4),(23,'Neutro','Feito em bronze fundido. Possui 12 centímetros.',_binary '','Bronze','Casal Decorativo',29.99,'https://i.imgur.com/iVQbkRH.jpg',6.00,10),(24,'Neutro','Feito com parafusos e porcas. Possui 7 centímetros.',_binary '','Metal','Casal Decorativo',29.99,'https://i.imgur.com/cZRiGGk.jpg',4.00,10),(25,'Neutro','Feito com porcas e parafusos. Possui 10 centímetros.',_binary '\0','Metal','Skatista Decorativo',29.99,'https://i.imgur.com/ki3Iz2O.jpg',1.00,10),(26,'Dourado','Gato feito com mola de metal. Possui 7 centímetros.',_binary '','Metal','Gato Decorativo',19.99,'https://i.imgur.com/ZRdzcBL.jpg',2.00,10),(27,'Amarelo','Relógio feito com colheres de plástico. Possui 30 centímetros.',_binary '','Plástico','Relógio de Parede',59.99,'https://i.imgur.com/9KmlzXy.jpg',13.00,7),(28,'Diversa','Cachorros de raças diversas feitos com miçangas. Possui 5 centímetros.',_binary '','Plástico','Conjunto Cachorros Penduráveis',29.99,'https://i.imgur.com/2WvYeFH.jpg',20.00,7),(29,'Verd/Verm/Amar','Feito com garrafa PET. Possui 30 centímetros. Não acompanha lâmpada. ',_binary '','Plástico','Luminária Flor',29.99,'https://i.imgur.com/cZUlHI8.jpg',3.00,7),(30,'Amarelo','Luminária feita com colheres plásticas. Possui 46 centímetros.',_binary '','Plástico','Luminária Abacaxi',49.99,'https://i.imgur.com/fWgwytu.jpg',4.00,7),(31,'Vermelho','Guirlanda feita com garrafa PET. Possui 29 centímetros.',_binary '','Plástico','Guirlanda de Natal',29.99,'https://i.imgur.com/12eYdqa.jpg',1.00,7),(32,'Vermelho','Relógio feito com talheres de plástico. Possui 30 centímetros.',_binary '','Plástico','Relógio de Parede',59.99,'https://i.imgur.com/o1OFGAv.jpg',5.00,7);
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `admin` bit(1) NOT NULL,
  `bairro` varchar(20) DEFAULT NULL,
  `cep` varchar(9) DEFAULT NULL,
  `complemento` varchar(30) DEFAULT NULL,
  `cpf` varchar(14) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `nome` varchar(50) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `telefone` varchar(15) DEFAULT NULL,
  `usuario` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,_binary '','taboão','09671140','casa','47081815855','icaros@gmail.com','icaros','$2a$10$j7ZEX3c0PCvGx3zXVJwqveFkR3HdmCMxZOWvLCAcdGbXRpdkd8e/2','11931100550','icaros'),(2,_binary '\0','vila velha','08190130','casa 1','41523564895','lucia@gmail.com','Lucia','$2a$10$7TKd4rH5a8KjFB6SFzSclOXaJ1yg5Lk31Mu9pMzt7UJacmIzIkh/2','(11) 99521-4592','Lucia');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'fitha'
--

--
-- Dumping routines for database 'fitha'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-10 15:31:12
