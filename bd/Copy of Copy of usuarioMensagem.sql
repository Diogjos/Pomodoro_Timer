CREATE TABLE `User` (
  `id` int PRIMARY KEY,
  `Name` Varchar,
  `Email` Varchar,
  `Mensagem` Varchar
);

CREATE TABLE `Task` (
  `id` int PRIMARY KEY,
  `title` Varchar,
  `content` Varchar,
  `data` date,
  `hora` time
);

CREATE TABLE `Alert` (
  `id` int PRIMARY KEY,
  `alet` Varchar,
  `data` date,
  `hora` time
);

CREATE TABLE `User_Task` (
  `id_User` int,
  `id_Task` int
);

CREATE TABLE `Task_Alert` (
  `id_Task` int,
  `id_Alert` int
);

CREATE TABLE `User_Alert` (
  `id_User` int,
  `id_Alert` int
);

ALTER TABLE `Task_Alert` ADD FOREIGN KEY (`id_Task`) REFERENCES `Task` (`id`);

ALTER TABLE `Task_Alert` ADD FOREIGN KEY (`id_Alert`) REFERENCES `Alert` (`id`);

ALTER TABLE `User_Task` ADD FOREIGN KEY (`id_User`) REFERENCES `User` (`id`);

ALTER TABLE `User_Task` ADD FOREIGN KEY (`id_Task`) REFERENCES `Task` (`id`);

ALTER TABLE `User_Alert` ADD FOREIGN KEY (`id_User`) REFERENCES `User` (`id`);

ALTER TABLE `User_Alert` ADD FOREIGN KEY (`id_Alert`) REFERENCES `Alert` (`id`);
