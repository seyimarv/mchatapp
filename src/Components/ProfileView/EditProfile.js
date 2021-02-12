import React, {useState} from 'react'
import FormInput from '../Form-input/Form-input'
import Avatar from '../../Assests/user.svg'
import CustomButton from '../../Components/custom-button/Custom-Button'
import * as Yup from 'yup';
import { Formik } from 'formik';
import Database from '../../Firebase/Firebase'
import {storage} from '../../Firebase/Firebase'
import BackIcon from '../../Assests/left-arrow.svg'



const EditProfile = ({currentUser, setEditForm}) => {
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState(currentUser.profilePicture);
    const [loadingImage, setLoadingImage] = useState('');
  
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
  
  
    const formInitialValues = { name: currentUser.name,
     userName: currentUser.userName }
  

     return (
         <div className='my-3 edit_profile' >
           <div className='d-flex'>
            <img src={BackIcon} alt='goback'  className='back_icon' style={{
                    height:'40px',
                    padding: '10px',
                     margin: '10px'
                  
                   }} onClick={setEditForm}/>
            <h5 className='text-center w-75 profile_header_text mt-3'>Edit</h5>
            </div>
           <div className='mx-3'>
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
                      height: '50x',
                      marginBottom: '0px'
                    }}
                     className='file-input'/>
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
              userName: Yup.string().max(40, 'usernam must be 40 characters or less')
              .required('choose a username'),

              })}
              onSubmit={ async (values, { setSubmitting, resetForm }) => {
                const { userName,  name} = values 
                const profilePicture = url
              
              try {
                   Database.collection('users').doc(currentUser.id).update({
                       name,
                       userName,
                       profilePicture
                   })
                  resetForm()
                  setSubmitting(false);
                  setEditForm()
                  } catch (error) {
                  console.error(error, error.message);
                  }
              }}
              >
              {formik => (
                 <form onSubmit={formik.handleSubmit} className='w-1mx-5'>
               
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
                     
                        </div>
                     
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
                      
                         
                          <CustomButton background='blue' type='submit'
                          color='white'
                            hover='blue' className=''>Save</CustomButton>
                        </div>
                        
                   
                      
                    </form>
                    )}
                 </Formik> 
         </div>
     )
}


export default EditProfile