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
 
     background: rgb(190,174,238);
     background: radial-gradient(circle, rgba(190,174,238,1) 34%, rgba(148,187,233,1) 100%);
     font-size: 12px;
     overflow-wrap: break-word !important;
     padding: 5px 10px;
     width: 95%;
     margin: 2px 0px ;
     

     @media ${device.phone} {
     width: 85%;
    }

    img {
        display: none;
    }
   &:hover {
      img {
          display: block;
          float: right;
          height: 25px;
      }
   }

 }
 span {
     display: block;
     color: grey;
     font-size: 10px;
     padding: 5px;
 }
 

`