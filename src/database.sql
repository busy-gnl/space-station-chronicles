SET
  FOREIGN_KEY_CHECKS = 0;

DROP TABLE if exists product;

CREATE TABLE product (
  id INT PRIMARY KEY NOT NULL auto_increment,
  name VARCHAR (255) NOT NULL,
  image VARCHAR (255),
  stock INT NOT NULL,
  price FLOAT NOT NULL,
  description TEXT,
  category VARCHAR (255) not null
);

DROP TABLE if exists purchase;

CREATE TABLE purchase (
  id INT PRIMARY KEY NOT NULL auto_increment,
  userId INT,
  total FLOAT NOT NULL,
  CONSTRAINT FK_userpurchase FOREIGN KEY (userId) REFERENCES user(id),
  date DATETIME NOT NULL,
  status VARCHAR(255) NOT NULL
);

DROP TABLE if exists user;

CREATE TABLE user (
  id INT PRIMARY KEY NOT NULL auto_increment,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  hashedPassword VARCHAR(255) NOT NULL,
  address VARCHAR(255),
  role VARCHAR(255) NOT NULL DEFAULT 'user',
  phoneNumber VARCHAR(255),
  isActive tinyint NOT NULL DEFAULT 1
);

DROP TABLE if exists cart;

CREATE TABLE cart (
  id INT PRIMARY KEY NOT NULL auto_increment,
  userId INT,
  CONSTRAINT FK_usercart FOREIGN KEY (userId) REFERENCES user(id)
);

DROP TABLE if exists cart_line;

CREATE TABLE cart_line (
  id INT PRIMARY KEY NOT NULL auto_increment,
  cartId INT,
  CONSTRAINT FK_cartcart_line FOREIGN KEY (cartId) REFERENCES cart(id),
  productId INT,
  CONSTRAINT FK_productcart_line FOREIGN KEY (productId) REFERENCES product(id),
  quantity INT NOT NUll
);

DROP TABLE if exists purchase_line;

CREATE TABLE purchase_line (
  id INT PRIMARY KEY NOT NULL auto_increment,
  orderId INT,
  CONSTRAINT FK_orderpurchase_line FOREIGN KEY (orderId) REFERENCES cart(id),
  productId INT,
  CONSTRAINT FK_productpurchase_line FOREIGN KEY (productId) REFERENCES product(id),
  quantity INT NOT NUll
);

DROP TABLE if exists event;

CREATE TABLE event (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  date VARCHAR(10) NOT NULL,
  title VARCHAR(255) NOT NULL,
  picture VARCHAR(255) NOT NULL,
  description TEXT NOT NULL
);

DROP TABLE IF EXISTS issModule;

CREATE TABLE issModule(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  picture VARCHAR(255) NOT NULL,
  description TEXT NOT NULL
);

DROP TABLE IF EXISTS crew;

CREATE TABLE crew(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  age INT NOT NULL,
  nation VARCHAR(255) NOT NULL,
  picture VARCHAR(255) NOT NULL,
  description TEXT NOT NULL
);

DROP TABLE IF EXISTS mission;

CREATE TABLE mission(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  domain VARCHAR(255) NOT NULL,
  description TEXT NOT NULL
);

INSERT INTO
  product(
    name,
    category,
    price,
    description,
    stock,
    image
  )
