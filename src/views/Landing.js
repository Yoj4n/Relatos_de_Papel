import React from "react";
import { useNavigate } from "react-router-dom"; 
import useLandingRedirect from "../hooks/landingHook"; 
import Loader from "../components/Loader";
import "../styles.css/Landing.css";

const LandingPage = () => {
  const navigate = useNavigate(); 
  useLandingRedirect(); 

  return (
    <div className="landing">
      <div className="landing__content">
        <h1 className="landing__title">Bienvenido a Relatos de Papel</h1>
        <p className="landing__subtitle">Donde las historias cobran vida.</p>
        <Loader />
        <br />
        <button className="landing__button" onClick={() => navigate("/books")}>
          Explorar
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
