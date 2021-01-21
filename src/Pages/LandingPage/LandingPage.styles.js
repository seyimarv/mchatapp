import styled from 'styled-components'
import {device} from '../../Styles/Breakpoints/Breakpoints';

export const FirstWrapper = styled.div `
${'' /* background-color: #f1dfd1;
background-image: linear-gradient(315deg, #f1dfd1 0%, #f6f0ea 74%); */}
background-color: #fee2f8;
background-image: linear-gradient(315deg, #fee2f8 0%, #dcf8ef 74%);

;


.first-wrapper-text {
    margin-top: 10px;


    @media ${device.phone} {
     margin: 20px 0px;
    }
}

 h1 {
     font-size: 25px;
     padding:5px 0px;
     font-weight: 600;

     @media ${device.phoneLg} {
     font-size: 20px;
    }
 }
 p {
     font-size: 18px;
     font-weight: 100 !important;

     @media ${device.phoneLg} {
     font-size: 14px;
    }
 }
 img {
     height: 250px;
     margin: 30px 30px;
     color: red;
     padding: 0px !important;
     filter: drop-shadow(10px 10px 4px grey);
     
     @media ${device.TabletLg} {
     margin: 40px 0px;
     height: 350px;
     width: 250px;
    
    }


     @media ${device.TabletMd} {
     margin: 40px 0px;
     height: 350px;
     width: 250px;
  
    
    }

    @media ${device.phoneLg} {
     margin: 0px 120px;
     height: 250px;
     width: 250px;
    
    }

    
    @media ${device.phone} {
     margin: 20px 20px;
     height: 200px;
     width: 180px;
    
    }

     
 }
`
export const SecondWrapper = styled.div `
 padding: 10px;
   margin: 10px 10px;
  text-align: center;
  font-size: 18px;
  border-bottom: 1px solid whitesmoke;

 


  img {
      height: 20px;
      margin: 5px;
  }


  @media ${device.phoneLg} {
    text-align: none;
    }

`
export const ThirdWrapper = styled.div `
background:#FFFAFA;
margin-top: 30px;
.thirdwrapper-right {
    margin: 100px 20px;

    img {
         height: 40px;
         filter: drop-shadow(10px 10px 4px #d3d3d3);
         margin: 20px 0px;
         color: red;

     
     }
    h3 {
     font-size: 20px;
     max-width: 80%;

 }
 p {
    max-width: 80%;
 }
 @media ${device.phoneLg} {
    margin: 50px 0px;
    }

}


 .box {
     border: 1px solid white;
     box-shadow: 5px 5px 5px 5px #ccc;
     background: white;
     padding: 30px 10px;
    width: 80%;

    h4 {
        font-size: 18px;
        font-weight: 600;
    }

    p {
        font-size: 14px;
      
     }
   img {
       height: 30px;
       margin: 5px 0px;
   }

  @media ${device.phoneLg} {
      width: 100%;
    }

     p {
        font-size: 15px;
      
     }
 }
`
export const LandingPageFooter = styled.div `
margin-top: 100px;
 background: black;
 text-align: center;
 font-size: 15px;
  h4 {
      margin: 50px 0px;
      color: grey;
      font-size: 25px;

      @media ${device.phoneLg} {
        font-size: 20px;
    }
  }
  @media ${device.phoneLg} {
     text-align: normal;
    }
`