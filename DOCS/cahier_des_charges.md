# Projet 2 Billie Boys -> Space Station Chronicles

## Objectifs du site web :

- Afficher les dernières news depuis l'ISS, les derniers tweets, etc.
- Afficher un timer représentant le temps écoulé depuis la mise en orbite de la station.
- Afficher la position de l'ISS en temps réel sur une carte interactive avec des informations sur l'altitude, la vitesse, etc.
- Streamer en direct le live de la vue depuis l'ISS depuis la chaine officielle Youtube
- Fournir des informations sur l'équipage de l'ISS, y compris les noms, les photos, les rôles et les missions en cours.
- Présenter l'histoire de l'ISS, depuis sa conception jusqu'à sa construction et son lancement dans l'espace.
- Fournir des informations techniques sur la construction et la maintenance de l'ISS, y compris des images et des vidéos.

### --------------------------------------------------

### _Projet 2 bis_

- Inclure un espace commentaires / discussion afin que les visiteurs du sites puissent discuter et potentiellement envoyer des messages à l'équipage. (Projet 2 Bis)
- Proposer un espace de vente de goodies ou tout autre marchandises liées à l'ISS. (Projet 2 Bis)

## Fonctionnalités du site web :

- Afficher les dernières news depuis l'ISS, les derniers tweets, etc.
- Afficher un timer représentant le temps écoulé depuis la mise en orbite de la station.
- Affichage de la position de l'ISS sur une carte interactive avec des informations en temps réel sur l'altitude, la vitesse, etc.
- Intégration de la vidéo live en direct de l'ISS
- Affichage de la photo et du nom de l'équipage actuel de l'ISS, avec des informations sur les missions en cours et les rôles de chacun.
- Présentation de l'histoire de l'ISS, depuis sa conception jusqu'à sa construction et son lancement dans l'espace, avec des informations sur les événements clés, les étapes importantes et les succès marquants.
- Affichage d'informations techniques sur la construction et la maintenance de l'ISS, y compris des images et des vidéos.
- Possibilité de suivre les comptes de réseaux sociaux de l'ISS, tels que Twitter et Instagram, pour obtenir les dernières mises à jour sur les activités de l'équipage.

### --------------------------------------------------

### _Projet 2 bis_

- Possibilité de contacter l'équipage de l'ISS via un formulaire de contact en ligne.(Projet 2 Bis)
- Une barre de recherche pour trouver des informations spécifiques sur l'ISS, l'équipage ou l'historique. (Projet 2 Bis)
- Espace de discussion pour les utilisateurs. (Projet 2 Bis)

## Pages/routes

1. **Home** _(route : /home)_ : Courte présentation de l'ISS, dernières news, quelques photos, formulaire pour contacter l'équipage, timer montrant le temps écoulé depuis son lancement
2. **Map** _(route : /map)_ : position de de l'ISS sur une carte, vidéo live depuis l'ISS, équipage à bord + modale pour plus de détails sur chaque astronaute
3. **Chronology** _(route : /chronology)_ : frise chronologique débutant à la conception de l'ISS, expliquant sa construction jusqu'à son lancement dans l'espace
4. **Chronicles** _(route : /chronicles)_ : principales missions, anecdotes intéressantes, etc

### --------------------------------------------------

### _Projet 2 bis_
<!-- 
5. **Forum** _(route : /talk)_ : espace de discussion entre utilisateurs -->
6. **Goodies** _(route : /shop)_ : page de vente de goodies liés à l'ISS
- T-shirts et vêtements : Proposez des t-shirts, des sweats à capuche et d'autres vêtements avec des motifs liés à l'ISS, comme des illustrations de la station spatiale, des astronautes ou des logos de missions spatiales.

- Accessoires pour appareils électroniques : Offrez des coques de téléphone, des étuis d'ordinateur portable ou des stickers avec des designs de l'ISS ou des logos spatiaux pour les amateurs de technologie.

- Tasses et bouteilles d'eau : Créez des tasses à café ou des bouteilles d'eau avec des images de l'ISS, des astronautes ou des citations inspirantes sur l'exploration spatiale.

- Posters et impressions d'art : Vendez des posters ou des impressions d'art mettant en valeur des photographies ou des illustrations de l'ISS dans l'espace, offrant ainsi aux gens la possibilité de décorer leur espace avec des images de l'aventure spatiale.

- Livres et magazines : Proposez une sélection de livres, magazines et autres publications liés à l'ISS, l'exploration spatiale, l'astronomie et la science.

- Modèles réduits et kits de construction : Offrez des modèles réduits de l'ISS ou des kits de construction permettant aux amateurs de construire leur propre version de la station spatiale.

- Badges et écussons : Créez des badges ou des écussons représentant des logos de missions spatiales ou des emblèmes de l'ISS que les gens peuvent porter ou collectionner.

- Jouets et jeux : Proposez des jouets éducatifs, des puzzles ou des jeux de société sur le thème de l'ISS et de l'exploration spatiale.

- Souvenirs spatiaux : Offrez des souvenirs spéciaux tels que des fragments d'équipement spatial authentiques, des pièces de monnaie commémoratives ou des timbres spatiaux.

- Articles de papeterie : Créez des carnets, des stylos, des marque-pages ou des autocollants avec des motifs de l'ISS pour les amateurs de papeterie.

### Conceptualisation BDD
#### Entités
1. Products
   - name
   - image
   - description
   - prix
   - stock
   - category_id
  
2. Categories
   - name

3. Users
   - firstname
   - lastname
   - email
   - password
   - address
   - phone number

4. Carts
   - user_id
   - products
  
5. Cart_line
   -cart_id
   -product_id
   -quantity

6. Orders
   - user_id
   - cart_id
   - status
   - date



## Design du site web :

- Le design doit être simple, moderne et facile à naviguer pour l'utilisateur.
- Les couleurs doivent être cohérentes avec le thème de l'espace, avec une prédominance de couleurs sombres pour un effet visuel attrayant.
- Le site web doit être réactif et s'adapter à tous les types d'appareils (ordinateurs, tablettes, téléphones).
- Le site web doit être compatible avec les principaux navigateurs (Chrome, Firefox, Safari, Edge, etc.).

## Technologies :

- Le site web doit être construit avec des technologies modernes, telles que HTML5, CSS3, JavaScript et React.
  
- Le système de cartographie doit utiliser une API de cartographie open-source, comme OpenStreetMap.

### --------------------------------------------------

### _Projet 2 bis_

- Le backend doit être développé en utilisant un framework JavaScript tel que NodeJS et Express.(Projet 2 Bis)

_En résumé, le site web doit fournir une expérience utilisateur engageante pour les visiteurs qui souhaitent en savoir plus sur l'ISS, son équipage, son histoire et sa construction, tout en offrant une plate-forme facile à utiliser pour suivre la position de l'ISS_
