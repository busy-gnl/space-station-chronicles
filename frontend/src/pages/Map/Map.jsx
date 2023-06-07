/* eslint-disable */
import ApiMap from "@components/ApiMap/ApiMap";
import { useState, useMemo } from "react";
import MapContext from "../../contexts/MapContext";
import "./Map.css";

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
      <h1>Map</h1>
      <h2>International Space Station Localiation</h2>
      <section className="map-live-section">
        <div className="map-panel-info">
          <p>Latitude : {coords.latitude}</p>
          <p>Longitude : {coords.longitude}</p>
        </div>
        <MapContext.Provider value={{ coords }}>
          <ApiMap />
        </MapContext.Provider>

        <iframe
          className="map-live-video"
          src="https://www.youtube.com/embed/86YLFOog4GM?autoplay=1&mute=1"
          title="Live from ISS"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </div>
  );
}
