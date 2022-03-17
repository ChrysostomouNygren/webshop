import React, { useState } from "react";
import { productsState } from "../recoil/products/atom";
import { cartState } from "../recoil/cart/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import Popup from "./Popup";
import "./css/ProductList.css";

// /////////////////////////////////////////////////
// react bootstrap popup module med product.description!
// /////////////////////////////////////////////////

// flytta handleAdd till +knappen
// css, grid
//

function ProductList() {
  const [modalShow, setModalShow] = useState(false);
  const products = useRecoilValue(productsState);
  const [cart, setCart] = useRecoilState(cartState);

  function handleAdd(product) {
    const newCart = [...cart, product];
    setCart(newCart);
  }
  return (
    <div className="product-list">
      {products.map((product) => (
        <span className="product">
          <img
            src={product.img}
            alt={product.title}
            onClick={() => setModalShow(true)}
          />
          <div>
            <span>
              <h4>{product.title}</h4>
              <h4>{product.price}:-</h4>
            </span>
              <img className="button" key={product.id} onClick={() => handleAdd(product)} src="src\components\resources\add-tool-pngrepo-com.png" alt="add" />
          </div>
          <Popup show={modalShow} onHide={() => setModalShow(false)} />
        </span>
      ))}
    </div>
  );
}

export default ProductList;
