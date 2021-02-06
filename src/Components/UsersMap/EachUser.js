import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { StyledEachUser } from './EachUser.styles'



const EachUser = ({id, userName, name, profilePicture, }) => {

    return (
   <StyledEachUser>
          <Link to={`/chat/${id}`}>
         <div className='d-flex my-2' style={{
                 
         }}>
             <div lg={4}>
               <img src={profilePicture} alt='Dp'
                   style={{
                       height: '50px',
                       width: '50px',
                       margin: '5px 10px',
                       borderRadius: '50%'
                   }}
               />
             </div>
             <div lg={6} user_details style={{
                 padding: '10px',
                
             }}>
                 <h4>{userName}</h4>
                 <p>{name}</p>
             </div>
             </div>
        </Link>
      
      </StyledEachUser>

    
    )
}

export default EachUser