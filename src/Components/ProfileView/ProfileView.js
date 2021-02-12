import React, {useState} from 'react'
import { StyledProfileView } from './ProfileView.styles'
import BackIcon from '../../Assests/left-arrow.svg'
import EditProfile from './EditProfile'


const ProfileView = ({ currentUser, currentUserMessages, handleClose }) => {

    const [toEdit, setToEdit] = useState(false)

    const setEditForm = () => {
        setToEdit(!toEdit)
    }

    return (
        <StyledProfileView>
   
        { toEdit ?
        <EditProfile currentUser={currentUser} setEditForm={setEditForm} /> :
        <>
          <div className='d-flex profile_header mt-4'>
          <div  className='mx-3' style={{
              width: '35%'
          }} onClick={handleClose}>
             <img src={BackIcon} alt='goback'  className='back_icon' style={{
                    height:'40px',
                    
                     padding: '10px'
                  
                   }}/>
            </div>
             <h5 className='profile_header_text mt-2'>Profile</h5>
          </div>
           <div className='profile_box'>
           <div className='my-4' style={{}}>
            <img className='profile dp' src={currentUser.profilePicture} />
            </div>
            <div className='text-center my-3'>
               <h5>{currentUser.userName}</h5>
               <p>{currentUser.name}</p>

               <h4 style={{
                   color: 'rgba(1, 50, 67, 1)'
               }}>Total messages</h4>
               <p>{currentUserMessages.length}</p>
               {/* <CustomButton style={{
                   borderRadius: '0px',
                   width: '250px'
               }}
                background='rgb(190,174,238)'>Edit details</CustomButton> */}
            </div>
          </div>
          <div className='text-center' style={{
              background:'rgba(77, 19, 209, 1)',
              color: 'white',
              padding: '14px 0px',
              cursor: 'pointer'
          }} onClick={setEditForm}>
                    EDIT
          </div>
          </>
            }
  
        </StyledProfileView>
    )
}


export default ProfileView