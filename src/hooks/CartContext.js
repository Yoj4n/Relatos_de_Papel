import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart((prevCart) => {
      const bookExists = prevCart.some((item) => item.id === book.id);
      if (bookExists) {
        return prevCart.map((item) => {
          if (item.id === book.id) {
            return {
              id: item.id,
              title: item.title,
              author: item.author,
              price: item.price,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });
      } else {
        return prevCart.concat({
          id: book.id,
          title: book.title,
          author: book.author,
          price: book.price,
          quantity: 1,
        });
      }
    });
  };
  

  const removeFromCart = (bookId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === bookId) {
          return { id: item.id, title: item.title, price: item.price, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
  
      return updatedCart.filter((item) => item.quantity > 0);
    });
  };
  

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
