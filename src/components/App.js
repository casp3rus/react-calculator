import React, { useState, useEffect } from 'react';
import { Button } from './Button'
import { Display } from './Display'
import './App.css';

function App() {

  const [display, setDisplay] = useState('123,456,789.0')

  const keys = [
    "AC", "±", "%", "÷",
    "7", "8", '9', '×',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '•', '='
  ]

  // Add keyboard event listener 

  const handleKeyDown  = ({key}) => {

    console.log('Pressed key:', key)

    switch(key) {
      case 'Escape':
        return setDisplay('0')
      case '%':
        return setDisplay(key + ' was pressed')
      case '/':
        return setDisplay(key + ' was pressed')
      case '*':
        return setDisplay(key + ' was pressed')
      case '-':
        return setDisplay(key + ' was pressed')
      case '+':
        return setDisplay(key + ' was pressed')
      case ('=' || 'Enter'):
        return setDisplay(key + ' was pressed')
      // case 'Enter':
      //   return setDisplay(key + ' was pressed')     
      default:
        return setDisplay(display)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  })

  // Add click handler

  const handleClick = (value) => () => {

    const displayValue = parseFloat(display)

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

  // Create buttons from each element in the keys array

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
