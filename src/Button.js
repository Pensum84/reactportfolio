import React from 'react';
import'./Button.css';

const STYLES = ['btn--primary','btn--outline']
const Sizes = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']
const COLOR = ['primary', 'blue', 'red', 'green']

export const Button = ({children, type, onclick, buttonStyle, buttonSize, buttonColor}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)

    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={onClick} type={type}>{children}</button>
    )
}
