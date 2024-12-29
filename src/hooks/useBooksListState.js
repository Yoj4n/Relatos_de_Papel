import { useState } from "react";

const useBooksListState = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleAddToCartClick = (book) => {
    setSelectedBook(book);
    setShowConfirmModal(true);
  };

  const handleConfirmAddToCart = (addToCart) => {
    if (selectedBook) {
      addToCart(selectedBook);
      setShowSuccessModal(true);
    }
    setShowConfirmModal(false);
    setSelectedBook(null);
  };

  const handleCancelAddToCart = () => {
    setShowConfirmModal(false);
    setSelectedBook(null);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return {
    searchTerm, setSearchTerm, showConfirmModal, setShowConfirmModal,
    showSuccessModal, setShowSuccessModal, selectedBook, setSelectedBook,
    handleAddToCartClick,handleConfirmAddToCart,
    handleCancelAddToCart, handleCloseSuccessModal,
  };
};

export default useBooksListState;
