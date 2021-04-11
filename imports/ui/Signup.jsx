import React, { useState } from 'react';
//import './style.css';
import { Cred } from '../api/collections.js';
export const Signup = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassowrd] = useState('');

  const submit = e => {
    e.preventDefault();
    var flag=1;
    if(username===""){
      flag=0;
      document.getElementsByClassName("newuser")[0].style.backgroundColor = '#4a1f1f';
    }
    else{
      document.getElementsByClassName("newuser")[0].style.backgroundColor = 'black';
    }
    if(password===""){
      flag=0;
      document.getElementsByClassName("newpass")[0].style.backgroundColor = '#4a1f1f';
    }
    else{
      document.getElementsByClassName("newpass")[0].style.backgroundColor = 'black';
    }
    if(conPassword===""){
      flag=0;
      document.getElementsByClassName("conpass")[0].style.backgroundColor = '#4a1f1f';
    }
    else{
      document.getElementsByClassName("conpass")[0].style.backgroundColor = 'black';
    }
    if(password===conPassword){
      if(flag===1){
        
        var result = Object.keys(Cred.find('collection').collection._docs._map).map((key) => [Number(key), Cred.find('collection').collection._docs._map[key]]);
        var f=1;
        result.forEach(element => {
          if(element[1].username === username){
            f=0;
            document.getElementsByClassName("newuser")[0].style.backgroundColor = '#4a1f1f';
            window.alert('Username Already Exists');
          }
        });

        if(f===1){
          Cred.insert(
            {
              username,
              password
            }
          );

          window.alert("Account created. You can login now.")

        }
      }
    }
    else{
      document.getElementsByClassName("conpass")[0].style.backgroundColor = '#4a1f1f';
            window.alert('Passwords do not match');
    }
    //console.log(Cred.find('collection').collection._docs._map);
    //Meteor.loginWithPassword(username, password);
    
  }
  return (
    <div className="signup">
      <h1>
        Signup
      </h1>
      <form className="login-form">
        <input 
          className="input newuser"
          type="text"
          placeholder="Create Username"
          onChange={e => setUsername(e.target.value)}
        />
        
        <input 
          className="input newpass"
          type="password"
          placeholder="Create Password"
          onChange={e => setPassword(e.target.value)}
        />

        <input 
          className="input conpass"
          type="password"
          placeholder="Enter Password Again"
          onChange={e => setConPassowrd(e.target.value)}
        />
        
        <button className="button" onClick={submit} type="submit">Signup</button>
     </form>
      
    </div>
  );
};
