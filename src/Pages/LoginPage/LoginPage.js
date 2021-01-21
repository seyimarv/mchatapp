import React from 'react'
import FormInput from '../../Components/Form-input/Form-input'
import Email from '../../Assests/Email.svg'
import Password from '../../Assests/password.svg'
import {Link} from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { BackgroundPage, StyledLoginPage } from './Login.styles'
import CustomButton from '../../Components/custom-button/Custom-Button'

const LoginPage = () => {

    return (
     <BackgroundPage>
       <StyledLoginPage>
           <Container fluid>
             <Row>
             <Col lg={6}>
                <div  className='login-image'>
                    {/* <img src={SignUpImage} /> */}
                </div>
             </Col>
              <Col className='login-inputs' xs={12} lg={6}>
                 <h4>Welcome to mChat</h4>
                 <p>Login with Email and Password</p>
                <FormInput label='Email' picture={Email}/>
                <FormInput label='password' picture={Password}/>
                 <CustomButton background='blue' color='white' hover='blue' className='btn-block'>Login</CustomButton>
                 <p style={{
                   padding: '10px',
                   fontWeight: '100'
                 }}>don't have an account yet?
                 <Link to='/Signup'>Signup</Link> 
                  </p>
               </Col>
              </Row>
            </Container>
        </StyledLoginPage>
      </BackgroundPage>
    )
}

export default LoginPage