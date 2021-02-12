import styled from 'styled-components'
import {device} from '../../Styles/Breakpoints/Breakpoints';



export const StyledNavbar = styled.div `
position: sticky;

h5 {
    font-size: 30px;
      background:radial-gradient(circle,
      rgba(190,174,238,1) 34%, rgba(148,187,233,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    ${'' /* color: rgb(190,174,238);
     color: radial-gradient(circle,
      rgba(190,174,238,1) 34%, rgba(148,187,233,1) 100%); */}
}
.eachNav {
    margin: 0px 150px;

    @media ${device.phoneLg} {
    margin: 5px 0px !important;
    }

    @media ${device.TabletLg} {
    margin: 0px 70px !important;
    }
}



`