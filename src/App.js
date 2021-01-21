import React from 'react'
import './App.css';
import { Switch, Route, Redirect} from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import SignUpPage from './Pages/SignupPage/SignUpPage';
import LoginPage from './Pages/LoginPage/LoginPage'
function App() {
  return (
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/Signup'>
          <SignUpPage />
        </Route>
        <Route exact path='/Login'>
          <LoginPage />
        </Route>
      </Switch>
  );
}

export default App;
