import React from 'react';
import { useHistory } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const UserId = props => {

  let history = useHistory();

  function logoutLink() {
    props.setIsLoggedIn(false);
    history.push('/logout')
  }

  if (props.isLoggedIn) {
    return (
      <div>
        <p>Logged In [<Link color='inherit' style={{ cursor: 'pointer'}} onClick={logoutLink}>Logout</Link>]</p>
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