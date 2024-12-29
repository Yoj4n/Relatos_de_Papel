import React from "react";
import "../styles.css/Title.css";

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://clipart-library.com/images/di9rnepxT.gif" 
        alt="Logo"
        className="header__image"
      />
      <h1 className="header__title">RELATOS DE PAPEL</h1>
    </div>
  );
};

export default Header;