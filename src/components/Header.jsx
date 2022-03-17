import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Header.css";

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
  }

  return (
    <header>
      <h1>
        <button onClick={home}>webshop</button>
      </h1>
      <div>
        {/* knapp med emoji förstoringsglas */}
        {/* <input type="text" placeholder="Sök produkter" />
        <p>
          <button>
            {" "}
            <img
              src="src\components\resources\search-pngrepo-com.png"
              alt="search"
            />
          </button>
        </p> */}
        {/* emoji, figur */}
        <p>
          <button onClick={profile}>
            {" "}
            <img
              src="src\components\resources\user-profile-pngrepo-com.png"
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
              src="src\components\resources\shopping-cart-pngrepo-com.png"
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