VALUES
  (
    'ISS T-SHIRT',
    "Vêtements",
    19.99,
    'T-shirt avec une illustration de la Station Spatiale Internationale',
    50,
    "https://ae01.alicdn.com/kf/H45df240e6ceb4c86a624289330c80bfeg/T-Shirt-homme-ISS-Station-spatiale-internationale-NSA-ESA-soyouz-navette-spatiale-astronomie-Science-unisexe-T.jpg"
  ),
  (
    'ASTRONAUT HOODIE',
    "Vêtements",
    39.99,
    'Sweat à capuche avec un motif d''astronaute et le logo de l''ISS',
    50,
    "https://ae01.alicdn.com/kf/H45df240e6ceb4c86a624289330c80bfeg/T-Shirt-homme-ISS-Station-spatiale-internationale-NSA-ESA-soyouz-navette-spatiale-astronomie-Science-unisexe-T.jpg"
  ),
  (
    'ISS Astronaut T-shirt',
    "Vêtements",
    17.99,
    'T-shirt avec une illustration d''un astronaute devant l''ISS',
    50,
    "https://ae01.alicdn.com/kf/H45df240e6ceb4c86a624289330c80bfeg/T-Shirt-homme-ISS-Station-spatiale-internationale-NSA-ESA-soyouz-navette-spatiale-astronomie-Science-unisexe-T.jpg"
  ),
  (
    'Space Explorer Hoodie',
    "Vêtements",
    34.99,
    'Sweat à capuche pour les explorateurs de l''espace avec le logo de l''ISS',
    50,
    "https://ae01.alicdn.com/kf/H45df240e6ceb4c86a624289330c80bfeg/T-Shirt-homme-ISS-Station-spatiale-internationale-NSA-ESA-soyouz-navette-spatiale-astronomie-Science-unisexe-T.jpg"
  ),
  (
    'Space Phone Case',
    "Accessoires",
    12.99,
    "Coque de téléphone avec un design de l'ISS et des étoiles",
    50,
    "https://woopimages.com/uploads/phone-models/case-images/366-87.webp"
  ),
  (
    'Laptop Stickers',
    "Accessoires",
    5.99,
    'Ensemble de stickers pour ordinateur portable avec des logos spatiaux',
    50,
    "https://img.ltwebstatic.com/images3_pi/2023/01/04/167281183335bafc5c9e96dc75f9cc2442fd2c3451_thumbnail_600x.jpg"
  ),
  (
    'ISS Phone Case',
    "Accessoires",
    9.99,
    "Coque de téléphone avec un motif de l'ISS et des étoiles brillantes",
    50,
    "https://woopimages.com/uploads/phone-models/case-images/366-87.webp"
  ),
  (
    'Space Laptop Sleeve',
    "Accessoires",
    19.99,
    "Étui d''ordinateur portable avec une impression de l''ISS dans l'espace",
    50,
    "https://img.ltwebstatic.com/images3_pi/2023/02/13/1676273549449c8c4595607555fc58e84912fedf02_thumbnail_600x.webp"
  ),
  (
    'ISS Coffee Mug',
    "Tasses & Mugs",
    9.99,
    "Tasse à café avec une image de l'ISS et la mention 'Explorez l'espace'",
    50,
    "https://m.media-amazon.com/images/I/41Xp8CEzmaL._AC_UF350,350_QL80_.jpg"
  ),
  (
    'Water Bottle',
    "Tasses & Mugs",
    14.99,
    "Bouteille d'eau avec un design de l'ISS et une citation inspirante sur l'exploration spatiale",
    50,
    "https://m.media-amazon.com/images/I/41Xp8CEzmaL._AC_UF350,350_QL80_.jpg"
  ),
  (
    'Space Explorer Mug',
    "Tasses & Mugs",
    12.99,
    "Tasse à café pour les explorateurs de l'espace avec un design de l'ISS et des planètes",
    50,
    "https://m.media-amazon.com/images/I/41Xp8CEzmaL._AC_UF350,350_QL80_.jpg"
  ),
  (
    'Galactic Water Bottle',
    "Tasses & Mugs",
    16.99,
    "Bouteille d'eau avec un motif galactique et une citation inspirante",
    50,
    "https://m.media-amazon.com/images/I/41Xp8CEzmaL._AC_UF350,350_QL80_.jpg"
  ),
  (
    'ISS Poster',
    "Posters",
    7.99,
    'Poster mettant en valeur une photographie de l''ISS dans l''espace',
    50,
    "https://m.media-amazon.com/images/I/61o6WkD2CjL._AC_UF894,1000_QL80_.jpg"
  ),
  (
    'Space Art Print',
    "Posters",
    15.99,
    'Impression d''art d''une illustration de l''ISS avec un fond étoilé',
    50,
    "https://m.media-amazon.com/images/I/61o6WkD2CjL._AC_UF894,1000_QL80_.jpg"
  ),
  (
    'Space Journey Poster',
    "Posters",
    9.99,
    'Poster représentant un voyage spatial avec l''ISS comme point focal',
    50,
    "https://m.media-amazon.com/images/I/61o6WkD2CjL._AC_UF894,1000_QL80_.jpg"
  ),
  (
    'Stellar Art Print',
    "Posters",
    14.99,
    'Impression artistique d''une nébuleuse avec une silhouette de l''ISS',
    50,
    "https://m.media-amazon.com/images/I/61o6WkD2CjL._AC_UF894,1000_QL80_.jpg"
  ),
  (
    'Space Exploration Book',
    "Livres et magazines",
    24.99,
    'Livre sur l''exploration spatiale et l''ISS',
    50,
    "https://www.nasa.gov/sites/default/files/thumbnails/image/benefits_2022_book_cover.jpg"
  ),
  (
    'Astronomy Magazine',
    "Livres et magazines",
    8.99,
    'Magazine spécialisé sur l''astronomie et les dernières découvertes spatiales',
    50,
    "https://www.nasa.gov/sites/default/files/thumbnails/image/benefits_2022_book_cover.jpg"
  ),
  (
    'Space Adventure Novel',
    "Livres et magazines",
    21.99,
    'Roman d''aventure spatiale avec des héros de l''ISS',
    50,
    "https://www.nasa.gov/sites/default/files/thumbnails/image/benefits_2022_book_cover.jpg"
  ),
  (
    'Astronomy Guide',
    "Livres et magazines",
    6.99,
    'Guide pratique sur l''astronomie et l''observation des étoiles',
    50,
    "https://www.nasa.gov/sites/default/files/thumbnails/image/benefits_2022_book_cover.jpg"
  ),
  (
    'ISS Model Kit',
    "Kits à monter",
    29.99,
    'Kit de construction pour créer un modèle réduit de l''ISS',
    50,
    "https://m.media-amazon.com/images/I/71mUnkl+7lL.jpg"
  ),
  (
    'ISS LEGO Kit',
    "Kits à monter",
    27.99,
    'Kit de construction LEGO pour recréer l''ISS en briques',
    50,
    "https://m.media-amazon.com/images/I/91RmfHUjI6L.__AC_SX300_SY300_QL70_ML2_.jpg"
  ),
  (
    'Mission Patch Badge',
    "Badges et écussons",
    3.99,
    'Badge représentant un logo de mission spatiale de l''ISS',
    50,
    "https://i.etsystatic.com/24901534/r/il/d30768/2597100673/il_1588xN.2597100673_s7hd.jpg"
  ),
  (
    'ISS Expedition Patch',
    "Badges et écussons",
    4.99,
    'Écusson commémoratif de l''expédition actuelle de l''ISS',
    50,
    "https://i.etsystatic.com/24901534/r/il/d30768/2597100673/il_1588xN.2597100673_s7hd.jpg" "Badges et écussons"
  ),
  (
    'Space Puzzle',
    "Jouets et jeux",
    12.99,
    'Puzzle éducatif sur le thème de l''ISS et de l''exploration spatiale',
    50,
    "https://www.orangepuzzle.de/media/image/f1/70/cd/1453899434-preview-parts.jpg"
  ),
  (
    'Astronaut Toy',
    "Jouets et jeux",
    9.99,
    'Figurine d''astronaute pour jouer et apprendre',
    50,
    "https://www.cdiscount.com/pdt2/8/7/2/1/400x400/PLA4008789094872/rw/playmobil-9487-space-station-spatiale-mars.jpg"
  ),
  (
    'Space Adventure Board Game',
    "Jouets et jeux",
    18.99,
    'Jeu de société d''aventure spatiale pour toute la famille',
    50,
    "https://www.rompa.com/media/catalog/product/cache/246ea9aca141e2a8735bed19fbd43c53/5/5/55940.jpg"
  ),
  (
    'Rocket Launch Toy Set',
    "Jouets et jeux",
    11.99,
    'Ensemble de jouets pour simuler le lancement de fusées',
    50,
    "https://www.cdiscount.com/pdt2/8/7/2/1/400x400/PLA4008789094872/rw/playmobil-9487-space-station-spatiale-mars.jpg"
  ),
  (
    'Space Souvenir',
    "Souvenirs",
    19.99,
    'Souvenir spécial comprenant un fragment authentique d''équipement spatial de l''ISS',
    50,
    "https://d3ecqbn6etsqar.cloudfront.net/y-vSEervOWlewreb7L3ozrePeJM=/0x720/smart/916088.jpg"
  );

