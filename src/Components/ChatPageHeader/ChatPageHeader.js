import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomButton from '../custom-button/Custom-Button'
import SearchBar from '../SearchBar/SearchBar'
import { StyledNavbar } from './ChatPageHeader.styles'


const ChatPageHeader = ({ onSearchChange, onSearchSubmit, LogOut, openModal, handleShow }) => {


    return (
        <StyledNavbar className='sticky-top'>
            <Navbar expand="lg" className='sticky-top' style={{
                background: 'whitesmoke',
                color: 'black'
            }}>
                <Container fluid>
                    <h5 style={{
                        color: 'grey',
                        fontWeight: '600'
                    }}>mChat</h5>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className=''>
                        <Nav className="mr-auto">
                            <Nav.Link className='eachNav' onClick={handleShow}>Profile</Nav.Link>
                            <Link to='/' className='eachNav'><CustomButton background='rgb(190,174,238)' hover=' rgb(190,174,238)'
                                style={{padding: '5px 10px', borderRadius: '0px' }} onClick={LogOut}>Log out</CustomButton></Link>
                        </Nav>
                    </Navbar.Collapse>
                    <SearchBar onSearchChange={onSearchChange} onSearchSubmit={onSearchSubmit} />

                </Container>
            </Navbar>
        </StyledNavbar>
    )
}


export default ChatPageHeader