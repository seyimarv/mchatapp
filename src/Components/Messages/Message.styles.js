import styled from 'styled-components'
import {device} from '../../Styles/Breakpoints/Breakpoints';


export const StyledMessage = styled.div `
max-width: 80%;


 margin: 10px;
 ${'' /* width: 85%; */}
display: flex;
 


 img {
     height: 50px;
     width: 50px;
     border-radius: 50%;
     padding: 2px;
 }
 p {
    border-radius: 10px;
    background: #ccc; 
     font-size: 15px;
     color: whitesmoke;
     overflow-wrap: break-word !important;
     padding: 10px 10px;
     width: 90%;
     margin: 10px;

     @media ${device.phone} {
     width: 80%;
    }


 }
 

`