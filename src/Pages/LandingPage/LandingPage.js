
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import PhoneIcon from '../../Assests/mobile-phone-chat-2652.svg'
import { StyledButton } from '../../Components/custom-button/Custom-Button.styles'
import Header from '../../Components/Header/Header'
import {FirstWrapper, SecondWrapper, 
    ThirdWrapper, LandingPageFooter} from './LandingPage.styles'
import {Link} from 'react-router-dom'
import ChatImage from '../../Assests/chat.svg'
import ConnectImage from '../../Assests/network.svg'
import JoinImage from '../../Assests/join.svg'
import PeopleImage from '../../Assests/people.svg'
import WelcomeImage from '../../Assests/usher.svg'
import Network from '../../Assests/connection.svg'
import JoinUsImage from '../../Assests/collaboration.svg'
import MessageUs from '../../Assests/dialogue.svg'



const LandingPage = () => {

    return (
  <div style={{background: 'rgb(253,255,245)'}}>
     <Header/>
    <FirstWrapper>
 
     <Container>
         <Row>
             <Col className='pt-5 first-wrapper-text' xs={12} sm={8} lg={6}>
                <h1>Live chat Web application to connect with friends, families,
                and other people.</h1>
                <p>With mchatapp, 
                you'll get fast, simple,
                 secure messaging and calling for free, available on phones all over the world.</p>

              <Link to='/Signup'><StyledButton background='white' color='red' hover='red'>
                     Get started
                 </StyledButton></Link>
             </Col>
             <Col xs={12} sm={4}>
                <img src={PhoneIcon} />
             </Col>
         </Row>
     </Container>
     </FirstWrapper>
    <SecondWrapper>
     <Container>
         <Row>
             <Col className=''>
                <img src={JoinImage} />
                Join
          
             </Col>
             <Col  className=''>
             <img src={ConnectImage} />
                 Connect
             </Col>
             <Col  className=''>
             <img src={ChatImage} />
                 Chat
             </Col>
         </Row>
     </Container>
     </SecondWrapper>
     <ThirdWrapper>
          <Container>
              <Row>
                  <Col xs={12} lg={7}>
                     <Row>
                         <Col xs={6}>
                           <div className='box'>
                           <img src={WelcomeImage}/>
                             <h4>
                               Welcome
                             </h4>
                             <p>
                             mChat helps you connect and share with friends, family, co-workers, 
                              and other people in your life
                             </p>
                           </div>

                           <div  className='box mt-3'>
                           <img src={JoinUsImage}/>
                           <h4>
                              Join us 
                             </h4>
                             <p>
                             mChat helps you connect and share with friends, family, co-workers, 
                              and other people in your life
                             </p>
                            </div>

                         </Col>
                         <Col xs={6}>
                          <div  className='box  mt-4'>
                          <img src={Network}/>
                          <h4>
                               Connect
                             </h4>
                             <p>
                             mChat helps you connect and share with friends, family, co-workers, 
                              and other people in your life
                             </p>
                           </div>
                           <div  className='box mt-3'>
                           <img src={MessageUs}/>
                           <h4>
                               Chat
                             </h4>
                             <p>
                             mChat helps you connect and share with friends, family, co-workers, 
                              and other people in your life
                             </p>
                            </div>
                             
                         </Col>
                     </Row>
                  </Col>
                  <Col className='thirdwrapper-right'>
                      <img src={PeopleImage}/>
                      <h3>Perfect for connecting people Together</h3>
                      <p>mChat helps you connect and share with friends, family, co-workers, 
                      and other people in your life.</p>
                   </Col>
              </Row>
              
          </Container>
     </ThirdWrapper>
      <LandingPageFooter>
              <Container >
                  <Row>
                      <Col xs={6}>
                         <h4>Made by Oluwaseyitan {''} 2021</h4>
                      </Col>
                      <Col xs={6}>
                      <div className='mt-2'>

                      <Link to='/Signup'><StyledButton background='white' color='red' hover='red' style={{
                            margin: '50px 0px',
                            fontSize: '12px'
                        }}>
                            Sign up today
                        </StyledButton></Link>
                       </div>
                      </Col>
                  </Row>
              </Container>
      </LandingPageFooter>
     </div>

    )
}



export default LandingPage