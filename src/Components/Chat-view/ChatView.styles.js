import styled from 'styled-components'
import {device} from '../../Styles/Breakpoints/Breakpoints';


export const StyledChatView = styled.div `
background-color: #87ceeb;
border-radius: 10px;



@media ${device.TabletMd} {
     height: 100vh;
     width: 100%;
    }
@media ${device.phone} {
     border-radius: 0px;
     height: 100vh;
    }

img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 10px;
}

  .bottom {
      margin: 10px 5px;
      z-index: 100; 
      position: sticky;
      bottom: 10px;
  }
.chat_view_header {
    background-color:#696969;
    ${'' /* border-bottom: 1px solid white; */}
    position: sticky-top;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;


    @media ${device.phone} {
     border-radius: 0px;
    }

}
.user_name {
    font-size: 15px;
    margin: 15px 2px;
    color: whitesmoke;
    font-weight: 600;

}
.name {
    font-size: 12px;
    color: grey;
    margin: 0px;
}
.chat_body {
 ${'' /* padding-bottom: 100%; */}
 display: block;
 ${'' /* padding-bottom: 20px; */}
 height: 70vh;
 overflow-y: scroll;
 overflow-x: hidden;


 @media ${device.TabletMd} {
     height: 85vh;
    }

   
::-webkit-scrollbar {
    width: 5px;
  }
  
 
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgb(65, 63, 63);
    border-radius: 5px;
  }
  

  ::-webkit-scrollbar-thumb {
    background: rgb(89, 172, 82);
    border-radius: 10px;
  }

    
}


`