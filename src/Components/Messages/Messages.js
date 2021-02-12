import React from 'react'
import { StyledMessage } from './Message.styles'
import { connect } from 'react-redux';
import DeleteIcon from '../../Assests/delete.svg'
import Database from '../../Firebase/Firebase';





const Message = ({id, message, senderId, recieverId, timestamp, currentUser, chatUserDp}) =>  {
  
    const DeleteMessage = () => {
        console.log('')
        Database.collection('messages').doc(id).delete()
    }

    return (
       <div className='row'>
        <div className='col-sm-12 col-lg-12'>
            { senderId !== currentUser.id ?
            <StyledMessage style={{
                left: '0px',

            }} className='float-left'>
            <img src={chatUserDp} alt='chatuser dp'/>
            <p style={{
                color: 'grey',
                background: 'whitesmoke',
                borderTopRightRadius: '20px',
                borderBottomRightRadius:' 50px'
            }}>{message}
            { timestamp ?
            <span>{timestamp.toDate().toLocaleString()}</span> : null
            }
            </p>
           
            </StyledMessage> : null
        
            }
         </div>
         <div className='col-sm-12 col-lg-12'> 
            {
                senderId === currentUser.id ?
                <StyledMessage className='float-right'>
                       
                        <p style={{
             
                borderTopLeftRadius: '20px',
                borderBottomLeftRadius:' 50px',
                background: 'radial-gradient(circle, rgba(238,174,202,1) 2+%, rgba(148,187,233,1) 100%)'
            }}>{message}
                       { timestamp ?
            <span>{timestamp.toDate().toLocaleString()}</span> : null
            }
            <img src={DeleteIcon} alt='delete icon' onClick={() => {
                DeleteMessage()
            }}/>
            </p>
            <img src={currentUser.profilePicture} alt='profile dp'/>
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