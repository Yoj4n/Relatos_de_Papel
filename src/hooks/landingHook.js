
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useLandingRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/books");
    }, 5000); 
    return () => clearTimeout(timer); 
  }, [navigate]);
};

export default useLandingRedirect;
