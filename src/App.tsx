import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Calander } from './features/Clander/Calander';
import { Schdeule } from './features/Schedule/Schdeule';

function App() {
  return (
    <div>
      <header>
        <Calander></Calander>
        <Schdeule></Schdeule>
      </header>
    </div>
  );
}

export default App;
