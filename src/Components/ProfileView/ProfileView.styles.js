import styled from 'styled-components'


export const StyledProfileView = styled.div `
${'' /* background: rgb(190,174,238);
background: radial-gradient(circle,
     rgba(190,174,238,1) 34%, rgba(148,187,233,1) 100%); */}
.profile_header {
    background: white;
    color: #00FFFF;
    padding: 2px;
    .profile_header_text {
        padding:0px;
        font-size: 20px;
        text-align:center !important;
        color: #696969;
        ${'' /* background:radial-gradient(circle,
      rgba(190,174,238,1) 34%, rgba(148,187,233,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */}
    }
}
.edit_profile {
    padding: 20px;
}
.back_icon {
    
    background: whitesmoke;
    border-radius: 100%;
    -webkit-box-shadow: 3px 3px 5px 4px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow:    3px 3px 5px 4px #ccc;  /* Firefox 3.5 - 3.6 */
     box-shadow:         3px 3px 5px 4px #ccc;  
}
.profile_box {
  
   margin: 10px;
   border-radius: 5px;
   background: white;
   padding: 10px;

h5 {
    color: rgba(34, 49, 63, 1);
}

   p {
       color: #C0C0C0;
   }

}

.profile_picture{
    ${'' /* border-radius: 50%;
    padding: 0px 10px;
background: #e0e0e0;
box-shadow:  5px 5px 10px #cacaca,
             -5px -5px 10px #f6f6f6; */}
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    height: 140px;
    width: 140px;
   
    ${'' /* margin: 20px 100px; */}
    

}
.file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.file-input::before {

  content: 'Select an image';
  color: black;
  display: inline-block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  padding: 2px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
}
input[type='file'] {
    color: transparent;
  }
.file-input:hover::before {
  border-color: black;
}
.file-input:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}

`