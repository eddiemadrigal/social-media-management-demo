import React, { useState } from 'react';
import Dashboard from './Dashboard';
import LoginForm from './LoginForm';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return (
      <div>
        <Dashboard />
      </div>
    );
  } return <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
  
}

export default App;
