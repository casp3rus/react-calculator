import React, { useState } from 'react';
import { Button } from './Button'
import { Display } from './Display'
import './App.css';

function App() {

  const [display, setDisplay] = useState('0')

  const keys = [
    "AC", "±", "%", "÷",
    "7", "8", '9', '×',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '•', '='
  ]

  const handleClick = value => () => {
    let displayValue = parseFloat(display)
    switch(value) {
      case 'AC':
          return setDisplay('0')
      case '±':
          return setDisplay(displayValue * -1) 
      case '%':
          return setDisplay(displayValue / 100)
      case '÷':
          return 'operator-btn' 
      case '×':
          return 'operator-btn' 
      case '+':
          return 'operator-btn'
      case '-':
          return 'operator-btn'
      case '=':
          return 'operator-btn'
      case '•':
        return setDisplay(displayValue + '.')
      default:
          return setDisplay(displayValue + value)
    }
  }

  const button = keys.map(elem => <Button key={elem} onButtonClick={handleClick}>{elem}</Button>)

  
  return (
    <div className="app">
      <div className='display-container'>
        <Display>{display}</Display>
      </div>
      <div className='btns-container'>
        {button}
      </div>
    </div>
  );
}

export default App;