INSERT INTO
  event (date, title, description, picture)
VALUES
  (
    "1984",
    "Reagan ordonne à la NASA de construire l’ISS ",
    "'Tout comme les océans ont ouvert un nouveau monde pour les navires clipper et les commerçants yankees, l’espace détient un énorme potentiel pour le commerce aujourd’hui'. Le discours sur l’État de l’Union du président Ronald Reagan ordonne à la NASA de construire une station spatiale internationale au cours des 10 prochaines années.",
    "https://www.issnationallab.org/wp-content/uploads/2022/01/ronald-reagan-timeline-600.jpg"
  ),
  (
    "1998",
    "Lancement du premier segment de l'ISS",
    "Le premier segment des lancements de l’ISS : le module de contrôle Zarya lancé à bord d’une fusée russe Proton du cosmodrome de Baïkonour, au Kazakhstan. Zarya (traduit par 'sunrise') a fourni des capacités de stockage de carburant, de batterie, de rendez-vous et d’amarrage pour les véhicules spatiaux Soyouz et Progress.",
    "https://www.issnationallab.org/wp-content/uploads/2022/01/ISS-Zarya-STS-88-1998.jpg"
  ),
  (
    "1998",
    "Lancement des premiers composants fabriqués aux États-Unis",
    "Le module Unity Node 1, le premier composant construit aux États-Unis de la station spatiale internationale, est mis en orbite deux semaines plus tard pendant la mission STS-88. La première étape de l’assemblage du laboratoire orbital a été de joindre Unity au module Zarya.",
    "https://www.issnationallab.org/wp-content/uploads/2022/01/s99-unity.jpg"
  ),
  (
    "2000",
    "Première équipe a résidé dans la station",
    "L’astronaute de la NASA Bill Shepherd et les cosmonautes Yuri Gidzenko et Sergueï Krikalev deviennent le premier équipage à résider à bord de la station. L’expédition 1 a passé quatre mois à bord pour accomplir les tâches nécessaires pour donner vie à l’ISS et a commencé ce qui est maintenant plus de 20 ans de présence humaine continue dans l’espace.",
    "https://www.issnationallab.org/wp-content/uploads/2022/01/first-crew-iss-nov2000.jpg"
  ),
  (
    "2001",
    "Ajout d’un module de laboratoire aux États-Unis",
    "Destiny, le module de laboratoire américain, fait partie de la station. Le laboratoire — qui a augmenté de 41 % l’espace habitable à bord — demeure le principal laboratoire de recherche pour les charges utiles américaines.",
    "https://www.issnationallab.org/wp-content/uploads/2022/01/sts_98_destiny-feb2001.jpg"
  ),
  (
    "2005",
    "Le module de laboratoire américain est reconnu comme le plus récent laboratoire national américain",
    "Le Congrès désigne la partie américaine de l’ISS comme le plus récent laboratoire national du pays afin de maximiser son utilisation pour d’autres organismes gouvernementaux américains et pour les établissements universitaires et privés.",
    "https://www.issnationallab.org/wp-content/uploads/2022/01/destiny3.jpg"
  ),
  (
    "2008",
    "Un laboratoire européen rejoint l’ISS",
    "Le laboratoire Columbus de l’Agence spatiale européenne fait partie de la station.",
    "https://www.issnationallab.org/wp-content/uploads/2022/01/columbus-lab-esa.jpg"
  ),
  (
    "2008",
    "Un laboratoire japonais rejoint l’ISS",
    "Le premier module de laboratoire japonais Kibo fait partie de la station.",
    "https://www.issnationallab.org/wp-content/uploads/2022/01/external-kibo.jpg"
  ),
  (
    "2010",
    "Dixième anniversaire de l'ISS",
    "L’ISS célèbre son 10e anniversaire d’occupation humaine continue. Depuis l’expédition 1 à l’automne 2000, 202 personnes avaient visité la station.",
    "https://www.issnationallab.org/wp-content/uploads/2022/01/iss_sts13010years.jpg"
  ),
  (
    "2011",
    "La NASA publie un accord de coopération",
    "La NASA publie un avis d’entente de coopération pour un partenaire de gestion.",
    "https://www.issnationallab.org/wp-content/uploads/2022/01/600NASA-logo.jpg"
  ),
  (
    "2011",
    "La NASA choisit le laboratoire national de l’ISS",
    "La NASA choisit le Center for the Advancement of Science in Space pour gérer le laboratoire national de l’ISS.",
    "https://www.issnationallab.org/wp-content/uploads/2023/02/logo-blue.jpg"
  ),
  (
    "2013",
    "Le premier vol national de recherche en laboratoire de l’ISS",
    "Les protéines peuvent être cultivées comme cristaux dans l’espace avec des structures tridimensionnelles presque parfaites utiles pour le développement de nouveaux médicaments. La série de vols de croissance des cristaux protéiques (PCG) du laboratoire national de l’ISS a commencé en 2013, permettant aux chercheurs d’utiliser l’environnement unique de l’ISS",
    "https://www.issnationallab.org/wp-content/uploads/protein-crystalization-iss-launch-e1643234474626.jpg"
  );

