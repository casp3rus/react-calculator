import React, { useState, useEffect } from 'react';
import { Button } from './Button'
import { Display } from './Display'
import './App.css';

import { evaluate } from 'mathjs'

function App() {

  const [displayValue, setDisplayValue] = useState('0')
  const [prevNum, setPrevNum] = useState(null)
  const [operator, setOperator] = useState(null)

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
    console.log('Saved operator', operator)
    console.log('prevNum number:', prevNum, 'prevNum Type:', typeof(prevNum))
    console.log('displayValue', displayValue, 'displayValue Type:', typeof(displayValue) )
    const numberPressed = key => {
      if (/\d/.test(key)) {
        return key
      }
      return
    }

    switch(key) {
      case numberPressed(key):
        return setDisplayValue(displayValue + numberPressed(key))
      case 'Escape':
        setDisplayValue('0')
        setPrevNum(null)
        setOperator(null)
        return
      case '%':
        setDisplayValue(displayValue / 100)
        setPrevNum(null)
        setOperator(null)
        return 
      case '/':
        setPrevNum(displayValue)
        setOperator('/')
        setDisplayValue('0')
        return 
      case '*':
        setPrevNum(displayValue)
        setOperator('*')
        setDisplayValue('0')
        return 
      case '-':
        setPrevNum(displayValue)
        setOperator('-')
        setDisplayValue('0')
        return 
      case '+':
        setPrevNum(displayValue)
        setOperator('+')
        setDisplayValue('0')
        return 
      case '=':
      case 'Enter':
        if (operator) {
          return setDisplayValue(evaluate(`${prevNum} ${operator} ${displayValue}`))
        }
        setPrevNum(null)
        setOperator(null)
        return 
      case '.':
        if (!displayValue.includes('.')) {
          return setDisplayValue(displayValue + '.')
        }
        return 
      case 'Backspace':
        if (displayValue.length > 1) {
          return setDisplayValue(displayValue.slice(0, -1))
        } else {
          return setDisplayValue('0')
        }
      default:
        return setDisplayValue(displayValue)
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
        setPrevNum(null)
        setDisplayValue('0')
        return 
      case '±':
        setPrevNum(null)
        setDisplayValue((displayValue * -1).toString()) 
        return 
      case '%':
        setPrevNum(null)
        setDisplayValue(displayValue / 100)
        return 
      case '÷':
        setPrevNum(displayValue)
        setOperator('/')
        setDisplayValue('0')
        return
      case '×':
        setPrevNum(displayValue)
        setOperator('*')
        setDisplayValue('0')
        return
      case '+':
        setPrevNum(displayValue)
        setOperator('+')
        setDisplayValue('0')
        return
      case '-':
        setPrevNum(displayValue)
        setOperator('-')
        setDisplayValue('0')
        return
      case '=':
        if (operator) {
          setDisplayValue(evaluate(`${prevNum} ${operator} ${displayValue}`))
        }
        setPrevNum(null)
        setOperator(null)
        return 
      case '•':
        if(!displayValue.includes('.')) {
          return setDisplayValue(displayValue + '.')
        }
        return
      default:
        if (displayValue[0] === '0' && !displayValue.includes('.')) {
          return setDisplayValue(displayValue.slice(1) + value)
        } else {
          return setDisplayValue(displayValue + value)
        }
    }
  }

  // Create buttons from each element in the keys array

  const button = keys.map(elem => <Button key={elem} onButtonClick={handleClick}>{elem}</Button>)

  return (
    <div className="app">
      <div className='display-container'>
        <Display>{displayValue}</Display>
      </div>
      <div className='btns-container'>
        {button}
      </div>
    </div>
  );
}

export default App;
