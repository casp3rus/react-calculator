import React from 'react'
import './Button.css'

const keyType = val => {
    switch(val) {
        case 'AC':
            return 'function-btn' 
        case '±':
            return 'function-btn' 
        case '%':
            return 'function-btn'
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
        case '0':
            return 'zero-btn'
        default:
            return null
    }
}

export const Button = props => {
    return (
        <div
            className={`button-wrapper ${keyType(props.children)}`}
        >
            {props.children}
        </div>
    )
}