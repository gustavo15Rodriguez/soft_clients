CREATE DATABASE IF NOT EXISTS soft_clients;

USE soft_clients;

CREATE TABLE users
(
  id              int unsigned NOT NULL auto_increment,
  name			  varchar(20) NOT NULL,
  email           varchar(30) NOT NULL,
  birthdate       date NOT NULL,
  creation_date   date NOT NULL,
  PRIMARY KEY     (id)
);