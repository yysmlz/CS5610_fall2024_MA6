import React, { createContext, useState } from 'react';

export const GridContext = createContext();

export const GridProvider = ({ children }) => {
  const [onCount, setOnCount] = useState(0); 

  const toggleCount = (isOn) => {
    setOnCount(prevCount => (isOn ? prevCount + 1 : prevCount - 1));
  };

  return (
    <GridContext.Provider value={{ onCount, toggleCount }}>
      {children}
    </GridContext.Provider>
  );
};
