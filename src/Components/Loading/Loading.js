import React from 'react'
import {Spinner} from 'react-bootstrap'
import './Loading.css'


const Loading = () => {
    return (
        <div className='loading my-auto mx-auto'>
          <Spinner animation="border"
          style={{
            color: 'radial-gradient(circle, rgba(238,174,202,1) 2+%, rgba(148,187,233,1) 100%)'
          }}
           variant='primary' />
        </div>
       
    )
}


export default Loading