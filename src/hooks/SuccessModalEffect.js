import { useEffect } from "react";

const useSuccessModalEffect = (show, onClose) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose(); 
      }, 1500);
      return () => clearTimeout(timer); 
    }
  }, [show, onClose]);
};

export default useSuccessModalEffect;
