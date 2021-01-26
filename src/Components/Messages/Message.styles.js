import styled from 'styled-components'
import {device} from '../../Styles/Breakpoints/Breakpoints';


export const StyledMessage = styled.div `
max-width: 80%;


 margin: 10px;
 ${'' /* width: 85%; */}
display: flex;
 


 img {
     height: 30px;
     width: 30px;
     border-radius: 50%;
     padding: 2px;
 }
 p {
    border-radius: 10px;
    background: #ccc; 
     font-size: 15px;
     color: whitesmoke;
     overflow-wrap: break-word !important;
     padding: 5px 10px;
     width: 95%;
     margin: 2px 2px ;

     @media ${device.phone} {
     width: 85%;
    }


 }
 span {
     display: block;
     color: grey;
     font-size: 10px;
     padding: 5px;
 }
 

`