INSERT INTO
  iss_module(name, picture, description)
VALUES
  (
    "Zarya (Module de service de base)",
    "../../../public/images/zarya.jpeg",
    "Zarya est le premier module de la Station spatiale internationale (ISS) à avoir été lancé. Il a été construit par la Russie et financé par les États-Unis. Il a été lancé le 20 novembre 1998 par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude. Il a été le premier module de l'ISS à être lancé, mais le deuxième à être placé en orbite après le module de service Zvezda. Il a été conçu pour servir de module de stockage et de ravitaillement, ainsi que de module de contrôle de l'attitude de la station. Il a été construit par la RKK Energia, et a été financé par la NASA. Il a été lancé par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude."
  ),
  (
    "Unity (Node 1)",
    "../../../public/images/unity.jpeg",
    "Unity est le deuxième module de la Station spatiale internationale (ISS) à avoir été lancé. Il a été construit par les États-Unis et financé par la Russie. Il a été lancé le 4 décembre 1998 par la navette spatiale Endeavour depuis le centre spatial Kennedy en Floride. Il a été placé en orbite terrestre basse à 400 km d'altitude. Il a été le deuxième module de l'ISS à être lancé, mais le troisième à être placé en orbite après le module de service Zvezda. Il a été conçu pour servir de module d'amarrage et de jonction entre les modules américains et russes. Il a été construit par la Boeing, et a été financé par la NASA. Il a été lancé par la navette spatiale Endeavour depuis le centre spatial Kennedy en Floride. Il a été placé en orbite terrestre basse à 400 km d'altitude."
  ),
  (
    "Zvezda (Module de service russe)",
    "../../../public/images/zvezda.jpeg",
    "Zvezda est le troisième module de la Station spatiale internationale (ISS) à avoir été lancé. Il a été construit par la Russie et financé par les États-Unis. Il a été lancé le 12 juillet 2000 par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude. Il a été le troisième module de l'ISS à être lancé, mais le premier à être placé en orbite. Il a été conçu pour servir de module de service, ainsi que de module de contrôle de l'attitude de la station. Il a été construit par la RKK Energia, et a été financé par la NASA. Il a été lancé par une fusée Proton depuis le cosmodrome de Baïkonour au Kazakhstan. Il a été placé en orbite terrestre basse à 400 km d'altitude."
  ),
  (
    "Destiny (Laboratoire américain)",
    "../../../public/images/destiny.png",
    "Le module Destiny, le premier laboratoire américain de l'ISS, a été lancé le 7 février 2001. Il a été construit par les États-Unis et est utilisé pour effectuer des expériences scientifiques dans l'espace. Destiny est équipé de racks de recherche et de systèmes de communication avancés."
  ),
  (
    "Quest (Module d'activités extravéhiculaires)",
    "../../../public/images/quest.jpeg",
    "Le module Quest, également connu sous le nom d'Airlock, a été lancé le 20 juillet 2001. Il a été construit par les États-Unis et est utilisé pour les sorties extravéhiculaires (EVA). Quest fournit une passerelle entre l'intérieur de l'ISS et l'espace extérieur pour les astronautes effectuant des EVA."
  ),
  (
    "Pirs (Module d'amarrage russe)",
    "../../../public/images/pirs.jpeg",
    "Le module Pirs, également appelé Docking Compartment, a été lancé le 14 septembre 2001. Il a été construit par la Russie et sert de port d'amarrage pour les vaisseaux spatiaux russes. Pirs est également équipé d'une écoutille pour les sorties extravéhiculaires russes."
  ),
  (
    "Harmony (Node 2)",
    "../../../public/images/harmony.jpeg",
    "Le module Harmony, également connu sous le nom de Node 2, a été lancé le 23 octobre 2007. Il a été construit par les États-Unis et sert de nœud de connexion pour les futurs modules. Harmony est équipé de plusieurs ports d'amarrage pour les vaisseaux spatiaux et modules supplémentaires."
  ),
  (
    "Columbus (Laboratoire européen)",
    "../../../public/images/colombus.jpeg",
    "Le module Columbus, le laboratoire européen de l'ISS, a été lancé le 7 février 2008. Il a été construit par l'Agence spatiale européenne (ESA) et est utilisé pour mener des expériences scientifiques dans des domaines tels que la biologie, la physique et la recherche sur les matériaux."
  ),
  (
    "Kibo (Laboratoire japonais)",
    "../../../public/images/kibo.jpeg",
    "Le module Kibo, le laboratoire japonais de l'ISS, a été lancé en plusieurs parties entre 2008 et 2009. Il a été construit par l'Agence d'exploration aérospatiale japonaise (JAXA) et comprend plusieurs composants, y compris un laboratoire pressurisé et une plate-forme exposée pour les expériences spatiales."
  ),
  (
    "Tranquility (Node 3)",
    "../../../public/images/tranquility.jpeg",
    "Le module Tranquility, également connu sous le nom de Node 3, a été lancé le 8 février 2010. Il a été construit par les États-Unis et est équipé de systèmes de support de vie supplémentaires. Tranquility abrite également la Cupola, une baie vitrée panoramique utilisée pour l'observation de la Terre."
  ),
  (
    "BEAM (Module d'extension gonflable)",
    "../../../public/images/beam.jpeg",
    "Le module BEAM, le premier module d'extension gonflable de l'ISS, a été lancé le 8 avril 2016. Il a été construit par la société Bigelow Aerospace en collaboration avec la NASA. BEAM est un module expérimental conçu pour tester la technologie des habitats spatiaux gonflables."
  ),
  (
    "Nauka (Module de laboratoire russe)",
    "../../../public/images/nauka.jpeg",
    "Le module Nauka, également appelé Multipurpose Laboratory Module (MLM), est le dernier module russe de l'ISS. Il a été lancé le 21 juillet 2021. Nauka est un module de laboratoire polyvalent qui offre des capacités supplémentaires pour la recherche scientifique et des systèmes de support de vie améliorés."
  ),
  (
    "Internationnal Space Station",
    "../../../public/images/iss-modules.jpeg",
    "Ces modules, construits par différents partenaires internationaux, ont été assemblés progressivement pour former la Station spatiale internationale telle que nous la connaissons aujourd'hui. Ils fournissent des installations pour la recherche scientifique, les sorties extravéhiculaires, le logement de l'équipage et les opérations de soutien nécessaires pour mener des missions dans l'espace."
  );

