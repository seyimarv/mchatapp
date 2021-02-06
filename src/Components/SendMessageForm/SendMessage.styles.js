import React, {useState} from 'react'
import {StyledSendMessage} from './SendMessage'
import CustomButton from '../custom-button/Custom-Button'
import { connect } from 'react-redux';
import firebase from 'firebase'
import Database from '../../Firebase/Firebase'
import SendImage from '../../Assests/send_icons.svg'


const SendMessage = ({currentUser, chatUser}) => {
  console.log(chatUser)
  console.log(currentUser)
  const {id} = currentUser
  const senderId = id
const [message, setMessage] = useState('')

  const handleChange = e => {
       setMessage(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    Database.collection('messages').add({
      message,
      senderId,
      recieverId: chatUser.id,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
   setMessage('')
   e.target.reset()
  }


    return (
      <StyledSendMessage>
         <form onSubmit={handleSubmit}>
            <input onChange={handleChange}
             placeholder='Text a message'/>
            <CustomButton style={{
                padding: '0px 1px',
                borderRadius: '50%',
                 
                border: '1px solid  rgb(89, 172, 82)'
            }} background='rgb(190,174,238)' color='rgb(190,174,238)'
             type='submit'  disabled={!message}>
               <img src={SendImage} />
             </CustomButton>
          </form>
        </StyledSendMessage>
    )
}
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(SendMessage)