import React from 'react';
import './App.css'

const App = () => {
  return (
    <>
    <div id='box1'>
      <form>
      <center><h2>Have an Account</h2>
      <center><h1>Login</h1></center>
      <input type='text' placeholder='👤 Username' /><br/>
      <input type='password' placeholder='🔐 Password' /><br/>
      <button>Login</button><br></br></center>
      <div id='box2'><label>
              <input type='checkbox' /> Remember Me
            </label></div><h4>forgot password</h4>
      </form>
      </div>
    </>
  );
}

export default App;
