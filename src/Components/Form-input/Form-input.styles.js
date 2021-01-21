
import styled from 'styled-components'




export const FormCover = styled.div `
 position: relative;
  margin: 15px 0px;
`
export const FormImage = styled.img `
    position: absolute;
    pointer-events: none;
    left: 5px;
    margin-top: 15px;
    width: 20px;
    height: 20px;

`
export const Input = styled.input `
    background: #FFFFFF;
    border: white;
    background: white;
    box-shadow: 3px 3px 3px 3px #ccc;
    box-sizing: border-box;
    border-radius: 20px;
    margin: 0px 0;
    padding-left: 30px;
    padding: 25px;
    padding-left: 30px;
    &:focus {
      outline: none;
      border: 2px solid blue;
    }
    &:hover {
        border: 2px solid blue;
    }
`
export const Label = styled.label `
    margin-left: ${({DetailsPillInput}) => DetailsPillInput ? '15px' : '30px'};
    top: 10px;
    height: 16px;
    position: absolute;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 18px;
    /* or 138% */
    /* Pressed */

    color: #374764;
    transition: 300ms ease all;
`