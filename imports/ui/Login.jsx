import React, { useState } from 'react';
//import './style.css';
import { Cred } from '../api/collections.js';
import { useHistory, browserHistory, useLocation, Link } from "react-router-dom";
export const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const [loginusername, setLoginUsername] = useState('');
  const [loginpassword, setLoginPassword] = useState('');

  const submit = e => {
    e.preventDefault();
    var flag=1;
    if(loginusername===""){
      flag=0;
      document.getElementsByClassName("user")[0].style.backgroundColor = '#4a1f1f';
    }
    else{
      document.getElementsByClassName("user")[0].style.backgroundColor = 'black';
    }
    if(loginpassword===""){
      flag=0;
      document.getElementsByClassName("pass")[0].style.backgroundColor = '#4a1f1f';
    }
    else{
      document.getElementsByClassName("pass")[0].style.backgroundColor = 'black';
    }
    if(flag===1){
        
      var result = Object.keys(Cred.find('collection').collection._docs._map).map((key) => [Number(key), Cred.find('collection').collection._docs._map[key]]);
      var f=0;
      result.forEach(element => {
        if(element[1].username === loginusername && element[1].password === loginpassword){
          f=1;
          localStorage.setItem("userId",element[1]._id);
          history.push('/feed');
          console.log(location);
          
        }
      });
      if(f===0){
        window.alert('Wrong username or password');
        document.getElementsByClassName("user")[0].style.backgroundColor = '#4a1f1f';
        document.getElementsByClassName("pass")[0].style.backgroundColor = '#4a1f1f';
        
      }
    }


  };

  return (
    <div className="login">
      <h1>
        Login
      </h1>
      <form className="login-form">
        <input 
          className="input user"
          type="text"
          placeholder="Username"
          onChange={e => setLoginUsername(e.target.value)}
        />
        
        <input 
          className="input pass"
          type="password"
          placeholder="Password"
          onChange={e => setLoginPassword(e.target.value)}
        />

        
        <button className="button" onClick={submit} type="submit">Login</button>
     </form>
      
    </div>
  );
};
