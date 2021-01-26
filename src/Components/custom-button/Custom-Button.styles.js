import styled from 'styled-components'
import {Button} from 'react-bootstrap'



export const StyledButton = styled(Button)`
background-color: ${props => props.background};
color: ${props => props.color};
border: 1px solid ${props => props.hover};
padding: 10px 30px;
border-radius: 20px;
box-shadow: ${props => props.boxshadow ?  '3px 3px 3px 3px #ccc' : null}


`