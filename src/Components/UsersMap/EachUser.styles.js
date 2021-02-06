import styled from 'styled-components'
import {device} from '../../Styles/Breakpoints/Breakpoints';


export const StyledEachUser = styled.div `
background: white;
margin: 10px;
border-radius: 10px;
-webkit-box-shadow: 3px 3px 5px 2px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
-moz-box-shadow:    3px 3px 5px 2px #ccc;  /* Firefox 3.5 - 3.6 */
box-shadow:         3px 3px 5px 2px #ccc;
.user_details {
    margin: 10px;
    
}
a {
    text-decoration: none !important;

    a:hover {
        text-decoration: none;
    }
}
margin: 10px 5px;
 h4 {
     font-size: 18px;
     font-weight: 500;
     color: black;
  
 }
 p {
     font-size: 13px;
     color: #ccc;

     color: grey;
 }

&:hover {
    
    transform: scale(1.1);
    transition-duration: 1s;

    @media ${device.TabletMd} {
        transform: none;
        background: inherit;
    }



}

`