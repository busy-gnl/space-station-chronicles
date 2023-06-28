// On initialise la latitude et la longitude de Paris (centre de la carte)
var lat = 45.7616;
var lon = 3.11931;
var zoom = 17;
var macarte = null;
// Fonction d'initialisation de la carte
function initMap() {
  // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
  macarte = L.map("map").setView([lat, lon], zoom);
  // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
  L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
    // Il est toujours bien de laisser le lien vers la source des données
    attribution:
      'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
    minZoom: 1,
    maxZoom: 20,
  }).addTo(macarte);
}
window.onload = function () {
  // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
  initMap();
};

//Api recup Longitude/Latitude
fetch("http://api.open-notify.org/iss-now.json")
  .then(response => response.json())
  .then(data => {console.log(data.message)
    console.log(data.iss_position)
  })
  .catch(err => console.error(err));

  fetch("http://api.open-notify.org/astros.json")
  .then(response => response.json())
  .then(data => {console.log(data.message)
    console.log(data.people[0])
  })
  .catch(err => console.error(err));


// function recupererDonnees() {
//     return fetch("https://tile.openstreetmap.org/{z}/{x}/{y}.png")
//       .then((response) => {
//         if (!response.ok) {
//           console.log("Resolve");
//           throw new Error("Erreur lors de la récupération des données");
//         }
//         return response.json();
//       })
//       .catch((error) => {
//         console.log("Reject");
//         console.error("Erreur lors de la récupération des données:", error);
//       });
//   }

//   recupererDonnees().then((toto) => {
//     console.log("Données récupérées avec succès:", toto);
//   });
