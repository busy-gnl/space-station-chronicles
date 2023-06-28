import { GoogleMap, MarkerF, LoadScript } from "@react-google-maps/api"; // eslint-disable-line
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
  const googleMapsApiKey = import.meta.env.VITE_OPENAI_API_KEY;

  return (
    <div className="map-div">
      {window.google === undefined ? (
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
          <GoogleMap
            center={{ lat: points[0].lat, lng: points[0].lng }}
            zoom={5}
            mapContainerStyle={{ height: "800px", width: "100%" }}
          >
            <MarkerF
              position={{ lat: points[0].lat, lng: points[0].lng }}
              title="ISS"
            />
          </GoogleMap>
        </LoadScript>
      ) : (
        <GoogleMap
          center={{ lat: points[0].lat, lng: points[0].lng }}
          zoom={5}
          mapContainerStyle={{ height: "800px", width: "100%" }}
        >
          <MarkerF
            position={{ lat: points[0].lat, lng: points[0].lng }}
            title="ISS"
          />
        </GoogleMap>
      )}
    </div>
  );
}
