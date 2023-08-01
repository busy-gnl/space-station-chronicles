# Cahier des charges - Projet Space Station Chronicles
### Objectifs du site web :
Le site web "Space Station Chronicles" a pour objectifs de fournir des informations complètes et engageantes sur la Station Spatiale Internationale (ISS) ainsi que de permettre aux visiteurs d'acheter des “goodies” liés à l'ISS. De plus, le projet inclura un tableau de bord dédié à l'administrateur pour faciliter la gestion et la mise à jour du contenu du site.
## Fonctionnalités du site web :
* **Page d'accueil** *(route : /home)* :
  * Afficher les dernières news depuis l'ISS, les derniers tweets, etc.
  * Afficher un timer représentant le temps écoulé depuis la mise en orbite de la station.
  * Afficher un chat (propulsé par chatGPT) pour que les visiteurs puissent virtuellement discuter avec l’équipage de l'ISS.
  * Intégrer le tableau de bord de l'administrateur pour la gestion du contenu.

* **Carte interactive** *(route : /map)* :
  * Afficher la position de l'ISS en temps réel sur une carte interactive avec des informations sur l'altitude, la vitesse, etc.
  * Diffuser en direct le flux vidéo depuis l'ISS via la chaîne officielle Youtube.
  * Afficher les noms et les rôles des membres de l'équipage actuel avec des informations sur les missions en cours.
  * Permettre aux utilisateurs de cliquer sur chaque astronaute pour afficher plus de détails (modale).

* **Chronologie de l'ISS** *(route : /timeline)* :
  * Présenter l'histoire de l'ISS, depuis sa conception jusqu'à sa construction et son lancement dans l'espace.
  * Afficher une frise chronologique avec les événements clés, les étapes importantes et les succès marquants de l’histoire de l’espace.

* **Chroniques de l'ISS** *(route : /chronicles)* :
  * Présenter de courtes informations sur l'ISS et son histoire.
  * Présenter des informations sur chaque module constituant l’ISS.
  * Présenter les principales missions de l'ISS, y compris des informations amusantes et intéressantes.

* **Boutique de goodies** *(route : /shop)* :
  * Afficher une variété de produits liés à l'ISS à vendre.
  * Catégories de produits : T-shirts, vêtements, accessoires électroniques, tasses, posters, livres et magazines, modèles réduits, badges et écussons, jouets et jeux, souvenirs spatiaux, articles de papeterie.
  * Afficher les détails de chaque produit, y compris une image, une description, un prix et la disponibilité en stock.
  * Ajouter des produits au panier et passer des commandes.

* **Tableau de bord de l'administrateur** *(route : /admin*) :
* Connexion et authentification : L'administrateur doit pouvoir se connecter en utilisant ses identifiants (email et mot de passe) pour accéder au tableau de bord.
* Gestion des informations techniques : Ajout, modification et suppression d'informations techniques sur la construction et la maintenance de l'ISS, avec la possibilité d'inclure des images.
* Gestion des produits dans la boutique : Ajout, modification et suppression de produits disponibles dans la boutique de “goodies” liés à l'ISS. L'administrateur pourra gérer les informations sur les produits, y compris le nom, l'image, la description, le prix, la disponibilité en stock et leur catégorie.
* Gestion des utilisateurs : L'administrateur doit pouvoir gérer les comptes utilisateurs, notamment les autorisations d'accès au tableau de bord pour d'autres administrateurs.
* Déconnexion : Possibilité pour l'administrateur de se déconnecter du tableau de bord.

## ⠀Design du site web :
* Le design du site web doit être simple, moderne et facile à naviguer pour les utilisateurs.
* Utilisation d'une palette de couleurs cohérente avec le thème de l'espace, avec une prédominance de couleurs sombres pour un effet visuel attrayant.
* Le site web doit être réactif et s'adapter à tous les types d'appareils (ordinateurs, tablettes, téléphones).
* Le site web doit être compatible avec les principaux navigateurs (Chrome, Firefox, Safari, Edge, etc.).

## ⠀Technologies utilisées :
* Frontend : HTML5, CSS3, JavaScript, et React pour créer une interface utilisateur réactive et facile à utiliser.
* Backend : Node.js avec Nest.js pour mettre en place le backend et gérer les requêtes vers la base de données.
* Base de données : Utilisation d'une base de données MySQL pour stocker les informations sur les utilisateurs, les produits, etc.
* Authentification : Utilisation d'un système d'authentification sécurisé pour permettre à l'administrateur de se connecter au tableau de bord.
* API de cartographie : Pour afficher la position de l'ISS sur la carte interactive nous utiliserons également une API de cartographie comme Google Maps.
* API ChatGPT : Pour donner l’impression aux visiteurs qu’ils sont vraiment en train de discuter avec les membres de l’équipage de l’ISS.

*En mettant en œuvre ces fonctionnalités et ces technologies, le site web Space Station Chronicles offrira une expérience utilisateur engageante pour les visiteurs souhaitant en savoir plus sur l'ISS, tout en facilitant la gestion du contenu via le tableau de bord de l'administrateur.*   
