SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE if exists product;
CREATE TABLE product (
id INT PRIMARY KEY NOT NULL,
name VARCHAR (255) NOT NULL,
image VARCHAR (255),
stick INT NOT NULL,
price FLOAT NOT NULL,
description TEXT);

DROP TABLE if exists purchase;
CREATE TABLE purchase (
id INT PRIMARY KEY NOT NULL,
user_id INT,
CONSTRAINT FK_userpurchase FOREIGN KEY (user_id)
REFERENCES user(id),
date DATETIME NOT NULL,
status VARCHAR(255) NOT NULL);

DROP TABLE if exists user;
CREATE TABLE user (
id INT PRIMARY KEY NOT NULL,
firstname VARCHAR(255) NOT NULL,
lastname VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
adress VARCHAR(255),
phone_number INT);

DROP TABLE if exists cart;
CREATE TABLE cart (
id INT PRIMARY KEY NOT NULL,
user_id INT,
CONSTRAINT FK_usercart FOREIGN KEY (user_id)
REFERENCES user(id));

DROP TABLE if exists category;
CREATE TABLE category (
id INT PRIMARY KEY NOT NULL,
title VARCHAR(255) NOT NULL);

DROP TABLE if exists cart_line;
CREATE TABLE cart_line (
id INT PRIMARY KEY NOT NULL,
cart_id INT,
CONSTRAINT FK_cartcart_line FOREIGN KEY (cart_id)
REFERENCES cart(id),
product_id INT,
CONSTRAINT FK_productcart_line FOREIGN KEY (product_id)
REFERENCES product(id),
quantity INT NOT NUll);

DROP TABLE if exists purchase_line;
CREATE TABLE purchase_line (
id INT PRIMARY KEY NOT NULL,
order_id INT,
CONSTRAINT FK_orderpurchase_line FOREIGN KEY (order_id)
REFERENCES cart(id),
product_id INT,
CONSTRAINT FK_productpurchase_line FOREIGN KEY (product_id)
REFERENCES product(id),
quantity INT NOT NUll);

DROP TABLE if exists product_category;
CREATE TABLE product_category (
id INT PRIMARY KEY NOT NULL,
category_id INT,
CONSTRAINT FK_categoryproduct_category FOREIGN KEY (category_id)
REFERENCES category(id),
product_id INT,
CONSTRAINT FK_productproduct_category FOREIGN KEY (product_id)
REFERENCES product(id));

DROP TABLE if exists event;
CREATE TABLE event (
id INT PRIMARY KEY NOT NULL,
date INT NOT NULL,
picture VARCHAR(255) NOT NULL,
description TEXT NOT NULL);

DROP TABLE if exists module;
CREATE TABLE module (
id INT PRIMARY KEY NOT NULL,
name VARCHAR(255) NOT NULL,
picture VARCHAR(255) NOT NULL,
description TEXT NOT NULL);

DROP TABLE if exists crew;
CREATE TABLE crew (
id INT PRIMARY KEY NOT NULL,
name VARCHAR(255) NOT NULL,
age INT NOT NULL,
nation VARCHAR(255) NOT NULL,
picture VARCHAR(255) NOT NULL,
description TEXT NOT NULL);

DROP TABLE if exists mission;
CREATE TABLE mission (
id INT PRIMARY KEY NOT NULL,
domain VARCHAR(255) NOT NULL,
description TEXT NOT NULL);

SET FOREIGN_KEY_CHECKS = 1;