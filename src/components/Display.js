import React from 'react'
import './Display.css'

export const Display = (props) => {
    return (
        <div className='display-text'>
            {props.children}
        </div>
    )
}