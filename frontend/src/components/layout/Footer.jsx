import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-div-social-networks">
        Suivre l'ISS sur les réseaux sociaux :{" "}
        <span>
          <a href="https://www.facebook.com/ISS/">
            <img
              className="footer-logos"
              src="../../../public/images/logos/facebook.png"
              alt="logo facebook"
            />
          </a>
        </span>{" "}
        <span>
          <a href="https://www.instagram.com/iss/">
            <img
              className="footer-logos"
              src="../../../public/images/logos/instagram.png"
              alt="logo instagram"
            />
          </a>
        </span>{" "}
        <span>
          <a href="https://twitter.com/Space_Station">
            <img
              className="footer-logos"
              src="../../../public/images//logos/logo-twitter.png"
              alt="logo twitter"
            />
          </a>
        </span>{" "}
      </div>
      <div className="footer-div-wild">
        Made with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by{" "}
        <a className="footer-link-wild" href="https://www.wildcodeschool.com">
          Wild Code School
        </a>{" "}
        students
      </div>
    </footer>
  );
}
