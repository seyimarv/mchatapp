import styled from 'styled-components'
import {device} from '../../Styles/Breakpoints/Breakpoints';


export const StyledSearchBar = styled.div `
 .searchInput {  
     display: flex;
     background-color: whitesmoke;
     border-radius: 20px;
     padding: 5px 10px;
     margin: 5px 40px;
     height: 45px;

    
     @media ${device.phone}{
         margin: 0px;
     }
     ${'' /* @media ${device.TabletMd}{
         width: 100%;
     } */}
     .searchIcon {
         color: grey;
         margin-top: 5px !important;
       
     }
     ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color:rgb(240, 230, 230) !important;
        opacity: 0.5; /* Firefox */
      }
      
     input {
         border: none;
         background-color: whitesmoke;
         width: 100%;
         outline: none !important;
         color: grey !important;
         margin: 0px 10px;

         
     }
 }


`