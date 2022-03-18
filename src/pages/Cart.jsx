import React from 'react'
import { productsState } from '../recoil/products/atom';
import { cartState } from '../recoil/cart/atom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cartStatus, removeItemSelector } from '../recoil/cart/selectors';
import Header from '../components/Header';


// Styling tack!

function Cart() {
    const products = useRecoilValue(productsState);
    const [cart, setCart] = useRecoilState(cartState);
    const { totalItems, totalPrice } = useRecoilValue(cartStatus);
    const removeItem = useSetRecoilState(removeItemSelector);

  return (
    <div>
        <Header />
    <h3>Varukorg</h3>
    {cart.map((product, index) => (
      <p>
        {product.title}
        {" "}
        <button onClick={() => removeItem(index)}>x</button>
      </p>
    ))}
    <p>Antal varor: {totalItems}</p>
    <p>Summa: {totalPrice}</p>
    <button>Gå till betalning</button>
  </div>
  )
}

export default Cart