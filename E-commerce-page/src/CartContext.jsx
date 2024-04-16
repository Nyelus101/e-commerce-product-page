// import React, { createContext, useContext, useState } from 'react';

// // Create a context
// const CartContext = createContext();

// // Create a provider component
// export const CartProvider = ({ children }) => {
//   const [figure, setFigure] = useState(0);

//   return (
//     <CartContext.Provider value={{ figure, setFigure }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook to use the cart context
// export const useCart = () => useContext(CartContext);

// export default CartContext;


import React, { createContext, useContext, useState } from 'react';

// Create a context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [figure, setFigure] = useState(0);

  return (
    <CartContext.Provider value={{ figure, setFigure }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);
