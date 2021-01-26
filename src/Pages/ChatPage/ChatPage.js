
import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ChatView from '../../Components/Chat-view/ChatView'
import {StyledChatPage} from './ChatPage.styles'
import { connect } from 'react-redux';
import {Route} from 'react-router-dom'
import { auth } from '../../Firebase/Firebase';
import { LogOut, setUsers} from '../../redux/user/User.actions';
import UsersMap from '../../Components/UsersMap/UsersMap';
import { fetchUserMessages, fetchUsers } from '../../utils/App.utils';
import { setUserMessages } from '../../redux/Messages/Message.actions';




const ChatPage = ({currentUser, currentUserMessages,
     LogOut, history, 
    setUsers, setUserMessages}) => {
        const {id} = currentUser

const Logout = () => {
    auth.signOut()
    LogOut()
    history.push('/')
    
}

useEffect(() => {
    fetchUsers(setUsers)
    fetchUserMessages(setUserMessages, id)
}, [id])

    return (
     <StyledChatPage>
          {/* <p onClick={Logout}>Log out</p> */}
            <Container className='chat_page' fluid>
                <Row>
                    <Col lg={3} className='mt-3'> 
                    <UsersMap />
                    </Col>
                    <Col lg={9} className='mt-3'>
               
                    <Route path={`/chat/:userId`} component={ChatView}/>
                
                    </Col>
                </Row>
            </Container>
          
        </StyledChatPage>
    )
}
const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    currentUsers: state.user.currentUsers,
    currentUserMessages: state.messages.currentUserMessages
  })


const mapDispatchToProps = dispatch => ({
    LogOut: () => dispatch(LogOut()),
    setUsers: users => dispatch(setUsers(users)),
    setUserMessages: messages => dispatch(setUserMessages(messages))
  });
    
export default connect(mapStateToProps, mapDispatchToProps)(ChatPage)