
import React from 'react';
import { Link } from "react-router-dom";
import '../styles.css/BookCard.css';

const BookCard = ({ book, addToCart }) => (
  <div className="book-card">
    <h3 className="book-card__title">{book.title}</h3>
    <p className="book-card__author">{book.author}</p>
    <div className="book-card__buttons">
      <button className="book-card__button" onClick={() => addToCart(book)}>
        Comprar
      </button>
      <Link to={`/books/${book.id}`} className="book-card__details-link">
        + Info
      </Link>
    </div>
  </div>
);

export default BookCard;
