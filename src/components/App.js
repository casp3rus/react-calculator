import React from 'react';
import { Button } from './Button'
import { Display } from './Display'
import './App.css';

function App() {

  const keys = [
    "AC", "±", "%", "÷",
    "7", "8", '9', '×',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
]

const button = keys.map(elem => <Button key={elem}>{elem}</Button>)

  
  return (
    <div className="app">
      <div className='display-container'>
        <Display />
      </div>
      <div className='btns-container'>
        {button}
      </div>
    </div>
  );
}

export default App;
