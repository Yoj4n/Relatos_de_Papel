import React from "react";
import { useCart } from "../hooks/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { cart, clearCart } = useCart(); 
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (acc, book) => acc + book.price * book.quantity,0);

  const handlePayment = () => {
    alert("Pedido realizado con éxito.");
    clearCart(); 
    navigate("/"); 
  };

  return (
    <div className="checkout-form">
      <h2 className="checkout-form-title">
        Realizar Pago - Total: ${totalPrice.toFixed(2)}{" "}
      </h2>
      <p>Por favor, confirma tu pedido.</p>
      <button className="checkout-form__button" onClick={handlePayment}>
        Confirmar y Pagar
      </button>
    </div>
  );
};

export default CheckoutForm;
