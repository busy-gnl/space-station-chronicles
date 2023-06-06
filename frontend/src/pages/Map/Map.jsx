/* eslint-disable */
import ApiMap from "@components/ApiMap/ApiMap";
import { useState, useMemo } from "react";
import MapContext from "../../contexts/MapContext";

export default function Map() {
  const [coords, setCorrds] = useState({
    latitude: 11,
    longitude: 14,
  });

  function getIssPosition() {
    fetch("http://api.open-notify.org/iss-now.json")
      .then((response) => response.json())
      .then((data) => {
        setCorrds({
          latitude: Number(data.iss_position.latitude),
          longitude: Number(data.iss_position.longitude),
        });
      })
      .catch((err) => console.error(err));
  }

  useMemo(() => {
    const interval = setInterval(getIssPosition, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="map-container">
      <MapContext.Provider value={{ coords }}>
        <ApiMap />
      </MapContext.Provider>
    </div>
  );
}
