import Aos from "aos";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LANGUAGE } from "../constants/constant";
import { getLanguage, getText } from "../locale";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [burger, setBurger] = useState(false);
  const location = useLocation();
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 2500,
    });
  }, []);
  const changeLanguage = (e) => {
    localStorage.setItem(LANGUAGE, e.target.value);
    document.location.reload(true);
  };
  const changeNavbar = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);
  return (
    <>
      <div
        className={`Navbar ${navbar ? "active" : ""} ${
          burger ? "activee" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <Link to="/" className="col-6 d-lg-none  d-flex align-items-center">
              <img src="/logo.svg" alt="" className="nav_logo" />
            </Link>
            <div
              className={`col-10 d-flex align-items-center nav_a_box ${
                burger ? "active" : ""
              }`}
            >
              <Link to="/">
                <img src="logo.svg" alt="" className="nav_logo" />
              </Link>
              <Link
                onClick={() => setBurger(!burger)}
                to="/works"
                className={`nav_a ${location.pathname === "/" ? "active" : ""}`}
              >
                {getText("Works")}
              </Link>
              <Link
                onClick={() => setBurger(!burger)}
                to="/about-us"
                className={`nav_a ${
                  location.pathname === "/offers" ? "active" : ""
                }`}
              >
                {getText("About us")}
              </Link>
              <Link
                onClick={() => setBurger(!burger)}
                to="/contact"
                className={`nav_a ${
                  location.pathname === "/visa" ? "active" : ""
                }`}
              >
                {getText("Contact")}
              </Link>
              <div className="lang_box d-lg-none d-flex">
                <select
                  onChange={changeLanguage}
                  className="lang_text"
                  name=""
                  id=""
                >
                  <option selected={getLanguage() === "uz"} value="uz">
                    Uz
                  </option>
                  <option selected={getLanguage() === "ru"} value="ru">
                    Ру
                  </option>
                  <option selected={getLanguage() === "en"} value="en">
                    En
                  </option>
                </select>
              </div>
            </div>
            <div className="col-2 d-lg-flex align-items-center justify-content-end d-none">
              <div className="lang_box">
                <select
                  onChange={changeLanguage}
                  className="lang_text"
                  name=""
                  id=""
                >
                  <option selected={getLanguage() === "en"} value="en">
                    En
                  </option>
                  <option selected={getLanguage() === "uz"} value="uz">
                    Uz
                  </option>
                  <option selected={getLanguage() === "ru"} value="ru">
                    Ру
                  </option>
                </select>
              </div>
            </div>
            <div
              onClick={() => setBurger(!burger)}
              className={`burger pr-4 ml-auto d-flex d-lg-none ${
                burger ? "burgered" : ""
              }`}
            >
              <div className="burger_up "></div>
              <div className="burger_down"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </>
  );
};

export default Navbar;
