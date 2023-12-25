import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faTiktok
} from "@fortawesome/free-brands-svg-icons";
import "../styles/SmallNavbar.css";

export default function SmallNavbar() {
  return (
    <>
      <div className="shadow-sm">
        <div className="container d-flex align-items-center justify-content-between  py-2 ">
          <div>
            <ul className=" list-unstyled d-flex align-items-center m-0">
              <li className=" mx-3">
                <Link to="/" className="myLink text-black">
                  Home
                </Link>
              </li>
              <li className=" mx-3">
                <Link to="/about" className="myLink text-black">
                  About Us
                </Link>
              </li>
              <li className=" mx-3">
                <Link to="/contact" className="myLink text-black">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div>
              <ul className="list-unstyled d-flex align-items-center m-0">
                <li className="mx-2"><FontAwesomeIcon icon={faFacebook} className=" text-primary" /></li>
								<li className="mx-2"><FontAwesomeIcon icon={faYoutube} className=" text-danger"/></li>
								<li className="mx-2"><FontAwesomeIcon icon={faTwitter} className=" text-info"/></li>
								<li className="mx-2"><FontAwesomeIcon icon={faTiktok} className=" text-dark"/></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
