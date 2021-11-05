import React, { Component } from 'react';
import Login from './components/apps/Login';
import Signup from './components/apps/Signup';
import "./components/apps/style.css";

function App()  {
  return (
    <div className='App'>
      <Login />
      <div className='content'>
        <Signup />
      </div>
    </div>
      
  );
}

export default App;

