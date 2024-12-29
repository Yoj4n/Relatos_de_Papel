import React from "react";
import Header from "../components/Title"; 
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import ConfirmationModal from "../components/ConfirmationModal";
import SuccessModal from "../components/SuccessModal";
import "../styles.css/BookList.css";
import { mockBooks } from "../BooksData/books";
import { useCart } from "../hooks/CartContext";
import useBooksListState from "../hooks/useBooksListState";

const BooksList = () => {
  const {
    searchTerm, setSearchTerm, showConfirmModal, showSuccessModal,
    selectedBook, handleAddToCartClick, handleConfirmAddToCart, 
    handleCancelAddToCart,handleCloseSuccessModal,
  } = useBooksListState();

  const { addToCart } = useCart();
  const filteredBooks = mockBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="books-list">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <table className="books-list__table">
        <thead>
          <tr>
            <th>Catálogo de Libros</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="books-list__cards">
                {filteredBooks.map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    addToCart={() => handleAddToCartClick(book)}
                  />
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <ConfirmationModal
        show={showConfirmModal}
        onConfirm={() => handleConfirmAddToCart(addToCart)}
        onCancel={handleCancelAddToCart}
        bookTitle={selectedBook?.title}
      />
      <SuccessModal show={showSuccessModal} onClose={handleCloseSuccessModal} />
    </div>
  );
};

export default BooksList;
