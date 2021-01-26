import styled from 'styled-components'



export const StyledChatView = styled.div `
background-color: purple;
border-radius: 10px;


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
    background-color:#ccc;
    ${'' /* border-bottom: 1px solid white; */}
    position: sticky-top;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;

}
.user_name {
    font-size: 15px;
    margin: 0px;

}
.name {
    font-size: 12px;
    color: grey;
    margin: 0px;
}
.chat_body {
 ${'' /* padding-bottom: 100%; */}
 display: block;
 padding-bottom: 100px;
 height: 70vh;
 overflow-y: scroll;
 overflow-x: hidden;

   
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