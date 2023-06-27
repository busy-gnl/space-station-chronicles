SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE if exists product;

CREATE TABLE
    product (
        id INT PRIMARY KEY NOT NULL auto_increment,
        name VARCHAR (255) NOT NULL,
        image VARCHAR (255),
        stock INT NOT NULL,
        price FLOAT NOT NULL,
        description TEXT
    );

DROP TABLE if exists purchase;

CREATE TABLE
    purchase (
        id INT PRIMARY KEY NOT NULL auto_increment,
        user_id INT,
        CONSTRAINT FK_userpurchase FOREIGN KEY (user_id) REFERENCES user(id),
        date DATETIME NOT NULL,
        status VARCHAR(255) NOT NULL
    );

DROP TABLE if exists user;

CREATE TABLE
    user (
        id INT PRIMARY KEY NOT NULL auto_increment,
        firstname VARCHAR(255) NOT NULL,
        lastname VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        address VARCHAR(255),
        phone_number INT
    );

DROP TABLE if exists cart;

CREATE TABLE
    cart (
        id INT PRIMARY KEY NOT NULL auto_increment,
        user_id INT,
        CONSTRAINT FK_usercart FOREIGN KEY (user_id) REFERENCES user(id)
    );

DROP TABLE if exists category;

CREATE TABLE
    category (
        id INT PRIMARY KEY NOT NULL auto_increment,
        title VARCHAR(255) NOT NULL
    );

DROP TABLE if exists cart_line;

CREATE TABLE
    cart_line (
        id INT PRIMARY KEY NOT NULL auto_increment,
        cart_id INT,
        CONSTRAINT FK_cartcart_line FOREIGN KEY (cart_id) REFERENCES cart(id),
        product_id INT,
        CONSTRAINT FK_productcart_line FOREIGN KEY (product_id) REFERENCES product(id),
        quantity INT NOT NUll
    );

DROP TABLE if exists purchase_line;

CREATE TABLE
    purchase_line (
        id INT PRIMARY KEY NOT NULL auto_increment,
        order_id INT,
        CONSTRAINT FK_orderpurchase_line FOREIGN KEY (order_id) REFERENCES cart(id),
        product_id INT,
        CONSTRAINT FK_productpurchase_line FOREIGN KEY (product_id) REFERENCES product(id),
        quantity INT NOT NUll
    );

DROP TABLE if exists product_category;

CREATE TABLE
    product_category (
        id INT PRIMARY KEY NOT NULL auto_increment,
        category_id INT,
        CONSTRAINT FK_categoryproduct_category FOREIGN KEY (category_id) REFERENCES category(id),
        product_id INT,
        CONSTRAINT FK_productproduct_category FOREIGN KEY (product_id) REFERENCES product(id)
    );

DROP TABLE if exists event;

