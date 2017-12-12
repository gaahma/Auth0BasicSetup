import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Landing';
import Callback from './components/Callback';
import { Router, Route, BrowserRouter } from 'react-router-dom';
import { requireAuth } from './utils/AuthService';
const browserHistory = require('./utils/history');


class App extends React.Component {

  render(){
    return(
      <div className="container">
        <BrowserRouter>
        <div>
          <Route path="/" component={Landing}/>
          {/* <Route path="/special" component={Dashboard} onEnter={requireAuth} /> */}
          <Route path="/callback" component={Callback} />
          </div>
        </BrowserRouter>

      </div>
    )
  }
}

export default App;