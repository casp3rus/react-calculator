import React, { useState, useEffect } from 'react';
import { Button } from './Button'
import { Display } from './Display'
import './App.css';

function App() {

  const [displayText, setDisplayText] = useState('0')

  const keys = [
    "AC", "±", "%", "÷",
    "7", "8", '9', '×',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '•', '='
  ]

  // Add keyboard event listener 

  const handleKeyDown  = ({key}) => {

    console.log('Pressed key:', key, ', Is it a number?', /[0-9]/.test(key))

    const numberPressed = key => {
      if (/\d/.test(key)) {
        return key
      }
      return
    }

    switch(key) {
      case numberPressed(key):
        return setDisplayText(displayText + numberPressed(key))
      case 'Escape':
        return setDisplayText('0')
      case '%':
        return setDisplayText(displayText / 100)
      case '/':
        return setDisplayText(key + ' was pressed')
      case '*':
        return setDisplayText(key + ' was pressed')
      case '-':
        return setDisplayText(key + ' was pressed')
      case '+':
        return setDisplayText(key + ' was pressed')
      case '=':
      case 'Enter':
        return setDisplayText(key + ' was pressed')
      case '.':
        if (!displayText.includes('.')) {
          return setDisplayText(displayText + '.')
        }
        return 
      case 'Backspace':
          if (displayText.length > 1) {
            return setDisplayText(displayText.slice(0, -1))
          } else {
            return setDisplayText('0')
          }
      default:
        return setDisplayText(displayText)
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

    switch(value) {
      case 'AC':
        return setDisplayText('0')
      case '±':
        return setDisplayText((displayText * -1).toString()) 
      case '%':
        return setDisplayText(displayText / 100)
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
        if(!displayText.includes('.')) {
          return setDisplayText(displayText + '.')
        }
        return
      default:
        return setDisplayText(displayText + value)
    }
  }

  // Create buttons from each element in the keys array

  const button = keys.map(elem => <Button key={elem} onButtonClick={handleClick}>{elem}</Button>)

  return (
    <div className="app">
      <div className='display-container'>
        <Display>{displayText}</Display>
      </div>
      <div className='btns-container'>
        {button}
      </div>
    </div>
  );
}

export default App;
