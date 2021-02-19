
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ChatView from '../../Components/Chat-view/ChatView'
import {StyledChatPage} from './ChatPage.styles'
import { connect } from 'react-redux';
import { Route} from 'react-router-dom'
import { auth } from '../../Firebase/Firebase';
import { LogOut, setUsers} from '../../redux/user/User.actions';
import UsersMap from '../../Components/UsersMap/UsersMap';
import { fetchUserMessages, fetchUsers } from '../../utils/App.utils';
import { setUserMessages } from '../../redux/Messages/Message.actions';
import ChatPageHeader from '../../Components/ChatPageHeader/ChatPageHeader';
import Modal from 'react-bootstrap/Modal'
import ProfileView from '../../Components/ProfileView/ProfileView';
import { useAlert } from "react-alert";
import Loading from '../../Components/Loading/Loading';
// import Modal from '../../Components/Modal/Modal'




const ChatPage = ({currentUser, currentUserMessages,
     LogOut, history, 
    setUsers, setUserMessages, location, currentUsers, match}) => {
        const {id} = currentUser
console.log(location)
const [searchField, setSearchField] = useState('')
const alert = useAlert()


const onSearchChange =  e => {
   setSearchField(e.target.value)  
}
const filteredUsers = currentUsers.filter(user => 
  user.userName.toLowerCase().includes(searchField.toLowerCase())
 )



const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);




const onSearchSubmit = e => {
e.preventDefault()
// if(searchField.length >= 1) {
//   const filteredUsers = currentUsers.filter(user => 
//     user.userName === searchField
//    )
//  setUsers(filteredUsers)
// } else  {
//   fetchUsers(setUsers)
// }


}
const Logout = () => {
    auth.signOut()
    LogOut()
    alert.success('log out successful')
    history.push('/')
    
}

useEffect(() => {
    fetchUsers(setUsers)
    fetchUserMessages(setUserMessages, id)
}, [id])



    return (
     <StyledChatPage>


       <Modal show={show} onHide={handleClose}>
         <ProfileView currentUser={currentUser}
          currentUserMessages={currentUserMessages} handleClose={handleClose}/>
       </Modal>
            <Container className='chat_page ' fluid>
            <ChatPageHeader  LogOut={Logout}
             onSearchSubmit={onSearchSubmit} 
            onSearchChange={onSearchChange}
            handleShow={handleShow}

            />
                <Row>
                    <Col lg={3} className='mt-3 users_destop'> 
                    <UsersMap users={filteredUsers}/>
                    </Col>
                    <Col lg={9} className='mt-3'>
                    { location.pathname === '/chat'  ?
                    <div className='typewriter'>
                      <h4>
                      welcome to mChat, search User and click on them to start chatting
                      </h4>
                      </div> :
                    <Route path={`/chat/:userId`} component={ChatView}/>

                    }
                
                    </Col>
                </Row>
            </Container>
             <div className='display_large_none'>
             {/* <Modal show={show} onHide={handleClose}>
         <ProfileView />
       </Modal> */}
       
                  <Route exact path='/chat' > 
                   <UsersMap onSearchChange={onSearchChange}
                    onSearchSubmit={onSearchSubmit}   LogOut={Logout}
                    handleShow={handleShow}
                    users={filteredUsers}
                    />
                  </Route>
                   <Route exact path={`/chat/:userId`}
                    component={ChatView}/>
             </div>
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