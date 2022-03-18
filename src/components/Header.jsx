import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Header.css";
import shoppingcart from "./resources/shopping-cart-pngrepo-com.png";
import profileSite from "./resources/user-profile-pngrepo-com.png";

function Header() {
  let navigate = useNavigate();

  const home = () => {
    let path = `/`;
    navigate(path);
  };
  const cart = () => {
    let path = `/cart`;
    navigate(path);
  };
  const profile = () => {
    let path = `/profile`;
    navigate(path);
  };

  return (
    <header>
      <h1>
        <button onClick={home}>webshop</button>
      </h1>
      <div>
        <p>
          <button onClick={profile}>
            {" "}
            <img
              src={profileSite}
              alt="profile"
            />{" "}
            kundsida
          </button>
        </p>
        {/* emoji, varukorg */}
        <p>
          <button onClick={cart}>
            {" "}
            <img
              src={shoppingcart}
              alt="cart"
            />{" "}
            varukorg
          </button>
        </p>
      </div>
    </header>
  );
}

export default Header;
