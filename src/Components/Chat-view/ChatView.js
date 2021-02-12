import React, {useEffect, useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import SendMessage from '../SendMessageForm/SendMessage.styles'
import {StyledChatView }from './ChatView.styles'
import { connect } from 'react-redux';
import Message from '../Messages/Messages'
import BackIcon from '../../Assests/left-arrow.svg'




const ChatView = ({match, currentUsers, currentMessages, history,handleShow}) => {
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
                   <img src={BackIcon} alt='go back' style={{
                     width: '40px',
                     color: 'white'
                   }} onClick={() => 
                   history.push('/chat')
                   } className='go_back_icon'/>
                  <img src={chatUser.profilePicture} alt='profile dp'/>
                  <div>
                  <h2 className='user_name'>{chatUser.userName}</h2>
                  </div>
                  </div>
             
              </Col>
            </Row>
     
            <Row className='chat_body'>
               {
              chatMessages.map(({id, message, timestamp, senderId, recieverId}) => 
               <Message senderId={senderId} message={message} timestamp={timestamp}
                 recieverId={recieverId} chatUserDp={chatUser.profilePicture} id={id}
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