import styled from 'styled-components' 
import {Navbar} from 'react-bootstrap'
import {device} from '../../Styles/Breakpoints/Breakpoints';


export const Logo = styled(Navbar.Brand) `


@media screen and (min-width: 992px) {
  margin-top: -24px !important;
`
export const Links = styled.p `
  padding: 0px 80px;
  color: #000000;
  font-size: 18px !important;

  
  @media ${device.phoneLg} {
     padding: 5px;
    
    }
`
export const S = styled.span `
  color: white;
  background: black;
  padding-left: 2px;
  padding-right: 2px

`

