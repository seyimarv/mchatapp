import styled from 'styled-components'
import {device} from '../../Styles/Breakpoints/Breakpoints';


export const StyledChatView = styled.div `
background: whitesmoke;
border-radius: 10px;
overflow: hidden;
@media only screen 
  and (min-device-width: 1024px)  {
    margin-top: -25px;
  }

.go_back_icon {
    @media only screen 
  and (min-device-width: 1024px) {
      display: none;
  }
}

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
      margin: 10px 0px;
      z-index: 100; 
      position: sticky;
      bottom: 10px;
      width: 100%;
  }
.chat_view_header {
   
    ${'' /* border-bottom: 1px solid white; */}
    position: sticky-top;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    h2 {
           font-size: 20px;
           color: black;
           font-weight: 400;
    }
    @media only screen 
  and (min-device-width: 1024px)  {
    background-color: #ccc;
  }

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
  ${'' /* -webkit-box-shadow: 0px -4px 6px  #ccc;
  -moz-box-shadow: 0px -4px 6px  #ccc;
  box-shadow: 0px -4px 6px #ccc; */}
  background-color: white;

 display: block;
 padding-bottom: 20px;
 height: 70vh;
 overflow-y: scroll;
 overflow-x: hidden;


 @media ${device.TabletMd} {
     height: 85vh;
     border-top-right-radius: 30px;
 border-top-left-radius: 30px;
    }

   
::-webkit-scrollbar {
    width: 5px;
  }
  
 
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgb(65, 63, 63);
    border-radius: 5px;
  }
  

  ::-webkit-scrollbar-thumb {
    background: rgb(190,174,238);
      background: radial-gradient(circle, 
      rgba(190,174,238,1) 34%, rgba(148,187,233,1) 100%);
    border-radius: 10px;
  }

    
}


`