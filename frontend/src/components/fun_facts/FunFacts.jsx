import React, { useEffect, useState } from "react";
import "./FunFacts.css";

export default function FunFacts() {
  const funFacts = [
    "L'ISS effectue environ 15,5 orbites autour de la Terre en une seule journée. Cela correspond à une période orbitale d'environ 90 minutes.",
    "L'ISS est un ensemble massif de structures spatiales, mesurant environ 109 mètres de longueur et pesant plus de 400 tonnes. Cela équivaut à peu près à la taille d'un terrain de football.",
    "L'ISS se déplace à une vitesse moyenne d'environ 28 000 kilomètres par heure (17 500 miles par heure). Cela signifie qu'elle effectue une orbite complète de la Terre en environ 90 minutes.",
    "Depuis novembre 2000, l'ISS est habitée en permanence. Cela signifie qu'il y a toujours des astronautes à bord, réalisant des expériences scientifiques, effectuant des réparations et entretenant la station.",
    "Bien qu'elle ne soit pas complètement dépourvue de gravité, l'ISS est en état de chute libre permanente, ce qui donne une sensation d'apesanteur à ses occupants. Cela permet d'effectuer des expériences dans des conditions de microgravité et d'étudier les effets de l'apesanteur sur le corps humain.",
    "L'ISS est un projet collaboratif entre plusieurs agences spatiales internationales, notamment la NASA, Roscosmos, l'Agence spatiale fédérale russe, l'Agence spatiale européenne (ESA), l'Agence japonaise d'exploration aérospatiale (JAXA) et l'Agence spatiale canadienne (ASC). C'est un exemple de collaboration pacifique entre nations dans le domaine de l'exploration spatiale.",
    "L'ISS est alimentée en électricité par des panneaux solaires. Elle dispose de huit panneaux solaires qui fournissent suffisamment d'énergie pour alimenter les systèmes de la station et les expériences scientifiques à bord.",
    "Les astronautes vivant à bord de l'ISS doivent faire face à des défis uniques. Ils doivent s'adapter à un environnement sans gravité, gérer leur temps en fonction des orbites et s'entraîner régulièrement pour maintenir leur santé physique dans l'espace.",
    "NASA (National Aeronautics and Space Administration) : En tant qu'agence spatiale des États-Unis, la NASA est le principal contributeur financier de l'ISS. Elle finance une grande partie des coûts liés à la conception, au développement et à l'exploitation de la station.",
    "CSA (Canadian Space Agency) : L'Agence spatiale canadienne contribue également financièrement à l'ISS. Le Canada fournit le bras robotique Canadarm2, qui est utilisé pour la maintenance et la construction de la station.",
    "JAXA (Japan Aerospace Exploration Agency) : Le Japon participe activement au financement de l'ISS par le biais de la JAXA. Le Japon fournit le module Kibo, qui est utilisé pour les expériences scientifiques à bord de l'ISS.",
    "Roscosmos : L'Agence spatiale fédérale russe joue un rôle important dans le financement de l'ISS. Elle fournit le segment russe de la station, y compris les modules habitables, les véhicules de ravitaillement et les cosmonautes russes.",
    "ESA (European Space Agency) : L'ESA est l'agence spatiale de l'Europe. Les pays membres de l'ESA contribuent financièrement à la construction et à l'exploitation de l'ISS. L'ESA fournit également des astronautes européens pour les missions à bord de la station.",
    "L'ISS a accueilli des astronautes de divers pays et des expériences culturelles intéressantes ont eu lieu à bord. Par exemple, en 2015, l'astronaute italienne Samantha Cristoforetti a cuisiné et dégusté la toute première pizza dans l'espace, grâce à une collaboration avec des chefs italiens.",
    "En 2013, l'astronaute de la NASA Karen Nyberg a apporté à bord de l'ISS une peluche en forme de chouette appelée 'Little Earth' (Petite Terre). La peluche est devenue une mascotte de l'ISS et a été utilisée pour expliquer les concepts scientifiques de manière ludique aux enfants.",
    "En 2007, l'astronaute de la NASA Sunita Williams a couru un marathon complet à bord de l'ISS. Elle a utilisé un tapis roulant spécial équipé de harnais pour rester en place dans l'apesanteur, tandis que ses amis et collègues sur Terre couraient également le marathon en solidarité.",
    "L'ISS a également été un lieu d'expériences sur la culture des plantes dans l'espace. Les astronautes ont cultivé avec succès des légumes frais tels que la laitue romaine à bord de l'ISS, leur offrant une source supplémentaire de nourriture et la possibilité de mener des recherches sur l'agriculture spatiale.",
    "Les astronautes de l'ISS bénéficient d'une vue imprenable sur la Terre depuis leur orbite. Ils ont la chance d'observer des aurores boréales, des orages, des levers et couchers de soleil spectaculaires, ainsi que des vues dégagées sur les continents, les océans et les phénomènes météorologiques depuis l'espace.",
    "L'ISS est équipée d'une salle de bain spéciale pour répondre aux besoins des astronautes. Le système de toilettes utilise le vide pour évacuer les déchets, tandis que l'eau est recyclée pour économiser les ressources. Les astronautes doivent s'adapter à un processus de toilette unique dans l'espace.",
    "Lors de la construction de l'ISS, le module Zarya, fourni par la Russie, était à l'origine conçu pour être le premier élément de la station. Cependant, en raison de retards dans la construction, le module Unity, fourni par les États-Unis, a été lancé en premier. Cela a conduit à une configuration inhabituelle où Unity était rattaché à Zarya à l'envers, formant ce que les astronautes ont surnommé le 'pouce' de l'ISS.",
    "Pour dormir dans l'espace, les astronautes de l'ISS utilisent des sacs de couchage spéciaux qui sont attachés à des parois ou à des plafonds de la station. Cependant, certains astronautes ont trouvé une alternative plus confortable en utilisant un hamac pour se reposer, flottant librement dans l'apesanteur.",
    "En raison de la quantité croissante de débris spatiaux en orbite terrestre, l'ISS est parfois forcée de modifier sa trajectoire pour éviter les collisions potentielles. Les astronautes ont même dû se réfugier dans les capsules de secours à bord de l'ISS à quelques reprises pour se préparer à une éventuelle collision avec des débris.",
    "Outre les astronautes, l'ISS a également accueilli des visiteurs inattendus. Des petits animaux tels que des araignées, des mouches des fruits et des moustiques ont été découverts à bord de la station après avoir été transportés involontairement depuis la Terre. Ces intrus ont été étudiés pour comprendre comment ils s'adaptent à la vie dans l'espace.",
    "En 2006, l'astronaute de la NASA Alan Shepard a créé l'événement en frappant une balle de golf lors d'une sortie extravéhiculaire sur l'ISS. En raison de l'apesanteur, la balle a flotté dans l'espace plutôt que de retomber sur Terre, ce qui en fait le premier 'swing' de golf dans l'espace.",
    "En 2001, l'astronaute de la NASA Chris Hadfield a été confronté à un problème médical grave lors de sa mission à bord de l'ISS. Il a ressenti une douleur intense à l'épaule gauche pendant une sortie extravéhiculaire et a dû être rapatrié d'urgence sur Terre pour une opération chirurgicale.",
    "En 2013, l'astronaute de la NASA Chris Hadfield est devenu une sensation sur les réseaux sociaux en partageant des vidéos éducatives et captivantes depuis l'ISS. Il a réalisé des démonstrations sur la vie quotidienne en apesanteur, a joué de la guitare et a chanté dans l'espace, créant ainsi la première 'téléréalité' spatiale.",
    "Les astronautes de l'ISS peuvent profiter d'une vue imprenable depuis leur 'bureau' spatial. Ils peuvent observer jusqu'à 16 levers et couchers de soleil par jour lorsqu'ils orbitent autour de la Terre, offrant une expérience visuelle exceptionnelle et changeante tout au long de leur séjour.",
    "Les astronautes de l'ISS peuvent appeler leurs proches depuis l'espace grâce à un système de communication par IP (Internet Protocol). Ils disposent d'un téléphone spécialement conçu qui leur permet de passer des appels vocaux avec leur famille et leurs amis sur Terre.",
    "Les toilettes de l'ISS sont un système complexe qui utilise le vide pour éliminer les déchets solides et liquides. Les astronautes doivent s'adapter à l'utilisation d'un tuyau d'aspiration pour évacuer leurs déchets et à des équipements spéciaux pour maintenir l'hygiène personnelle dans l'espace.",
    "Dans l'apesanteur, l'eau prend une forme intéressante. Les astronautes peuvent créer des bulles d'eau flottantes qui ne se dispersent pas, mais restent en forme de sphère en raison de la tension de surface. Ces bulles d'eau peuvent être utilisées pour étudier le comportement des fluides en microgravité.",
    "L'ISS est également un laboratoire de recherche en orbite où des milliers d'expériences scientifiques ont été menées. Ces expériences portent sur des domaines tels que la biologie, la physique, la médecine, la technologie spatiale, l'observation de la Terre et bien d'autres encore, contribuant ainsi à l'avancement des connaissances scientifiques.",
    "Dans l'espace, les astronautes ne peuvent pas prendre de bain ou de douche comme sur Terre. Au lieu de cela, ils doivent utiliser des lingettes spéciales pour se laver et maintenir une bonne hygiène corporelle. L'eau utilisée pour se laver est récupérée et recyclée autant que possible.",
    "Les astronautes à bord de l'ISS trouvent des façons uniques de célébrer les occasions spéciales. Ils ont célébré des anniversaires, des fêtes de fin d'année et même la Coupe du monde de football en apesanteur. Des décorations spéciales, de la nourriture spéciale et des messages vidéo de leurs proches sur Terre font partie de ces célébrations spatiales.",
    "Plusieurs astronautes à bord de l'ISS ont montré leur passion pour l'art. Certains ont utilisé des aquarelles et des crayons pour créer des peintures inspirées de la Terre vue de l'espace, capturant la beauté de notre planète depuis leur perspective unique.",
    "Lorsque les nouveaux astronautes arrivent à bord de l'ISS, ils doivent s'adapter rapidement à l'apesanteur. Leur première expérience de flottement libre dans la station est souvent mémorable et laisse une forte impression. Ils doivent réapprendre à se déplacer et à effectuer des tâches simples dans un environnement sans gravité.",
    "Plusieurs célébrités ont eu la chance de visiter l'ISS et d'expérimenter la vie dans l'espace pendant de courtes périodes. Cela comprend des acteurs, des chanteurs et même des personnalités sportives. Ces visites contribuent à sensibiliser le grand public aux activités spatiales et à l'importance de la recherche scientifique dans l'espace.",
    "De nombreux astronautes ont partagé leurs expériences et réflexions sur la vie dans l'espace en écrivant des livres. Ces récits détaillent leur formation, leurs missions spatiales, les défis rencontrés et les émotions ressenties lorsqu'ils ont quitté la Terre. Ces livres offrent un aperçu fascinant de la vie à bord de l'ISS.",
    "Les astronautes de l'ISS ont la possibilité de goûter à une variété de plats spécialement conçus pour être consommés dans l'espace. Ces aliments sont emballés sous forme de repas prêts à l'emploi et sont conçus pour être légers, faciles à réhydrater et à manger sans faire de miettes, car celles-ci pourraient se disperser dans la station.",
    "En raison de l'apesanteur, les astronautes de l'ISS peuvent développer des 'marques de gravité' sur leur corps. Ces marques sont causées par la pression des sangles des combinaisons spatiales et des harnais utilisés pour maintenir les astronautes en place lors des lancements et des sorties extravéhiculaires.",
    "Lorsque l'ISS est exposée à des températures extrêmes, comme lorsqu'elle se trouve du côté sombre de la Terre, les astronautes doivent faire face à un défi supplémentaire pour éviter que les conduites d'eau ne gèlent. Les toilettes de l'ISS sont équipées d'un système de chauffage pour empêcher l'eau de se solidifier.",
    "En 2018, des œufs de poule ont été envoyés à bord de l'ISS pour une expérience. À la grande surprise des astronautes, deux poussins sont nés en bonne santé dans l'espace, marquant ainsi la première naissance de poussins en dehors de la Terre. Les poussins ont été renvoyés sur Terre pour être étudiés après leur éclosion.",
    "Plusieurs astronautes ont établi des records de longévité dans l'espace à bord de l'ISS. Par exemple, en 2015, Scott Kelly et Mikhail Kornienko ont passé près d'un an à bord de la station, ce qui en fait le séjour le plus long pour des astronautes de la NASA. Ces séjours prolongés sont essentiels pour étudier les effets de l'espace sur le corps humain.",
    "Pour contrer les effets de l'apesanteur sur les muscles et les os, l'ISS est équipée d'un dispositif de musculation spécialement conçu pour permettre aux astronautes de faire de l'exercice. Ce dispositif utilise des élastiques et des ressorts pour créer une résistance et permettre aux astronautes de maintenir leur condition physique tout en étant en orbite.",
    "À bord de l'ISS, les astronautes ont un petit jardin de légumes appelé 'Veggie'. Ils cultivent des plantes comme la laitue romaine et mangent parfois les récoltes fraîches. Cette expérience permet d'étudier la croissance des plantes en apesanteur et d'explorer les possibilités d'une agriculture spatiale à plus grande échelle.",
    "Pour se rendre et revenir de l'ISS, les astronautes utilisent des capsules spatiales appelées 'taxi' spatiaux. Ces véhicules, comme le Soyouz russe et le Crew Dragon de SpaceX, sont essentiels pour le transport des équipages vers et depuis la station. Ils fonctionnent comme un système de navette spatiale pour les astronautes.",
    "Plusieurs astronautes ont emmené des instruments de musique à bord de l'ISS pour jouer de la musique dans l'espace. Des guitares, des flûtes et même un saxophone ont été joués par les astronautes, créant une ambiance musicale unique dans l'environnement sans gravité de la station.",
    "L'ISS est un projet de coopération internationale impliquant de nombreux pays. Les astronautes de différentes nationalités travaillent ensemble et vivent en harmonie à bord de la station. Cela témoigne de la capacité des nations à collaborer pour des objectifs communs dans l'espace.",
    "L'ISS abrite des objets spéciaux chargés de symbolisme. Par exemple, des drapeaux, des médailles et des objets personnels sont emportés à bord pour représenter les pays et les individus qui ont contribué à la construction et au fonctionnement de la station.",
    "Les astronautes de l'ISS ont également participé à des expériences artistiques, notamment en utilisant l'apesanteur pour créer des performances artistiques uniques. Des danseurs, des acrobates et même des réalisateurs de films ont collaboré avec les astronautes pour capturer des images et des mouvements uniques dans l'espace.",
    "L'apesanteur affecte le corps humain de différentes manières. Par exemple, sans la force gravitationnelle de la Terre, les astronautes peuvent perdre jusqu'à 20% de leur masse osseuse pendant un séjour prolongé dans l'espace. C'est pourquoi l'exercice physique et une alimentation équilibrée sont essentiels pour maintenir leur santé.",
    "L'ISS est équipée d'une connexion Internet qui permet aux astronautes de communiquer avec la Terre et d'accéder à des ressources en ligne. Cependant, en raison des contraintes de bande passante, la navigation sur Internet est limitée et l'échange de données est souvent retardé.",
    "Les astronautes peuvent emporter avec eux quelques objets personnels pour se sentir plus proches de chez eux. Par exemple, des photos de famille, des jouets de collection, des drapeaux nationaux et même des aliments spéciaux peuvent être apportés à bord pour créer un environnement plus familier et confortable.",
    "Comme dans tout lieu habité, l'ISS a une corbeille à déchets spéciale. Les déchets solides sont comprimés et stockés dans des conteneurs, tandis que les déchets liquides sont traités et recyclés pour produire de l'eau potable.",
    "L'ISS est exposée à des températures extrêmes dans l'espace. Lorsqu'elle est exposée au soleil, la température à l'extérieur de la station peut atteindre environ 120 degrés Celsius (248 degrés Fahrenheit). En revanche, lorsqu'elle est du côté sombre de la Terre, la température peut chuter à environ -150 degrés Celsius (-238 degrés Fahrenheit).",
    "Étant donné que l'ISS est située en dehors de l'atmosphère terrestre, les astronautes bénéficient d'une vue exceptionnelle sur le ciel étoilé. En l'absence de pollution lumineuse, ils peuvent observer des milliers d'étoiles scintillantes et des phénomènes célestes tels que les aurores boréales avec une clarté étonnante.",
    "Les astronautes de l'ISS mènent régulièrement des expériences scientifiques fascinantes. Par exemple, des études ont été menées sur la croissance des plantes en apesanteur, la formation des bulles de savon, l'effet de la microgravité sur la combustion, et même la création de tissus de viande en laboratoire.",
    "Il n'est pas rare que des créatures inattendues se retrouvent à bord de l'ISS. Des araignées, des moucherons et même des geckos ont été découverts dans la station. Ces visiteurs non invités fournissent aux scientifiques des informations sur la survie et le comportement des animaux dans des conditions de microgravité.",
    "De nombreux astronomes amateurs ont réussi à prendre des photos de l'ISS depuis la Terre. Lorsque la station passe devant le soleil ou la lune pendant son orbite, elle crée une silhouette distincte qui peut être capturée en utilisant un équipement d'observation approprié.",
    "Malgré l'idée reçue que l'espace est silencieux, l'ISS peut être un endroit bruyant. Les systèmes de ventilation, les équipements scientifiques et les différentes activités des astronautes génèrent des bruits qui peuvent parfois être gênants. Les astronautes utilisent des bouchons d'oreilles pour réduire le niveau sonore lorsqu'ils ont besoin de se reposer.",
    "Les astronautes à bord de l'ISS ne manquent pas de s'amuser avec des jouets et des objets qui flottent dans l'apesanteur. Ils peuvent être vus en train de lancer des balles, de faire des acrobaties avec des jouets en peluche, ou même de jouer à des jeux de société modifiés pour l'apesanteur.",
    "L'ISS est équipée de toilettes spatiales sophistiquées qui sont le fruit d'une technologie avancée. Ces toilettes utilisent un système de vide pour aspirer les déchets humains et les stocker dans des conteneurs scellés. L'urine est ensuite recyclée en eau potable grâce à un système de purification.",
    "L'ISS abrite également des expériences sur la germination des semences dans l'espace. Des graines de différentes plantes ont été envoyées à bord de la station pour étudier leur capacité à germer et à pousser en apesanteur. Ces études visent à comprendre comment les plantes peuvent être cultivées dans l'espace pour soutenir l'alimentation des astronautes lors de missions spatiales de longue durée.",
    "Les astronautes de l'ISS consacrent environ deux heures par jour à l'exercice physique pour prévenir la perte de masse musculaire et d'os due à l'apesanteur. Ces sessions d'entraînement incluent des exercices cardiovasculaires, de musculation et de flexibilité. Les astronautes peuvent également utiliser un tapis roulant et un vélo stationnaire spécialement conçus pour l'espace.",
    "En 2019, les astronautes de l'ISS ont réalisé une prouesse technique en assemblant une capsule temporaire appelée 'Crew Dragon Demo-1' de SpaceX à la station. Cette capsule a été utilisée pour tester les systèmes de transport d'équipage avant d'être renvoyée sur Terre.",
    "En plus de mener des expériences scientifiques, les astronautes de l'ISS ont également la possibilité d'observer la Terre depuis l'espace. Ils peuvent photographier des phénomènes naturels tels que les ouragans, les aurores boréales, les volcans en éruption et les changements environnementaux pour aider à la surveillance de notre planète.",
    "Plusieurs artistes ont eu l'opportunité de collaborer avec les astronautes de l'ISS pour créer des enregistrements musicaux uniques. Des chansons, des compositions instrumentales et même des performances vocales ont été réalisées à bord de la station, apportant une dimension artistique à la vie en apesanteur.",
    "En 2014, l'ISS a accueilli la première imprimante 3D dans l'espace. Cette technologie permet aux astronautes de créer des outils et des pièces de rechange directement à bord de la station, réduisant ainsi la nécessité d'envoyer des fournitures depuis la Terre.",
    "Les astronautes de l'ISS ont mené des expériences fascinantes avec des liquides en apesanteur. Par exemple, ils ont observé le comportement de gouttes d'eau en apesanteur, étudié les propriétés de la surface libre des liquides et testé des techniques de purification de l'eau par évaporation.",
    "Lorsqu'un astronaute atteint le nombre de 500 jours cumulés dans l'espace, il devient membre du 'Club des 500'. Ce groupe sélect est composé d'astronautes qui ont passé un temps considérable dans l'espace et qui partagent une expérience unique.",
    "À bord de l'ISS, les scientifiques ont réussi à créer une bougie sans flamme grâce à la microgravité. En l'absence de convection due à la gravité, la combustion d'une bougie se produit de manière très différente, générant une flamme en forme de sphère bleue.",
    "Les astronautes de l'ISS sont responsables de l'entretien et du nettoyage de la station. Ils doivent s'occuper du dépoussiérage, du nettoyage des filtres d'air et des systèmes de ventilation, et même du remplacement des toilettes spatiales. L'hygiène et la propreté sont essentielles pour maintenir un environnement de vie sain dans l'espace.",
    "Dans l'espace, les cheveux ont tendance à flotter librement sans la pesanteur pour les maintenir en place. Les astronautes doivent s'adapter à cette situation en utilisant des techniques spéciales pour se couper les cheveux et se laver les cheveux sans que les mèches ne se dispersent dans la station.",
    "Les astronautes de l'ISS doivent manger des aliments spécialement conçus pour l'espace. Les aliments sont déshydratés, emballés individuellement et réhydratés avant d'être consommés. La nourriture doit également être bien équilibrée sur le plan nutritionnel pour répondre aux besoins des astronautes en orbite.",
    "Les astronautes de l'ISS participent à des études sur le sommeil pour mieux comprendre comment l'apesanteur affecte le repos et la récupération. Des dispositifs de surveillance sont utilisés pour enregistrer les cycles de sommeil, la qualité du sommeil et les changements dans les habitudes de sommeil des astronautes en apesanteur.",
    "Des expériences avec des souris ont été menées à bord de l'ISS pour étudier les effets de l'apesanteur sur leur santé, leur reproduction et leur comportement. Ces études aident les scientifiques à mieux comprendre les réponses biologiques à la microgravité et à préparer les futures missions spatiales impliquant des animaux.",
    "L'ISS doit faire face au problème croissant des déchets spatiaux. En orbite terrestre, il y a de nombreux débris de satellites et de fusées qui peuvent représenter un danger pour la station. Des mesures sont prises pour surveiller et éviter les collisions avec ces débris en ajustant l'altitude de l'ISS si nécessaire.",
    "Les astronautes de l'ISS travaillent souvent plus de 12 heures par jour, avec un emploi du temps minutieusement planifié. Ils consacrent leur temps à des expériences scientifiques, à la maintenance de la station, à l'exercice physique, aux communications avec la Terre et à d'autres tâches liées à la vie quotidienne dans l'espace.",
    "Les astronautes à bord de l'ISS trouvent des moyens créatifs de célébrer les occasions spéciales. Ils organisent des fêtes pour les anniversaires, les fêtes nationales et les événements marquants, avec des décorations, des repas spéciaux et même des messages vidéo envoyés par leurs proches sur Terre.",
    "Les astronautes de l'ISS jouent un rôle important en tant qu'ambassadeurs de l'éducation scientifique. Ils communiquent régulièrement avec des écoles du monde entier, réalisent des démonstrations en direct et partagent leur expérience pour inspirer les jeunes à s'intéresser à la science, à la technologie, à l'ingénierie et aux mathématiques.",
    "Les astronautes de l'ISS ont réussi à faire pousser des fleurs en apesanteur. En 2015, des zinnias ont été cultivées et fleuries à bord de la station. Cette expérience a permis d'étudier les défis et les possibilités de cultiver des plantes à des fins d'alimentation et de bien-être psychologique dans un environnement spatial.",
    "Plusieurs astronautes ont apporté des instruments de musique à bord de l'ISS et ont joué de la musique en apesanteur. La guitare, le saxophone, la flûte et même le didgeridoo ont été entendus dans l'espace, créant une atmosphère musicale unique à des milliers de kilomètres au-dessus de la Terre.",
    "L'ISS est utilisée comme un environnement d'entraînement pour les astronautes qui se préparent à des missions plus longues vers d'autres destinations, comme la Lune ou Mars. Les expériences menées à bord de l'ISS aident à comprendre les effets physiologiques et psychologiques de l'espace sur le corps humain et à développer des stratégies pour les missions spatiales futures.",
    "Les astronautes de l'ISS ont des régimes alimentaires spéciaux pour répondre à leurs besoins nutritionnels en apesanteur. Les repas sont soigneusement emballés et étiquetés pour une identification facile, et ils peuvent inclure une variété d'aliments tels que des légumes, des fruits, des viandes, des pâtes et des desserts spécialement préparés pour l'espace.",
    "En 2006, l'astronaute russe Mikhail Tyurin a réussi à frapper une balle de golf depuis l'extérieur de l'ISS lors d'une sortie extravéhiculaire. La balle a été envoyée dans l'espace et est restée en orbite pendant un certain temps avant de brûler dans l'atmosphère terrestre.",
    "L'ISS abrite des télescopes et des instruments d'observation utilisés pour étudier l'univers. L'absence de l'atmosphère terrestre et les conditions de faible luminosité de l'espace offrent des avantages pour les observations astronomiques, permettant aux scientifiques d'explorer les étoiles, les galaxies et d'autres phénomènes cosmiques.",
    "Les astronautes de différentes nationalités à bord de l'ISS célèbrent les fêtes religieuses en fonction de leurs croyances. Des arrangements sont faits pour leur permettre de pratiquer leur religion, que ce soit en observant des rituels, en réalisant des prières spéciales ou en ayant des repas adaptés à leurs pratiques alimentaires.",
    "Les astronautes de l'ISS ont établi des connexions avec des écoles du monde entier pour mener des sessions éducatives en direct depuis l'espace. Les élèves ont la possibilité de poser des questions aux astronautes, d'en apprendre davantage sur la vie en apesanteur et de s'inspirer de leurs expériences pour poursuivre des carrières dans les domaines scientifiques et spatiaux.",
    "Dans l'espace, les astronautes doivent faire face à des défis pour laver leurs vêtements. En raison des contraintes de ressources, ils doivent utiliser des méthodes spéciales pour nettoyer leurs vêtements, comme l'utilisation de lingettes humides ou de solutions de nettoyage sans eau. Les vêtements portés plusieurs fois sont souvent incinérés lorsqu'ils ne sont plus utilisables.",
    "Les astronautes de l'ISS ont la possibilité d'apporter des petits objets personnels à bord pour les rappeler de leur vie sur Terre. Ils peuvent également recevoir des colis de leurs proches contenant des lettres, des photos et même des petits cadeaux. Ces objets personnels ont une grande valeur sentimentale pour les astronautes en mission spatiale.",
    "Plusieurs astronautes ont également montré leur côté artistique en créant des œuvres d'art dans l'espace. Ils ont réalisé des dessins, des peintures et des photographies qui capturent la beauté de la Terre vue de l'espace. Ces œuvres sont souvent exposées et partagées avec le public pour inspirer l'appréciation de notre planète.",
    "L'ISS a également été le théâtre d'expériences impliquant des robots. Les astronautes ont travaillé en collaboration avec des robots pour réaliser des tâches d'assemblage, de maintenance et d'exploration. Ces expériences visent à développer des technologies avancées pour l'exploration spatiale future et la coopération homme-robot.",
    "À bord de l'ISS, les astronautes portent des combinaisons spéciales appelées 'EMU' (Extravehicular Mobility Units) lorsqu'ils effectuent des sorties extravéhiculaires (EVA). Ces combinaisons fournissent une protection contre le vide spatial, les températures extrêmes et les micrométéorites. Elles sont personnalisées pour chaque astronaute et sont équipées de systèmes de communication et de contrôle de vie.",
    "Les astronautes de l'ISS participent à des expériences pour étudier les effets de l'apesanteur sur les fluides corporels tels que le sang, la salive et l'urine. Ces études aident les scientifiques à mieux comprendre les changements physiologiques qui se produisent dans l'espace et à développer des contre-mesures pour maintenir la santé des astronautes.",
    "L'ISS est un environnement complexe qui nécessite parfois des réparations. Les astronautes doivent effectuer des tâches délicates, comme la réparation de systèmes électriques, la maintenance des panneaux solaires et le remplacement de pièces défectueuses lors de sorties extravéhiculaires. Ces opérations exigent une grande précision et une connaissance approfondie des systèmes de la station.",
    "En l'absence de la gravité terrestre, les astronautes peuvent ressentir une désorientation spatiale. Leurs sens de l'équilibre et de la direction peuvent être perturbés, ce qui peut causer des problèmes lors des premiers jours dans l'espace. Les astronautes doivent s'adapter à cette sensation et développer des stratégies pour se repérer et se déplacer dans l'environnement en apesanteur.",
    "Pour contrer les effets de la microgravité sur leur corps, les astronautes doivent suivre un programme d'exercices physiques rigoureux à bord de l'ISS. Ils utilisent des équipements spéciaux tels que des tapis roulants, des vélos d'exercice et des appareils de musculation pour maintenir leur masse musculaire, leur densité osseuse et leur condition physique générale.",
    "natL'ISS offre également un environnement propice pour mener des études sur la perception du temps. Les astronautes peuvent participer à des expériences qui examinent comment l'absence de cycles jour-nuit et les horaires de travail flexibles dans l'espace affectent leur perception temporelle, leur rythme circadien et leur sommeil.ions",
    "Les astronautes de l'ISS doivent se nourrir avec des aliments spécialement conçus pour l'espace. La nourriture est déshydratée, emballée individuellement et réhydratée avec de l'eau avant d'être consommée. Elle doit également être non périssable et facile à préparer dans des conditions de microgravité.",
    "À bord de l'ISS, les astronautes dorment dans des sacs de couchage spéciaux fixés aux parois pour éviter de flotter dans la station pendant leur sommeil. Cela leur permet de se reposer sans dériver dans la cabine.",
    "Passer du temps en apesanteur a des effets sur le corps des astronautes. Par exemple, les os et les muscles peuvent s'affaiblir, la vision peut être affectée et le système cardiovasculaire peut être soumis à des ajustements. Les scientifiques étudient ces effets pour mieux comprendre les défis physiologiques de longs séjours dans l'espace.",
    "L'ISS génère des déchets qui doivent être gérés de manière appropriée. Les déchets solides sont stockés dans des conteneurs spéciaux et rapatriés sur Terre pour être éliminés. Les déchets liquides sont traités et recyclés en eau potable, tandis que les déchets gazeux sont évacués dans l'espace.",
    "Les astronautes de l'ISS participent souvent à des expériences médicales pour étudier les effets de l'apesanteur sur le corps humain. Ils peuvent effectuer des tests sanguins, des échographies et d'autres examens pour surveiller leur santé et recueillir des données précieuses pour les futures missions spatiales.",
    "L'ISS sert également de plateforme de lancement pour les satellites CubeSats, de petits satellites utilisés à des fins de recherche et d'observation. Les astronautes déploient ces satellites depuis l'ISS, leur permettant de collecter des données et de fournir des informations précieuses sur la Terre et l'espace.",
    "Les astronautes se déplacent à travers la station en utilisant des poignées spéciales fixées aux murs et aux sols. En apesanteur, ils peuvent se pousser, se tirer ou se propulser pour se déplacer d'un endroit à un autre. Cela nécessite une coordination et une adaptation de leurs sens de l'équilibre et de la direction.",
  ];

  // const [randomI, setRandomI] = useState(randomIndex);
  // let randomIndex = Math.floor(Math.random() * funFacts.length);
  const [counter, setCounter] = useState(0);
  const [funFact, setFunFact] = useState(funFacts[counter]);

  function randomFunFact() {
    if (counter < funFacts.length - 1) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }

    setFunFact(funFacts[counter]);
    // console.info("funFacts[randomIndex] :>> ", counter);
  }

  useEffect(() => {}, [counter, funFact]);

  return (
    <div className="fun-facts-container">
      <div className="fun-fact">{funFact}</div>
      <button
        className="fun-fact-random-button"
        type="button"
        onClick={() => randomFunFact()}
      >
        Random Fun Fact
      </button>
    </div>
  );
}
