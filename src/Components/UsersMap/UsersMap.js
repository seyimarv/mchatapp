import React from 'react'
import EachUser from './EachUser'
import { connect } from 'react-redux';


const UsersMap = ({currentUsers}) => {
  console.log(currentUsers)
    return (
        <div className='users_map'>
           {
               currentUsers.map(({id, name, userName, profilePicture}) => 
               <EachUser key={id} id={id} name={name} userName={userName} profilePicture={profilePicture}/>
               )
           }
        </div>
    )
}

const mapStateToProps = state => ({
    currentUsers: state.user.currentUsers
  })

export default  connect(mapStateToProps)(UsersMap)