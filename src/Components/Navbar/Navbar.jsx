import React, { useState } from "react";
import "./Navbar.css";
import "./Rnav.css";
import { MdLocalShipping } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { FiLogIn } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";
import logo from "../../assets/image/logo.webp";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Navbar = ({ search, setSearch, searchProduct }) => {
  const [click, setClick] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <>
      <div className="header">
        <div className="top_header">
          <div className="icon">
            <MdLocalShipping />
          </div>
          <div className="info">
            <p>Free Shipping When Shopping Upto $1000</p>
          </div>
        </div>
        <div className="mid_header">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="search_box">
            <input
              type="text"
              value={search}
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={searchProduct}>
              <GoSearch />
            </button>
          </div>

          {isAuthenticated ? (
            <div className="user">
              <div className="icon">
                <CiLogout />
              </div>
              <div className="btn">
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="user">
              <div className="icon">
                <FiLogIn />
              </div>
              <div className="btn">
                <button onClick={() => loginWithRedirect()}>Login</button>
              </div>
            </div>
          )}
        </div>

        <div className="last_header">
          <div className="user_profile">
            {isAuthenticated ? (
              <div className="info">
                <div>
                  <img src={user.picture} alt={user.name} />
                </div>
                <div className="h1">
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              </div>
            ) : (
              <div className="icon">
                <div>
                  <FaCircleUser className="user_icon" />
                </div>
                <div>
                  <p onClick={() => loginWithRedirect()}>
                    Click Here To Login!
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="nav">
            <ul
              className={click ? "mobile-nav" : "nav"}
              onClick={() => {
                setClick(false);
              }}
            >
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/cart" className="link">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
            <button
              className="toggle"
              onClick={() => {
                setClick(!click);
              }}
            >
              {click ? <FaBars /> : <IoMdClose />}
            </button>
          </div>
          <div className="offer">
            <p>Flat 10% over all iphone</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
