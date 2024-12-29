import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/CartContext";
import "../styles.css/Navbar.css";
import DesplegableCart from "./DesplegableCart";

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, book) => acc + book.quantity, 0);

  const [isAnimating, setIsAnimating] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [totalItems]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Relatos de Papel
        </Link>
        <button className="navbar-toggler" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          &#9776;
        </button>
        <div className={`navbar-links ${isMenuOpen ? "navbar-links-open" : ""}`}
        >
          <Link to="/books" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
            Libros
          </Link>
          <Link to="/checkout" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
            Carrito{" "}
            <span className={`cart-badge ${isAnimating ? "animate" : ""}`}>
              {totalItems}
            </span>
          </Link>
        </div>
      </div>
      <DesplegableCart />
    </nav>
  );
};

export default Navbar;

