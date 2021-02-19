import React, { useState } from 'react'
import FormInput from '../../Components/Form-input/Form-input'
import Avatar from '../../Assests/user.svg'
import Email from '../../Assests/Email.svg'
import {Link} from 'react-router-dom'
import {auth, createUserProfile} from '../../Firebase/Firebase'
import Password from '../../Assests/password.svg'
import { Container, Row, Col } from 'react-bootstrap'
import { BackgroundPage, StyledSignUpPage } from './SignUp.styles'
import CustomButton from '../../Components/custom-button/Custom-Button'
import * as Yup from 'yup';
import { useAlert } from "react-alert";
import { Formik } from 'formik';
import {storage} from '../../Firebase/Firebase'

const SignUpPage = () => {
  const [formState, setFormState] = useState(true)
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [loadingImage, setLoadingImage] = useState('');
  const alert = useAlert()
  const handleImageUploadChange = (e)  => {
    setFile(e.target.files[0]);
}

  const handleUploadImage = (e) => {
    e.preventDefault();
    setLoadingImage('loading image')
    const uploadTask = storage.ref(`/images/${file.name}`).put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("images")
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          setFile(null);
          setUrl(url);
        });
        setLoadingImage('image uploaded, add other details and click save')
    });
  }


  const formInitialValues = { name: '',
   email: '',
   userName: '', 
  password: '' }

  const ToggleFormState= () => {
    setFormState(!formState)
  }

    return (
     <BackgroundPage>
       <StyledSignUpPage>
           <Container fluid>
             <Row>
             <Col lg={6}>
                <div  className='signup-image'>
                    {/* <img src={SignUpImage} /> */}
                </div>
             </Col>
             
                          
            <Col className='signup-inputs' xs={12} lg={6}>
                  { formState ?
                <CustomButton background='blue' color='white' hover='blue'
                 onClick={ToggleFormState}
                style={{
                  padding: '3px 10px',
                  borderRadius: '2px'
                }}
                >Next</CustomButton>
                :
                <CustomButton style={{
                  padding: '3px 10px',
                  borderRadius: '2px'
                }}
                background='blue' color='white' hover='blue' 
                onClick={ToggleFormState}>Back</CustomButton>
                }
                  <h4>Welcome to mChat</h4>
                  <p>Create a new account</p>
                <div>
                <p style={{
                    textAlign: 'left',
                    fontWeight: '100'
                  }}>profile picture png, svg, jpg</p>
                   <p style={{
                     color:'cyan'
                   }}>{loadingImage}</p>
                  <form onSubmit={handleUploadImage}
                  style={{
                    margin: '10px',
                    maxWidth: '50%'
                  }} className=''>
                   <input type='file' required
                    onChange={handleImageUploadChange}
                     placeholder='choose profile picture'
                     style={{
                      width: '200px',
                      marginBottom: '10px'
                    }}
                     />
                    <CustomButton type='submit' disabled={!file} style={{
                      padding: '3px 10px',
                      borderRadius: '5px',
                    }}>Upload</CustomButton>
                   </form>
                  </div>
                
              <Formik
              initialValues={formInitialValues}
              validationSchema={Yup.object({
              name: Yup.string()
                  .max(50, 'Must be 50 characters or less')
                  .required('What is your name?'),
              email: Yup.string().email('Invalid email address')
              .required('Your email address is required'),
              userName: Yup.string().max(40, 'usernam must be 40 characters or less')
              .required('choose a username'),
              password: Yup.string().min(6, 'password must be at least 6 characters')
              .required('password is required'),

              })}
              onSubmit={ async (values, { setSubmitting, resetForm }) => {
                const { userName,  name, email, password} = values 
                const profilePicture = url
              
              try {
                const createUser = async () => {
                 const { user } = await auth.createUserWithEmailAndPassword(email,password);
                 await createUserProfile(user,  {userName,  name, profilePicture});
                }
                await createUser()
                  resetForm()
                  setSubmitting(false);
                
                  } catch (error) {
                  console.error(error, error.message);
                  alert.error('an error occured try again')
                  }
              }}
              >
              {formik => (
                 <form onSubmit={formik.handleSubmit}>
                      { formState ?
                      <div>
                    <FormInput
                        id="name"
                        type="text"
                        label='name' 
                        picture={Avatar}
                        {...formik.getFieldProps('name')}
                      error={formik.errors.name}
                        />
                        {
                            formik.touched.name  && formik.errors.name ? (
                        <div className='error'>{formik.errors.name}</div>
                        ) : null}
                      
                        <FormInput
                        id="email"
                        type="email"
                        {...formik.getFieldProps('email')}
                      label='Email' 
                      picture={Email}
                        error={formik.errors.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                        <div className='error'>{formik.errors.email}</div>
                        ) : null}
                        <FormInput id='password' error={formik.errors.password} 
                            {...formik.getFieldProps('password')}
                            type='password' password label='password'
                            picture={Password}
                            />
                        {formik.touched.password && formik.errors.password ? (
                            <div className='error'>{formik.errors.password}</div>
                        ) : null}
                        </div>
                          : 
                        <div>
                            <FormInput id='userName' 
                            error={formik.errors.userName} 
                            {...formik.getFieldProps('userName')}
                            type='text' label='user name'
                              picture={Avatar}
                            />
                            {formik.touched.userName && formik.errors.userName ? (
                            <div className='error'>{formik.errors.userName}</div>
                        ) : null}
                        {/* <FormInput id='profilePicture' 
                            error={formik.errors.profilePicture} 
                           value={url}
                            type='text' label='Profile picture'
                              picture={Avatar}
                            />
                            {formik.touched.profilePicture && formik.errors.profilePicture ? (
                            <div className='error'>{formik.errors.profilePicture}</div>
                        ) : null} */}
                         
                          <CustomButton background='blue' type='submit'
                          color='white'
                            hover='blue' className='btn-block'>Sign up</CustomButton>
                        </div>
                        
                    }
                      
                    </form>
                    )}
                 </Formik> 
                          <p style={{
                                      padding: '10px',
                                      fontWeight: '100'
                                    }}>Already have an account? 
                          <Link to='/Login'>login</Link></p>
                    </Col>
              </Row>
            </Container>
        </StyledSignUpPage>
      </BackgroundPage>
    )
}

export default SignUpPage




