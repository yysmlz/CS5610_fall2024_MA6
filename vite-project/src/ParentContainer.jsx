import React, { useContext } from 'react';
import { GridContext } from './GridContext';
import ChildCell from './ChildCell';

const ParentContainer = () => {
  const { onCount } = useContext(GridContext); 

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Count: {onCount}</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 100px)', 
        gap: '1px', 
        justifyContent: 'center' 
      }}>
        <ChildCell />
        <ChildCell />
        <ChildCell />
        <ChildCell />
      </div>
    </div>
  );
};

export default ParentContainer;
