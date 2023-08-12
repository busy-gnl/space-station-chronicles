import React from "react";
import Carousel from "../carousel/Carousel";
import "./Construction.css";

export default function Construction() {
  const [modules, setModules] = React.useState([]);
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  React.useEffect(() => {
    fetch(`${backendURL}/iss-modules`)
      .then((res) => res.json())
      .then((data) => {
        setModules(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Carousel>
      {modules.map((module) => (
        <div key={module.id}>
          <div className="construction-carousel-container">
            <img
              className="construction-module-image"
              src={module.picture}
              alt="module ISS"
            />
            <div className="construction-module-description">
              <h3>{module.name}</h3>
              <p>{module.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