CREATE TABLE EVENT(ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT
, DATE INT NOT NULL, PICTURE VARCHAR(255) NOT NULL
, DESCRIPTION TEXT NOT NULL) ; DROP TABLE IF EXISTS 
MODULE; CREATE TABLE MODULE(ID INT PRIMARY KEY NOT 
NULL AUTO_INCREMENT, NAME VARCHAR(255) NOT NULL, PICTURE 
VARCHAR(255) NOT NULL, DESCRIPTION TEXT NOT NULL) 
; DROP TABLE IF EXISTS CREW; CREATE TABLE CREW(ID 
INT PRIMARY KEY NOT NULL AUTO_INCREMENT, NAME VARCHAR
(255) NOT NULL, AGE INT NOT NULL, NATION VARCHAR(255
) NOT NULL, PICTURE VARCHAR(255) NOT NULL, DESCRIPTION 
TEXT NOT NULL) ; DROP TABLE IF EXISTS MISSION; CREATE 
TABLE MISSION(ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT
, DOMAIN VARCHAR(255) NOT NULL, DESCRIPTION TEXT NOT 
NULL) ; INSERT INTO PRODUCT(NAME, PRICE, DESCRIPTION
, STOCK, IMAGE) VALUES('ISS T-SHIRT', 19.99, 'T-SHIRT AVEC UNE ILLUSTRATION DE LA STATION SPATIALE INTERNATIONALE'
, 50, "HTTPS://AE01.ALICDN.COM/KF/H45DF240E6CEB4C86A624289330C80BFEG/T-SHIRT-HOMME-ISS-STATION-SPATIALE-INTERNATIONALE-NSA-ESA-SOYOUZ-NAVETTE-SPATIALE-ASTRONOMIE-SCIENCE-UNISEXE-T.JPG" 
	), (
	    'ASTRONAUT HOODIE',
	    39.99,
	    'Sweat à capuche avec un motif d''astronaute et le logo de l''ISS',
	    50,
	    "https://ae01.alicdn.com/kf/H45df240e6ceb4c86a624289330c80bfeg/T-Shirt-homme-ISS-Station-spatiale-internationale-NSA-ESA-soyouz-navette-spatiale-astronomie-Science-unisexe-T.jpg"
	), (
	    'ISS Astronaut T-shirt',
	    17.99,
	    'T-shirt avec une illustration d''un astronaute devant l''ISS',
	    50,
	    "https://ae01.alicdn.com/kf/H45df240e6ceb4c86a624289330c80bfeg/T-Shirt-homme-ISS-Station-spatiale-internationale-NSA-ESA-soyouz-navette-spatiale-astronomie-Science-unisexe-T.jpg"
	), (
	    'Space Explorer Hoodie',
	    34.99,
	    'Sweat à capuche pour les explorateurs de l''espace avec le logo de l''ISS',
	    50,
	    "https://ae01.alicdn.com/kf/H45df240e6ceb4c86a624289330c80bfeg/T-Shirt-homme-ISS-Station-spatiale-internationale-NSA-ESA-soyouz-navette-spatiale-astronomie-Science-unisexe-T.jpg"
	);
	-- Insérer les produits liés aux accessoires pour appareils électroniques
	INSERT INTO
	    product (
	        name,
	        price,
	        description,
	        stock,
	        image
	    )
	VALUES (
	        'Space Phone Case',
	        12.99,
	        "Coque de téléphone avec un design de l'ISS et des étoiles",
	        50,
	        "https://woopimages.com/uploads/phone-models/case-images/366-87.webp"
	    ), (
	        'Laptop Stickers',
	        5.99,
	        'Ensemble de stickers pour ordinateur portable avec des logos spatiaux',
	        50,
	        "https://img.ltwebstatic.com/images3_pi/2023/01/04/167281183335bafc5c9e96dc75f9cc2442fd2c3451_thumbnail_600x.jpg"
	    ), (
	        'ISS Phone Case',
	        9.99,
	        "Coque de téléphone avec un motif de l'ISS et des étoiles brillantes",
	        50,
	        "https://woopimages.com/uploads/phone-models/case-images/366-87.webp"
	    ), (
	        'Space Laptop Sleeve',
	        19.99,
	        "Étui d''ordinateur portable avec une impression de l''ISS dans l'espace",
	        50,
	        "https://img.ltwebstatic.com/images3_pi/2023/02/13/1676273549449c8c4595607555fc58e84912fedf02_thumbnail_600x.webp"
	    );
	-- Insérer les produits liés aux tasses et bouteilles d'eau
	INSERT INTO
	    product (
	        name,
	        price,
	        description,
	        stock,
	        image
	    )
	VALUES (
	        'ISS Coffee Mug',
	        9.99,
	        "Tasse à café avec une image de l'ISS et la mention 'Explorez l'espace'",
	        50,
	        "https://m.media-amazon.com/images/I/41Xp8CEzmaL._AC_UF350,350_QL80_.jpg"
	    ), (
	        'Water Bottle',
	        14.99,
	        "Bouteille d'eau avec un design de l'ISS et une citation inspirante sur l'exploration spatiale",
	        50,
	        "https://m.media-amazon.com/images/I/41Xp8CEzmaL._AC_UF350,350_QL80_.jpg"
	    ), (
	        'Space Explorer Mug',
	        12.99,
	        "Tasse à café pour les explorateurs de l'espace avec un design de l'ISS et des planètes",
	        50,
	        "https://m.media-amazon.com/images/I/41Xp8CEzmaL._AC_UF350,350_QL80_.jpg"
	    ), (
	        'Galactic Water Bottle',
	        16.99,
	        "Bouteille d'eau avec un motif galactique et une citation inspirante",
	        50,
	        "https://m.media-amazon.com/images/I/41Xp8CEzmaL._AC_UF350,350_QL80_.jpg"
	    );
	-- Insérer les produits liés aux posters et impressions d'art
	INSERT INTO
	    product (
	        name,
	        price,
	        description,
	        stock,
	        image
	    )
	VALUES (
	        'ISS Poster',
	        7.99,
	        'Poster mettant en valeur une photographie de l''ISS dans l''espace',
	        50,
	        "https://m.media-amazon.com/images/I/61o6WkD2CjL._AC_UF894,1000_QL80_.jpg"
	    ), (
	        'Space Art Print',
	        15.99,
	        'Impression d''art d''une illustration de l''ISS avec un fond étoilé',
	        50,
	        "https://m.media-amazon.com/images/I/61o6WkD2CjL._AC_UF894,1000_QL80_.jpg"
	    ), (
	        'Space Journey Poster',
	        9.99,
	        'Poster représentant un voyage spatial avec l''ISS comme point focal',
	        50,
	        "https://m.media-amazon.com/images/I/61o6WkD2CjL._AC_UF894,1000_QL80_.jpg"
	    ), (
	        'Stellar Art Print',
	        14.99,
	        'Impression artistique d''une nébuleuse avec une silhouette de l''ISS',
	        50,
	        "https://m.media-amazon.com/images/I/61o6WkD2CjL._AC_UF894,1000_QL80_.jpg"
	    );
	-- Insérer les produits liés aux livres et magazines
	INSERT INTO
	    product (
	        name,
	        price,
	        description,
	        stock,
	        image
	    )
	VALUES (
	        'Space Exploration Book',
	        24.99,
	        'Livre sur l''exploration spatiale et l''ISS',
	        50,
	        "https://www.nasa.gov/sites/default/files/thumbnails/image/benefits_2022_book_cover.jpg"
	    ), (
	        'Astronomy Magazine',
	        8.99,
	        'Magazine spécialisé sur l''astronomie et les dernières découvertes spatiales',
	        50,
	        "https://www.nasa.gov/sites/default/files/thumbnails/image/benefits_2022_book_cover.jpg"
	    ), (
	        'Space Adventure Novel',
	        21.99,
	        'Roman d''aventure spatiale avec des héros de l''ISS',
	        50,
	        "https://www.nasa.gov/sites/default/files/thumbnails/image/benefits_2022_book_cover.jpg"
	    ), (
	        'Astronomy Guide',
	        6.99,
	        'Guide pratique sur l''astronomie et l''observation des étoiles',
	        50,
	        "https://www.nasa.gov/sites/default/files/thumbnails/image/benefits_2022_book_cover.jpg"
	    );
	-- Insérer les produits liés aux modèles réduits et kits de construction
	INSERT INTO
	    product (
	        name,
	        price,
	        description,
	        stock,
	        image
	    )
	VALUES (
	        'ISS Model Kit',
	        29.99,
	        'Kit de construction pour créer un modèle réduit de l''ISS',
	        50,
	        "https://m.media-amazon.com/images/I/71mUnkl+7lL.jpg"
	    ), (
	        'ISS LEGO Kit',
	        27.99,
	        'Kit de construction LEGO pour recréer l''ISS en briques',
	        50,
	        "https://m.media-amazon.com/images/I/91RmfHUjI6L.__AC_SX300_SY300_QL70_ML2_.jpg"
	    );
	-- Insérer les produits liés aux badges et écussons
	INSERT INTO
	    product (
	        name,
	        price,
	        description,
	        stock,
	        image
	    )
	VALUES (
	        'Mission Patch Badge',
	        3.99,
	        'Badge représentant un logo de mission spatiale de l''ISS',
	        50,
	        "https://i.etsystatic.com/24901534/r/il/d30768/2597100673/il_1588xN.2597100673_s7hd.jpg"
	    ), (
	        'ISS Expedition Patch',
	        4.99,
	        'Écusson commémoratif de l''expédition actuelle de l''ISS',
	        50,
	        "https://i.etsystatic.com/24901534/r/il/d30768/2597100673/il_1588xN.2597100673_s7hd.jpg"
	    );
	-- Insérer les produits liés aux jouets et jeux
	INSERT INTO
	    product (
	        name,
	        price,
	        description,
	        stock,
	        image
	    )
	VALUES (
	        'Space Puzzle',
	        12.99,
	        'Puzzle éducatif sur le thème de l''ISS et de l''exploration spatiale',
	        50,
	        "https://www.orangepuzzle.de/media/image/f1/70/cd/1453899434-preview-parts.jpg"
	    ), (
	        'Astronaut Toy',
	        9.99,
	        'Figurine d''astronaute pour jouer et apprendre',
	        50,
	        "https://www.cdiscount.com/pdt2/8/7/2/1/400x400/PLA4008789094872/rw/playmobil-9487-space-station-spatiale-mars.jpg"
	    ), (
	        'Space Adventure Board Game',
	        18.99,
	        'Jeu de société d''aventure spatiale pour toute la famille',
	        50,
	        "https://www.rompa.com/media/catalog/product/cache/246ea9aca141e2a8735bed19fbd43c53/5/5/55940.jpg"
	    ), (
	        'Rocket Launch Toy Set',
	        11.99,
	        'Ensemble de jouets pour simuler le lancement de fusées',
	        50,
	        "https://www.cdiscount.com/pdt2/8/7/2/1/400x400/PLA4008789094872/rw/playmobil-9487-space-station-spatiale-mars.jpg"
	    );
	-- Insérer les produits liés aux souvenirs spatiaux
	INSERT INTO
	    product (
	        name,
	        price,
	        description,
	        stock,
	        image
	    )
	VALUES (
	        'Space Souvenir',
	        19.99,
	        'Souvenir spécial comprenant un fragment authentique d''équipement spatial de l''ISS',
	        50,
	        "https://d3ecqbn6etsqar.cloudfront.net/y-vSEervOWlewreb7L3ozrePeJM=/0x720/smart/916088.jpg"
	    );
	SET FOREIGN_KEY_CHECKS = 1;
