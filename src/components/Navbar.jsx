import { Link } from "react-router-dom";
import "../styles/Navbar.css";
export default function Navbar() {
  return (
    <>
      <div className=" container d-flex align-items-center justify-content-between my-3 ">
        <div className="myTitle myFont mx-4">
          JOB <span>CENTER</span>
        </div>

        <div className="myLinkGroup mx-4">
          <ul className=" list-unstyled d-flex align-items-center m-0">
            <li className="m-2">
              <Link to="/" className="myLink ">
                Home
              </Link>
            </li>
            <li>|</li>
            <li className="m-2">
              <Link to="/search" className="myLink ">
                Search
              </Link>
            </li>
            <li>|</li>
            <li className="m-2">
              <Link to="/contact" className="myLink ">
                Contact
              </Link>
            </li>
            <li>|</li>
            <li className="m-2">
              <Link to="/post-job" className="myLink myButton">
                Post-Job
              </Link>
            </li>
          </ul>
        </div>
        {/* Side Navbar */}
        <div
          className="mySlideNavbar sidebarWidth offcanvas offcanvas-start"
          id="offcanvas"
          data-bs-keyboard="false"
          data-bs-backdrop="false"
        >
          <div className="offcanvas-header">
            <p className="navbarLogo text-uppercase h3 m-0">
              Menu <span className="text-white">Bar</span>
            </p>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body px-0">
            <ul className="nav flex-column align-items-center" id="menu">
              <li className="nav-item my-2">
                <Link to="/" className="nav-link">
                  <span className="navbarFontweight text-white mySideFont">Home</span>
                </Link>
              </li>
              <li className="nav-item my-2">
                <Link to="/searchable" className="nav-link">
                  <span className="navbarFontweight text-white mySideFont">Search</span>
                </Link>
              </li>
              <li className="nav-item my-2">
                <Link to="/contact" className="nav-link">
                  <span className="navbarFontweight text-white mySideFont">Contact</span>
                </Link>
              </li>
              <li className="nav-item my-3">
                <Link
                  to="/post-job"
                  className="sideNavbarPostJobBtn navbarFontweight text-white nav-link mySideFont"
                >
                  Post job
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* {Toggle Navbar Hero icons} */}
        <div className="myToggleIcons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="myIconsDimension w-6 h-6"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvas"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
