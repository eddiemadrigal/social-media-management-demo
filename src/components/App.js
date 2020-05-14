import React, { useState } from 'react';
import Dashboard from './Dashboard';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  if (isLoggedIn) {
    return (
      <div>
        <Dashboard />
      </div>
    );
  } else if (showSignUpForm) {
    return (
      <SignUpForm setIsLoggedIn={setIsLoggedIn} setShowSignUpForm={setShowSignUpForm} />
    )
  } return <LoginForm setIsLoggedIn={setIsLoggedIn} setShowSignUpForm={setShowSignUpForm} />
}

export default App;
