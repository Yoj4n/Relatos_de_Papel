import React from "react";
import { useCart } from "../hooks/CartContext";
import useDesplegableCart from "../hooks/useDesplegableCart";
import "../styles.css/DesplegableCart.css";

const DesplegableCart = () => {
  const { cart } = useCart(); 
  const isDropdownVisible = useDesplegableCart(cart); 

  return (
    <div className="desplegable-cart">
      {isDropdownVisible && cart.length > 0 && ( 
        <div className="cart-dropdown">
          <h3>Tu Carrito</h3>
          <ul className="cart-items-list">
            {cart.map((book) => (
              <li key={book.id} className="cart-item">
                <div>
                  <strong>{book.title}</strong>
                  <p>Autor: {book.author}</p>
                  <p>Cantidad: {book.quantity}</p>
                  <p>Precio unitario: ${book.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DesplegableCart;
