import React from "react";
import { useCart } from "../hooks/CartContext";
import CartItem from "../components/CartItem";
import "../styles.css/Cart.css";
import { useNavigate } from "react-router-dom"; 

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return <p className="cart-empty">El carrito está vacío.</p>;
  }

  const totalPrice = cart.reduce((acc, book) => acc + book.price * book.quantity, 0);

  const handleCheckout = () => {
    navigate("/payment"); 
  };

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      <table className="cart__table">
        <thead>
          <tr>
            <th>Libro</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((book) => (
            <CartItem key={book.id} book={book} />
          ))}
        </tbody>
      </table>
      <div className="cart__total">
        <strong>Total: </strong>${totalPrice.toFixed(2)}
        
        
      </div><button className="cart__checkout-button" onClick={handleCheckout}>
        Pagar
      </button>
      
    </div>
  );
};

export default Cart;