INSERT INTO
  mission(domain, description)
VALUES
  (
    "Observations astronomiques",
    "L'ISS permet d'observer l'univers depuis l'espace, sans la pollution lumineuse de l'atmosphère terrestre. Afin de capturer des images et des données sur les objets célestes tels que les étoiles, les galaxies, les nébuleuses et les phénomènes astronomiques transitoires. Ces observations ont permis de contribuer à des études spécifiques sur la formation des étoiles, les trous noirs, les pulsars et d'autres objets cosmiques."
  ),
  (
    "Recherche scientifique",
    "L'ISS sert de laboratoire de recherche en microgravité, offrant aux scientifiques du monde entier la possibilité d'effectuer des expériences dans des domaines tels que la biologie, la physique, la médecine, la chimie et les sciences de la Terre. Ces recherches permettent de mieux comprendre les effets de l'apesanteur sur les organismes vivants, d'explorer de nouveaux matériaux et de développer des technologies pour les missions spatiales futures."
  ),
  (
    "Exploration spatiale",
    "L'ISS joue un rôle important dans la préparation et le développement des technologies nécessaires pour des missions d'exploration spatiale à plus long terme, telles que les voyages vers la Lune, Mars et au-delà. Les expériences menées à bord de l'ISS contribuent à l'élaboration de nouvelles technologies de survie, de propulsion, de communication et de protection des astronautes en vue de ces futures missions."
  ),
  (
    "Collaboration internationale",
    "L'ISS est un projet de collaboration internationale impliquant plusieurs agences spatiales, notamment la NASA (États-Unis), Roscosmos (Russie), l'ESA (Europe), JAXA (Japon) et CSA (Canada). Cette coopération internationale permet de partager les coûts, les ressources et les compétences techniques, tout en favorisant la compréhension mutuelle et la diplomatie scientifique entre les pays participants."
  ),
  (
    "Formation des astronautes",
    "L'ISS sert de plateforme pour la formation des astronautes. Les séjours prolongés à bord de l'ISS permettent aux astronautes d'acquérir une expérience pratique en matière de vie et de travail dans l'espace, de développer des compétences en matière de maintenance et de réparation des systèmes de la station, et de s'entraîner à réaliser des sorties extravéhiculaires."
  ),
  (
    "Développement technologique",
    "L'ISS est utilisée pour tester et valider de nouvelles technologies dans des conditions de microgravité. Cela inclut le développement de nouveaux systèmes de propulsion, de matériaux avancés, de technologies de communication et de systèmes de support de vie pour les missions spatiales futures."
  ),
  (
    "Observation de la Terre",
    "L'ISS est équipée de capteurs et d'instruments pour observer la Terre depuis l'espace. Ces observations permettent de collecter des données sur les phénomènes météorologiques, les changements climatiques, la déforestation, la pollution et d'autres processus terrestres importants, contribuant ainsi à notre compréhension de notre planète."
  ),
  (
    "Education et sensibilisation",
    "L'ISS inspire et éduque les générations futures en matière de science, de technologie, d'ingénierie et de mathématiques (STEM). Les missions de l'ISS sont souvent accompagnées d'activités éducatives, de programmes de diffusion en direct et de ressources pédagogiques pour stimuler l'intérêt des étudiants pour l'exploration spatiale."
  );

