import React from "react";
import "../styles.css/ConfirmationModal.css";

const ConfirmationModal = ({ show, onConfirm, onCancel, bookTitle }) => {
  if (!show) return null; 

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <h2 className="modal-title">¡Estas a punto de añadir un libro!</h2>
        <p className="modal-confirmation">¿Estás seguro que deseas llevar el libro {""} 
          <span className="modal-confirmation-title">{bookTitle}</span> al carrito?
        </p>
        <div className="modal-actions">
          <button className="modal-button modal-confirm" onClick={onConfirm}>
            Confirmar
          </button>
          <button className="modal-button modal-cancel" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
