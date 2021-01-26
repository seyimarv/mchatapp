import React, {useEffect, useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import SendMessage from '../SendMessageForm/SendMessage.styles'
import {StyledChatView }from './ChatView.styles'
import { connect } from 'react-redux';
import { setUserMessages } from '../../redux/Messages/Message.actions';
import Message from '../Messages/Messages'




const ChatView = ({match, currentUsers, currentMessages}) => {
  const [chatUser, setChatUser] = useState({name: '',
   userName: '', 
   id: '', 
   profilePicture: '' })

   const [chatMessages, setChatMessages] = useState([])

  useEffect( async () => {
    const {userId }= match.params
    const user = await currentUsers.find(user => 
      user.id === userId
    )
    
    const messages = await currentMessages.filter(message => 
         message.recieverId === userId || message.senderId === userId
      )
    setChatUser(user)
    setChatMessages(messages)
  }, [match.params])

  console.log(chatMessages)

  return (
       <StyledChatView>
       { chatUser ?
        <Container fluid>
            <Row className='chat_view_header sticky-top'>
          
              
        
              <Col>
           
                 <div className='row'>
                  <img src={chatUser.profilePicture} alt='profile picture'/>
                  <div>
                  <h2 className='user_name'>{chatUser.userName}</h2>
                  <p className='name'>{chatUser.name}</p> 
                  </div>
                  </div>
             
              </Col>
            </Row>
     
            <Row className='chat_body'>
               {
              chatMessages.map(({message, timestamp, senderId, recieverId}) => 
               <Message senderId={senderId} message={message} timestamp={timestamp}
                 recieverId={recieverId} chatUserDp={chatUser.profilePicture}
               />
              )
            }
            
            </Row>
      
            <Row className='bottom'>
            { chatUser ?
              <SendMessage chatUser={chatUser} /> : null
            }
            </Row>
        </Container> : null
       }
    </StyledChatView>
  )
}

const mapStateToProps = state => ({
  currentUsers: state.user.currentUsers,
  currentMessages: state.messages.currentUserMessages
})

export default connect(mapStateToProps)(ChatView)