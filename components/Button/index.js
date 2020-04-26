import React from 'react'
import { createComponent } from 'react-fela'

const styledButton = ({darkTheme}) => ({
    display: 'block',
    textAlign: 'center',
    color: darkTheme ? 'white':'black',
    backgroundColor: darkTheme ? 'black' : 'white',
    padding: '10px 20px',
    font: '14px/20px Overpass, sans-serif',
    border: darkTheme ? 'none' : '1px solid black',
    borderRadius: '1px',
    marginTop: '20px',
    ':hover': {
        cursor:'pointer',
        border: darkTheme ? 'none' : '1px solid #adacac',
        backgroundColor: darkTheme ? '#454545' : '#fafafa'
    },
    ':disabled': {
        backgroundColor: '#e4e4e4',
        ':hover': {
            cursor: 'default',
            backgroundColor: '#e4e4e4'
        }
    },
    ':focus': {
        outline:'none'
    }
})

const StyledButton = createComponent(styledButton, 'button', ['onClick', 'href', 'disabled'])


const Button = ({ onClick, buttonText, darkTheme = true, disabled = false}) => {
    return (
        <StyledButton onClick={onClick} darkTheme={darkTheme} disabled={disabled}>
            {buttonText}
        </StyledButton>
    )
}

export default Button