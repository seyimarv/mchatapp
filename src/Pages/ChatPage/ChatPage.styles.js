import styled from 'styled-components'
import {device} from '../../Styles/Breakpoints/Breakpoints';



export const StyledChatPage = styled.div `
.typewriter h4 {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
/* Keeps the content on a single line */
  margin: 0; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .10em; /* Adjust as needed */
  animation: 
    typing 3.6s steps(50, end),
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {

}
@keyframes typing {
  from { color: #ccc}
  to { color: grey }
  from { width: 0%}
  to { width: 100%}
}
/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  20% { border-color: orange; }
}


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

    ${'' /* @media ${device.phone} {
      display: none;
    }
    @media ${device.TabletLg} {
      display: none;
    } */}
    @media only screen 
  and (max-device-width: 1020px)  {
    display: none;
  }


 
}

.display_large_none {
    @media only screen 
  and (min-device-width: 1020px)  {
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