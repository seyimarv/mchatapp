import React from 'react'
import { StyledMessage } from './Message.styles'
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';





const Message = ({message, senderId, recieverId, timestamp, currentUser, chatUserDp}) =>  {
   const Date = timestamp.toDate()
    return (
       <div className='row'>
        <div className='col-sm-12 col-lg-12'>
            { senderId !== currentUser.id ?
            <StyledMessage style={{
                left: '0px',

            }} className='float-left'>
            <img src={chatUserDp}/>
            <p style={{
                background: 'rgba(0, 0, 0, 0.7)'
            }}>{message}
            <span>{Date.toLocaleString()}</span>
            </p>
           
            </StyledMessage> : null
        
            }
         </div>
         <div className='col-sm-12 col-lg-12'> 
            {
                senderId === currentUser.id ?
                <StyledMessage className='float-right'>
                        <img src={currentUser.profilePicture}/>
                        <p style={{
                background: '#006400'
            }}>{message}
            <span>{Date.toLocaleString()}</span>
            </p>
           
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