// App.jsx
import React from 'react';
import { GridProvider } from './GridContext'; // 使用 Provider 以提供上下文
import ParentContainer from './ParentContainer';

function App() {
  return (
    <GridProvider>
      <ParentContainer />
    </GridProvider>
  );
}

export default App;
