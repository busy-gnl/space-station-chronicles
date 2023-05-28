import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Map from "../../pages/Map";
import Timeline from "../../pages/Timeline/Timeline";
import Chronicle from "../../pages/Chronicle";

export default function Header() {
  return (
    <Router>
      <div>
        <header>
          <img
            className="logo"
            src="../../public/images/logos/noun-international-space-station2-5408602.png"
            alt=""
          />

          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Map">Map</Link>
              </li>
              <li>
                <Link to="/Timeline">Timeline</Link>
              </li>
              <li>
                <Link to="/Chronicle">Chronicle</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Chronicle" element={<Chronicle />} />
          <Route path="/Timeline" element={<Timeline />} />
        </Routes>
      </div>
    </Router>
  );
}
