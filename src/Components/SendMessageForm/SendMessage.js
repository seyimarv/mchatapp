import styled from 'styled-components'
import {device} from '../../Styles/Breakpoints/Breakpoints';

export const StyledSendMessage = styled.div `
  margin: 2px 2px;
  width: 100%;
  
 

  input {
      width: 90%;
      background: #696969;
      border: 1px solid #696969;
      margin: 0px 10px;
      outline: none;
      padding: 10px 10px;
      border-radius: 20px;
      color: white;

      &:focus {
        border: 1px solid grey;

      }


     @media ${device.TabletMd} {
     width: 70%;
     margin: 0px 5px;
    }
  }

`