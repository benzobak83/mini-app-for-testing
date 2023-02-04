import React, {  FC } from "react"
import { ButtonProps } from "./Button.types"

import './Button.scss'

const Button:FC<ButtonProps> = ({children, ...props}) => {
    return (
        <button
        {...props}
        className={`btn ${props.className? props.className : ''}`}
        >
            {children}
        </button>
    )
}


export {Button}
