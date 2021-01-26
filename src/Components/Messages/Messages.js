import React from 'react'
import { StyledMessage } from './Message.styles'
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';





const Message = ({message, senderId, recieverId, timestamp, currentUser, chatUserDp}) =>  {

    return (
       <div className='row'>
        <div className='col-sm-12 col-lg-12'>
            { senderId !== currentUser.id ?
            <StyledMessage style={{
                
                left: '0px',

            }} className='float-left'>
            <img src={chatUserDp}/>
            <p>{message}</p>
            </StyledMessage> : null
        
            }
         </div>
         <div className='col-sm-12 col-lg-12'> 
            {
                senderId === currentUser.id ?
                <StyledMessage className='float-right'>
                        <img src={currentUser.profilePicture}/>
                        <p>{message}</p>
                </StyledMessage>
                : null
            }
          </div>
      
          </div>
       

    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  })
  
  export default connect(mapStateToProps)(Message)