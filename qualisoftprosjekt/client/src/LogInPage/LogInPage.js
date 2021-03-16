import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './LogInPage.css';

async function loginUser(credentials) {
    return fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

function LogInPage({setToken}) {
    const history = useHistory();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token.token);
      }

    
    return(
        <div class="wrapper fadeInDown">
            <div id="formContent">
                
                <div class="fadeIn first">
                <h1>Please Log In</h1>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <input type="text" id="login" class="fadeIn second" name="login" placeholder="username" onChange={e => setUserName(e.target.value)}/>
                    <input type="password" id="password" class="fadeIn third" name="login" placeholder="password" onChange={e => setPassword(e.target.value)}/>
                    <input type="submit" class="fadeIn fourth" value="Log In" />
                </form>
                <div id="formFooter">
                <a class="underlineHover" href="#">Forgot Password?</a>
                </div>
            </div>
        </div>
    )
};


LogInPage.propTypes = {
    setToken: PropTypes.func.isRequired
  }


export default LogInPage;