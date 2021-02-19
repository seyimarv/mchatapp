import React from 'react'
import EachUser from './EachUser'
import { connect } from 'react-redux';
import ChatPageHeader from '../ChatPageHeader/ChatPageHeader';
import { setUserMessages } from '../../redux/Messages/Message.actions';


const UsersMap = ({users, setUserMessages, currentUser, onSearchChange, onSearchSubmit, LogOut, handleShow}) => {


    return (
        <div className='users_map'>
        <ChatPageHeader onSearchChange={onSearchChange} onSearchSubmit={onSearchSubmit} handleShow={handleShow} LogOut={LogOut}/>
      
       
           {
               users.filter(
                 user => user.id !== currentUser.id
               ).map(({id, name, userName, profilePicture}) => 
               <EachUser key={id} id={id} name={name} userName={userName} 
               profilePicture={profilePicture}/>
               )
           }
        </div>
    )
}

const mapStateToProps = state => ({
    currentUsers: state.user.currentUsers,
    currentUser: state.user.currentUser
  })
  const mapDispatchToProps = dispatch => ({
    setUserMessages: messages => dispatch(setUserMessages(messages))
  });
export default  connect(mapStateToProps, mapDispatchToProps)(UsersMap)