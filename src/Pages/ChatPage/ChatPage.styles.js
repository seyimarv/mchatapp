import styled from 'styled-components'
import {device} from '../../Styles/Breakpoints/Breakpoints';



export const StyledChatPage = styled.div `

.chat_page {
    background-color: #3a243b;
    height: 100vh;
    margin: 0px;

    @media ${device.phone} {
      display: none;
    }
    @media ${device.TabletMd} {
      display: none;
    }

    .users_map {
        height: 90vh;
        overflow-y: scroll;
        border-radius: 15px;
        background: purple;

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