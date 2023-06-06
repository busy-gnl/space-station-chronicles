import GoogleMapReact from "google-map-react";
import { useContext } from "react";
import MapContext from "../../contexts/MapContext";

export default function ApiMap() {
  const { coords } = useContext(MapContext);
  const points = [
    {
      id: 1,
      title: "ISS",
      lat: coords.latitude,
      lng: coords.longitude,
    },
  ];

  const getInfoWindowString = (place) => `
    <div>
      <div style="font-size: 16px;">
       id: ${place.id}
      </div>
      <div style="font-size: 14px;">
        <span style="color: grey;">
        title :${place.title}
        </span>
     
      </div>
     
    </div>`;

  const renderMarkers = (map, maps, point) => {
    const markers = [];
    const infowindows = [];
    point.forEach((place) => {
      markers.push(
        new maps.Marker({
          position: {
            lat: place.lat,
            lng: place.lng,
          },
          map,
        })
      );

      infowindows.push(
        new maps.InfoWindow({
          content: getInfoWindowString(place),
        })
      );
    });

    markers.forEach((marker, i) => {
      marker.addListener("click", () => {
        infowindows[i].open(map, marker);
      });
    });
  };

  return (
    <div style={{ height: "800px", width: "800px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyD9zRA6EHLpoSgkAzsNyqluYh0mHDhA8fo",
        }}
        center={{ lat: points[0].lat, lng: points[0].lng }}
        defaultZoom={12}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps, points)}
      />
    </div>
  );
}
