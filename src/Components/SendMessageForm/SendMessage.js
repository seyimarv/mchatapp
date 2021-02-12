import styled from 'styled-components'
import {device} from '../../Styles/Breakpoints/Breakpoints';

export const StyledSendMessage = styled.div `
  margin: 2px 2px;
  width: 100%;
  background: rgb(190,174,238);
    background: radial-gradient(circle, rgba(190,174,238,1) 34%, rgba(148,187,233,1) 100%);
    border-radius: 50px;

  input {
      width: 90%;
      background: rgb(190,174,238);
      background: radial-gradient(circle, rgba(190,174,238,1) 34%, rgba(148,187,233,1) 100%);
      border: rgb(190,174,238);
      margin: 0px 10px;
      border-radius: 50px;
      outline: none;
      padding: 10px 10px;
      
      color: white;

      &:focus {
        border: 1px solid grey;

      }


     @media ${device.TabletLg} {
     width: 70%;
     margin: 0px 5px;
    }
  }

`