import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContextProvider";

export default function Header() {
  const { isLogged, setIsLogged } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = (event) => {
    if (
      event.type === "keydown" &&
      event.key !== "Enter" &&
      event.key !== " "
    ) {
      return;
    }
    localStorage.clear();
    setIsLogged(false);
  };
  return (
    <div>
      <header>
        <img
          className="logo"
          src="../../images/logos/noun-international-space-station2-5408602.png"
          alt=""
        />
        <nav className={isMenuOpen ? "nav-open" : "nav-close"}>
          <ul>
            <li className="navline">
              <Link className="navlink" to="/">
                Home
              </Link>
            </li>
            <li className="navline">
              <Link className="navlink" to="/map">
                Map
              </Link>
            </li>
            <li className="navline">
              <Link className="navlink" to="/timeline">
                Timeline
              </Link>
            </li>
            <li className="navline">
              <Link className="navlink" to="/chronicles">
                Chronicles
              </Link>
            </li>
            <li className="navlink-end-container">
              <ul>
                <li className="navline">
                  <Link className="navlink" to="/shop">
                    Shop
                  </Link>
                </li>
                <li className="navline">
                  <Link className="navlink" to="/cart">
                    Cart
                  </Link>
                </li>
                {isLogged && (
                  <li className="navline">
                    <button
                      type="button"
                      className="navlink-button navlink"
                      onClick={handleLogout}
                      onKeyDown={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                )}
                {!isLogged && (
                  <li className="navline">
                    <Link className="navlink" to="/auth">
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </li>
          </ul>
        </nav>
        <h3 id="website-name" className={isMenuOpen ? "d-none" : "d-block"}>
          Space Station Chronicles
        </h3>
        <button
          type="button"
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </header>
    </div>
  );
}
