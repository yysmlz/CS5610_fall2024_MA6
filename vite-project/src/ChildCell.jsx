import React, { useState, useContext } from 'react';
import { GridContext } from './GridContext'; 

const ChildCell = () => {
  const [isOn, setIsOn] = useState(false);
  const { toggleCount } = useContext(GridContext); 

  const handleToggle = () => {
    setIsOn(!isOn); 
    toggleCount(!isOn); 
  };

  return (
    <div
      onClick={handleToggle}
      style={{
        width: '100px',
        height: '100px',
        border: '1px solid grey',
        backgroundColor: isOn ? 'black' : 'white',
        display: 'inline-block',
        margin: '0'
      }}
    ></div>
  );
};

export default ChildCell;
