import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'
import {Logo, Links, S} from './Header.styles'
import CustomButton from '../custom-button/Custom-Button'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
     
        <Navbar expand="lg" className='sticky-top' style={{
         background: 'rgb(253,255,245)',
         paddingTop: '5px',
         paddingBottom: '0px'

     }}>
      <Container>
       <Logo><span><S>m</S>Chat</span></Logo>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className=''>
            <Nav className="mr-auto">
         
            <Nav.Link><Links>Products</Links></Nav.Link>
            <Nav.Link><Links>Pricing</Links></Nav.Link>
            <Nav.Link><Links>Solutions</Links></Nav.Link>
            <Nav.Link><Links>
            <Link to='/Login'><CustomButton background='red' hoverColor='red' boxShadow style={{padding: '5px 10px'}}>Sign in</CustomButton></Link>
            </Links></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    
 


    )
}


export default Header