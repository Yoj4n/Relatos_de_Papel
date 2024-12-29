import React from "react";
import { useCart } from "../hooks/CartContext";
import "../styles.css/Cart.css";

const CartItem = ({ book }) => {
  const { removeFromCart, addToCart } = useCart();

  return (
    <tr>
      <td>{book.title}</td>
      <td>${book.price}</td>
      <td>{book.quantity}</td>
      <td>${(book.price * book.quantity)}</td>
      <td>
        <button className="cart__remove-button" onClick={() => removeFromCart(book.id)}>
          -
        </button>
        <button className="cart__add-button" onClick={() => addToCart(book)} >
          +
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
