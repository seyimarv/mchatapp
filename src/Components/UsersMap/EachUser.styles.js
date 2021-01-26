import styled from 'styled-components'



export const StyledEachUser = styled.div `
.user_details {
    margin: 20px;
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
     font-weight: 600;
     color: whitesmoke;
  
 }
 p {
     font-size: 13px;
     color: #ccc;

     color: grey;
 }

&:hover {
    background: purple;
    transform: scale(1.1);
    transition-duration: 1s;

}

`