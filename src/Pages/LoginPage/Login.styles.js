import styled from 'styled-components'
import Background  from '../../Assests/undraw_Login_re_4vu2.svg'
import {device} from '../../Styles/Breakpoints/Breakpoints';

export const BackgroundPage = styled.div `
  background: #d3d3d3;
  height: 100%;
  padding: 30px;

  .error {
      font-size: 12px;
      color: red;
  }

@media ${device.phone} {
   
      padding: 0px;
    }


`

export const StyledLoginPage  = styled.div `
background-color: white;
${'' /* background-image: linear-gradient(315deg, #f9d29d 0%, #ffd8cb 74%); */}
border: 1px solid white;
margin: 40px;
box-shadow:  5px 5px 5px 5px #ccc;
.login-image {
        background: url(${Background});
        ${'' /* background-image: linear-gradient(315deg, #89d4cf 0%, #6e45e1 74%); */}
        ${'' /* border-radius: 50px; */}
        background-color: #00B2EE;
        box-shadow:  3px 3px 3px 3px #ccc;
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        margin: 50px;
        @media ${device.phone} {
        margin: 0px;
        height: 150px;
    }
       
    
        img {
            height: 400px;
            padding: 20px;

                    
        @media ${device.TabletLg} {
         height: 340px;
         padding: 40px;
    }
        }
        @media ${device.TabletMd} {
     
    }

    }
.login-inputs {
    background-color:;
    padding: 50px;

    h4 {
        text-align: center;
 
        font-weight: bolder;
        letter-spacing: 2px;
        font-size: 28px;
        padding: 40px 0px;
        
    }
    p {
        text-align: center;
       
       
        font-weight: 600;
        letter-spacing: 2px;
    }
    @media ${device.phone} {
       padding: 20px;
       height: 100vh;
    }
 

}
@media ${device.phone} {
        margin: 0px;
    }


`