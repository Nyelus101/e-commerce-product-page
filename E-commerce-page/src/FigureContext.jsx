// import React, { createContext, useState, useContext } from 'react';
// const FigureContext = createContext();
// export const FigureProvider = ({ children }) => {
//   const [figure, setFigure] = useState(0);
//   return (
//     <FigureContext.Provider value={{ figure, setFigure }}>
//       {children}
//     </FigureContext.Provider>
//   );
// };
// export const useFigure = () => {
//   const context = useContext(FigureContext);
//   if (!context) {
//     throw new Error('useFigure must be used within a FigureProvider');
//   }
//   return context;
// };

// Create a context
import React, { createContext, useContext, useState } from 'react';
const FigureContext = createContext();
export const useFigure = () => useContext(FigureContext);
export const FigureProvider = ({ children }) => {
  const [figure, setFigure] = useState(0);
  return (
    <FigureContext.Provider value={{ figure, setFigure }}>
      {children}
    </FigureContext.Provider>
  );
};
