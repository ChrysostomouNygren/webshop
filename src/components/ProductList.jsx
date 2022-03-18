import React, { useState } from "react";
import { productsState } from "../recoil/products/atom";
import { cartState } from "../recoil/cart/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import Popup from "./Popup";
import "./css/ProductList.css";

import { idState } from "../recoil/id/atom";

// /////////////////////////////////////////////////
// react bootstrap popup module med product.description!
// /////////////////////////////////////////////////

function ProductList() {
  const [modalShow, setModalShow] = useState(false);
  const products = useRecoilValue(productsState);
  const [cart, setCart] = useRecoilState(cartState);
  const [currentPopup, setCurrentPopup] = useRecoilState(idState);

  function handleAdd(product) {
    const newCart = [...cart, product];
    setCart(newCart);
  }

  return (
    <div className="product-list">
      <Popup show={modalShow} onHide={() => setModalShow(false)} />
      {products.map((product) => (
        <span className="product" key={product.id}>
          <img

            onClick={() => [setModalShow(true), setCurrentPopup(product)]}
            src={product.img}
            alt={product.title}
            value={product.id}
          />
          <div>
            <span>
              <h4>{product.title}</h4>
              <h4>{product.price}:-</h4>
            </span>
            <img
              className="button"
              key={product.id}
              onClick={() => handleAdd(product)}
              src="src\components\resources\add-tool-pngrepo-com.png"
              alt="add"
            />
          </div>
        </span>
      ))}
    </div>
  );
}

export default ProductList;
