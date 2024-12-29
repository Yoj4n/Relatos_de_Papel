// src/components/SuccessModal.js
import React from "react";
import "../styles.css/SuccessModal.css";
import useSuccessModalEffect from "../hooks/SuccessModalEffect";

const SuccessModal = ({ show, onClose }) => {
  useSuccessModalEffect(show, onClose);

  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-container success-modal">
        <img
          src="https://media.tenor.com/0cvxil96K7YAAAAj/check.gif"
          alt="Éxito"
          className="success-icon"
        />
        <p>Libro añadido al carrito con éxito.</p>
      </div>
    </div>
  );
};

export default SuccessModal;
