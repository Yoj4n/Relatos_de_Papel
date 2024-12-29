import { useState, useEffect } from "react";

const useDesplegableCart = (cart) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    if (cart.length >= 1) {
      setIsDropdownVisible(true);
      const timer = setTimeout(() => setIsDropdownVisible(false), 3000);
      return () => clearTimeout(timer);
    } else {
      setIsDropdownVisible(false);
    }
  }, [cart]);

  return isDropdownVisible;
};

export default useDesplegableCart;
