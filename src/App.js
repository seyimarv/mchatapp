import React, { useEffect } from 'react'
import './App.css';
import { Switch, Route, Redirect} from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import SignUpPage from './Pages/SignupPage/SignUpPage';
import {auth, createUserProfile} from './Firebase/Firebase'
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/User.actions'
import LoginPage from './Pages/LoginPage/LoginPage'
import ChatPage from './Pages/ChatPage/ChatPage';
import ProtectedRoute from './ProtectedRoute';


function App({currentUser, setCurrentUser}) {
       
  

  useEffect(() => { 
    let unsubscribeFromAuth = true
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
         
               id: snapShot.id,
              ...snapShot.data()
        
          });

        
        });
      }

      setCurrentUser(userAuth );
    });

     return () => unsubscribeFromAuth = false
 }, [setCurrentUser])

  return (
      <Switch>
        <Route 
           exact path = '/'
           render={() =>
              currentUser ? (
                 <Redirect to='/chat' />
              ) : (
                <LandingPage />
              )
            }
         />
             <Route exact path ='/Signup' render={() =>
              currentUser ? (
                 <Redirect to='/chat' />
              ) : (
                 <SignUpPage />
              )
            } />
             <Route exact path ='/Login'  render={() =>
              currentUser ? (
                 <Redirect to='/chat' />
              ) : (
                 <LoginPage/>
              )
            } />
        <ProtectedRoute path='/chat' component={ChatPage} currentUser={currentUser}/>
          
        
      </Switch>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})
  

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

