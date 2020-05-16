import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './Dashboard';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import LandingPage from './LandingPage';
import Logout from './Logout';


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showTwitterApp, setShowTwitterApp] = useState(true);
  const [showInstagramApp, setShowInstagramApp] = useState(false);


  if (isLoggedIn) {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/dashboard">
              <Dashboard 
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn} 
                showTwitterApp={showTwitterApp}
                setShowTwitterApp={setShowTwitterApp}
                showInstagramApp={showInstagramApp}
                setShowInstagramApp={setShowInstagramApp}
              />
            </Route>                      
          </Switch>
        </div>
      </Router>
    );
  } else if (showSignUpForm) {
    return (
      <SignUpForm setIsLoggedIn={setIsLoggedIn} setShowSignUpForm={setShowSignUpForm} />
    )
  } return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginForm setIsLoggedIn={setIsLoggedIn} setShowSignUpForm={setShowSignUpForm} />
        </Route>
        <Route path="/signup">
          <SignUpForm setIsLoggedIn={setIsLoggedIn} setShowSignUpForm={setShowSignUpForm} />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
