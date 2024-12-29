import React from "react";
import { useParams } from "react-router-dom";
import { mockBooks } from "../BooksData/books";
import '../styles.css/BookDetail.css';
import { useCart } from "../hooks/CartContext";

const BookDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const book = mockBooks.find((b) => b.id === parseInt(id));

  if (!book) {
    return <p>Libro no encontrado.</p>;
  }

  return (
    <div className="book-details">
      <h1 className="book-details__title">{book.title}</h1>
      <p className="book-details__author">Autor: {book.author}</p>
      <p className="book-details__description">Descripción: {book.description}</p>
      <p className="book-details__price">Precio: ${book.price}</p>
      <button className="book-details__button" onClick={() => addToCart(book)}>
        Añadir al carrito
      </button>
    </div>
  );
};

export default BookDetails;
