import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Map from "../../pages/Map/Map";
import Timeline from "../../pages/Timeline/Timeline";
import Chronicles from "../../pages/Chronicles/Chronicles";

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
                <Link className="navlink" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="navlink" to="/map">
                  Map
                </Link>
              </li>
              <li>
                <Link className="navlink" to="/timeline">
                  Timeline
                </Link>
              </li>
              <li>
                <Link className="navlink" to="/chronicles">
                  Chronicles
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/chronicles" element={<Chronicles />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </div>
    </Router>
  );
}
