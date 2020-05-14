import React from 'react';

const UserId = props => {
  if (props.isLoggedIn) {
    return (
      <div>
        <p>Logged In</p>
      </div>
    )
  }
  return (
    <div>
      <p>Not logged in</p>
    </div>
  )
}

export default UserId;