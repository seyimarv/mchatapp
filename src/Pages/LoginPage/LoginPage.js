import React from 'react'
import FormInput from '../../Components/Form-input/Form-input'
import Email from '../../Assests/Email.svg'
import Password from '../../Assests/password.svg'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { BackgroundPage, StyledLoginPage } from './Login.styles'
import {auth} from '../../Firebase/Firebase'
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomButton from '../../Components/custom-button/Custom-Button'

const LoginPage = () => {
  const formInitialValues = {email: '', password: ''}
  return (
    <BackgroundPage>
      <StyledLoginPage>
        <Container fluid>
          <Row>
            <Col lg={6}>
              <div className='login-image'>
                {/* <img src={SignUpImage} /> */}
              </div>
            </Col>
            <Col className='login-inputs' xs={12} lg={6}>
              <h4>Welcome to mChat</h4>
              <p>Login with Email and Password</p>
              <Formik
                initialValues={formInitialValues}
                validationSchema={Yup.object({
                  email: Yup.string().email('Invalid email address')
                    .required('Your email address is required'),
                  password: Yup.string().min(6, 'password must be at least 6 characters')
                    .required('password is required')

                })}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  // setTimeout(() => {
                  //    
                  //     console.log(values);
                  //     resetForm()

                  // });
                  try {
                    const { email, password } = values
                    await auth.signInWithEmailAndPassword(email, password);
                    setSubmitting(false);
                    resetForm()
              

                  } catch (error) {
                    console.error(error);

                  }
                }}
              >
                {formik => (
                  <form onSubmit={formik.handleSubmit}>
                    <FormInput label='email' type='email'
                      id="email"
                      error={formik.errors.email}
                      {...formik.getFieldProps('email')}
                      picture={Email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className='error'>{formik.errors.email}</div>
                    ) : null}
                    <FormInput label='password' type="password"
                      id='password' error={formik.errors.password}
                      {...formik.getFieldProps('password')} picture={Password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div className='error'>{formik.errors.password}</div>
                    ) : null}
                    <CustomButton background='blue'
                     type='submit' color='white' hover='blue' 
                     className='btn-block'>Login</CustomButton>

                  </form>
                )}
              </Formik>
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