INSERT INTO
  crew(
    picture,
    age,
    nation,
    name,
    description
  )
VALUES
  (
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Sergey_Prokopyev_-_NASA_portrait.jpg/800px-Sergey_Prokopyev_-_NASA_portrait.jpg",
    48,
    "https://img.freepik.com/vecteurs-premium/drapeau-russie-illustration-vectorielle-du-drapeau-russie_685751-100.jpg",
    "Sergueï Prokopyev",
    "1er vol spatial : du 6 juin au 20 décembre 2018 en tant que commandant du vaisseau spatial Soyouz MS-09 et ingénieur de vol ISS-56/57, en compagnie des astronautes Alexander Gerst (ESA) et Serina Aunyon-Chancellor (NASA). Pendant le vol, il a effectué deux sorties dans l'espace. Le premier était avec Oleg Artemiev les 15 et 16 août 2018 d'une durée totale de 7 heures 46 minutes. La deuxième sortie a eu lieu les 11 et 12 décembre 2018, avec Oleg Kononenko, d'une durée de 7 heures et 45 minutes. La durée du vol était de 196 jours 17 heures 49 minutes. 2e vol spatial : Le 21 septembre 2022, avec le cosmonaute de Roscosmos Dmitry Petelin et l'astronaute de la NASA Frank Rubio, il s'est lancé depuis le cosmodrome de Baïkonour en tant que commandant du Soyouz MS-22 TPK et commandant de l'ISS-68. "
  ),
  (
    "https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/jsc2017e114795_0.jpg?itok=PtdwE1YW",
    47,
    "https://img.freepik.com/vecteurs-premium/drapeau-usa-couleurs-proportions-originales-illustration-vectorielle-etats-unis-eps-10_148553-489.jpg",
    "Frank Rubio",
    "Rubio a pris ses fonctions en août 2017 et a suivi deux ans de formation en tant que candidat astronaute. Il a suivi une formation d'ingénieur de vol et membre de l'équipage de l'expédition 68. Rubio, avec les cosmonautes Sergey Prokopyev et Dmitry Petelin de Roscosmos, a lancé mercredi 21 septembre le vaisseau spatial Soyouz MS-22 du cosmodrome de Baïkonour au Kazakhstan à la Station spatiale internationale."
  ),
  (
    "https://www.gctc.ru/media/images/news/2021/ekipaji/Petelin.jpg",
    40,
    "https://img.freepik.com/vecteurs-premium/drapeau-russie-illustration-vectorielle-du-drapeau-russie_685751-100.jpg",
    "Dimitri Petelin",
    "1er vol spatial : Le 21 septembre 2022, avec le cosmonaute de Roscosmos Sergei Prokopiev et l'astronaute de la NASA Frank Rubio, il a décollé du cosmodrome de Baïkonour en tant qu'ingénieur de vol-1 du Soyouz MS-22 TPK et ingénieur de vol de l'ISS-68. Le 17 novembre, avec le cosmonaute Sergei Prokopyev, il a effectué une sortie dans l'espace d'une durée de 6 heures et 25 minutes."
  ),
  (
    "https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/9368719254_4a2c64ac77_o.jpg?itok=T12vNPdd",
    59,
    "https://img.freepik.com/vecteurs-premium/drapeau-usa-couleurs-proportions-originales-illustration-vectorielle-etats-unis-eps-10_148553-489.jpg",
    "Stephen G. Bowen",
    "En juillet 2000, Bowen a été le premier officier de sous-marin sélectionné par la NASA en tant que spécialiste de mission. Il s'est présenté pour une formation au Johnson Space Center en août 2000. Après deux années de formation et d'évaluation, il a d'abord été affecté à des tâches techniques au sein de la branche des opérations de la station du bureau des astronautes. Vétéran de trois vols spatiaux, STS‐126 en 2008, STS‐132 en 2010 et STS‐133 en 2011, Bowen a enregistré un total de 47 jours, 10 heures, 4 minutes et 37 secondes dans l'espace, dont 47 heures et 18 minutes en sept sorties dans l'espace. Bowen a été lancé à la Station spatiale internationale en tant que commandant de la mission SpaceX Crew-6 de la NASA à bord d'un vaisseau spatial SpaceX Crew Dragon le 2 mars 2023 et s'est amarré avec succès le 3 mars 2023."
  ),
  (
    "https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/jsc2017e118314_0.jpg?itok=2-osKvr9",
    37,
    "https://img.freepik.com/vecteurs-premium/drapeau-usa-couleurs-proportions-originales-illustration-vectorielle-etats-unis-eps-10_148553-489.jpg",
    "Woody Hoburg",
    "Au moment de sa sélection en juin 2017, Hoburg était professeur adjoint d'aéronautique et d'astronautique au MIT, où il a enseigné des cours de premier cycle sur la dynamique et l'ingénierie des véhicules de vol. Les recherches de Hoburg se sont concentrées sur des méthodes efficaces de conception de systèmes d'ingénierie. Son groupe a produit l'outil logiciel open source GPkit, qui est un package Python pour la programmation géométrique. Les outils de son groupe ont été utilisés pour concevoir un drone d'endurance de cinq jours pour l'US Air Force. Avant le MIT, il a travaillé pour Boeing Commercial Airplanes Product Development sur des logiciels pour les processus de fabrication de composites. De 2010 à 2013, il a été membre saisonnier de Yosemite Search and Rescue et chef des opérations pour l'unité de sauvetage en montagne de la région de la baie."
  ),
  (
    "https://www.gctc.ru/media/images/cosmonaut/fedyaev_a.jpg",
    42,
    "https://img.freepik.com/vecteurs-premium/drapeau-russie-illustration-vectorielle-du-drapeau-russie_685751-100.jpg",
    "Andrey Fedvaev",
    "Le 2 mars 2023, avec les astronautes de la NASA Steven Bowen , Woody  Hoburg  et l'astronaute des Émirats arabes unis Sult anom al-Neyadi,  lancé depuis le pad 39A du centre spatial Kennedy de la NASA en Floride sur le vaisseau spatial habité Crew Dragon en tant que spécialiste de mission Crew-6 et ingénieur de vol ISS-69. Le 3 mars, le vaisseau spatial habité Crew Dragon s'est amarré au module Harmony Node sur le segment"
  ),
  (
    "https://upload.wikimedia.org/wikipedia/commons/f/f9/SpaceX-Crew-6_Sultan-Alneyadi-MBRSC-scaled.jpg",
    42,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1280px-Flag_of_the_United_Arab_Emirates.svg.png",
    "Sultan Alneyadi",
    "AlNeyadi est né le 23 mai 1981 à Umm Ghafa, à 30 kilomètres au sud-est d'Al Ain, à Abu Dhabi, où il a fait ses études primaires et secondaires. Il a excellé dans son éducation, suivant les traces de son père, qui a servi dans l'armée. AlNeyadi a rejoint les forces armées et a été affecté à des études d'ingénierie des communications. Il a commencé ses études supérieures au Royaume-Uni et a obtenu un baccalauréat ès sciences en génie électronique et des communications de l'Université de Brighton au Royaume-Uni. Il est retourné aux Émirats arabes unis et a commencé à servir dans les forces armées. Plus tard, il a repris sa passion pour l'éducation en se rendant en Australie pour recevoir sa maîtrise en informatique, de l'Université Griffith en Australie, en 2008. AlNeyadi a travaillé comme ingénieur en sécurité réseau pour les forces armées des Émirats arabes unis et a visité plus de 20 pays à travers le monde. AlNeyadi a en outre terminé avec succès sa première année de formation au Johnson Space Center de la NASA en 2021, devenant officiellement certifié pour travailler en tant qu'opérateur à bord de la Station spatiale internationale."
  ),
  (
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/ISS_emblem.png/800px-ISS_emblem.png",
    25,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/ISS_emblem.png/800px-ISS_emblem.png",
    "International Space Station",
    "Station spatiale placée en orbite terrestre basse, occupée en permanence par un équipage international qui se consacre à la recherche scientifique dans l'environnement spatial. Ce programme, lancé et piloté par la NASA, est développé conjointement avec l'agence spatiale fédérale russe, avec la participation des agences spatiales européenne, japonaise et canadienne."
  );

INSERT INTO
  user (
    firstname,
    lastname,
    email,
    phoneNumber,
    address,
    hashedPassword
  )
VALUES
  (
    "Jesse",
    "Vallant",
    "vallantjesse@gmail.com",
    "0633831565",
    "Rue de la paix, 1",
    "$argon2id$v=19$m=65536,t=5,p=1$8JE5Z6IBoiIhbVLOii6AQQ$tg8MlaFmDVYx1fcnrOg0bGyci8y7O41g0RsOR3D50eQ"
  );

SET
  FOREIGN_KEY_CHECKS = 1;