import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>In order to test this, you must do the following</h2>
            Have mongo running and have a user in the "users" collection
            Login below with that user data
            You can test this via POSTMAN by going to the routes "login" to get a token and then
              going to /api/users (with the token in the header)
        </div>
        <Login className="App-intro"/>
      </div>
    );
  }
}

export default App;
