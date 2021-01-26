import React from 'react'
import { StyledButton } from './Custom-Button.styles'



const CustomButton = ({children, ...other}) => {
return (
  <StyledButton {...other}>
    {children}
  </StyledButton>
)
}


export default CustomButton;