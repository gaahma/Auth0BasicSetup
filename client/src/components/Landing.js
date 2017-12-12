import React, {Component} from  'react';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import api from '../utils/api';

class Landing extends Component{
  render(){
    return(
      <div>
        <button onClick={() => login()}>Login</button>
        <button onClick={api.test}>Test authentication</button>
        <button onClick={() => logout()}>Logout</button>
      </div>
    )
  }
}

export default Landing;