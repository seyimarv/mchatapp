import styled from 'styled-components'
import {device} from '../../Styles/Breakpoints/Breakpoints';



export const StyledChatPage = styled.div `


.users_map {
   
        height: 90vh;
        overflow-y: scroll;
        border-radius: 15px;
        background: whitesmoke;
        @media only screen 
  and (min-device-width: 1024px)  {
    margin-top: -25px;
  }
      .navbar {
        @media only screen 
  and (min-device-width: 1024px)  {
      display: none;
  }
      }

        ::-webkit-scrollbar {
    width: 5px;
  }
  
 
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgb(65, 63, 63);
    border-radius: 5px;
  }
  

  ::-webkit-scrollbar-thumb {
    background: rgba(145, 61, 136, 0.4) ;
    border-radius: 10px;
  }

  @media ${device.phone} {
      height: 100vh;
      border-radius: 0px;
    }
    }



.chat_page {
    background-color: whitesmoke;
    height: 100vh;
    margin: 0px;

    @media ${device.phone} {
      display: none;
    }
    @media ${device.TabletMd} {
      display: none;
    }


 
}
${'' /* .current_user_profile_box {
    border-radius: 20px;
    background: whitesmoke;
    text-align: center;
    margin: 20px 0px;

    img {
        height: 140px;
        width: 140px;
        padding: 20px;
        border-radius: 50%;
    }

h4 {
    font-size: 18px;
    margin: 0px;
    
}
    p {
        font-size: 15px;
        color: #ccc;
       padding-bottom: 20px;
    }
} */}

`