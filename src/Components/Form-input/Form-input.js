import React from 'react'
import {FormCover, Input, Label, FormImage} from './Form-input.styles'

const FormInput = ({picture, label, Border, ...other }) => {
     
    return ( 
      <div >
      <FormCover className="group">
        <FormImage src={picture}/>
        <Input  className="form-control" id="exampleFormControlInput1" {...other} placeholder={label} />  
        </FormCover>
        </div>
    )        
 }

export default FormInput