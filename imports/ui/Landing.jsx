import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Login } from './Login.jsx';
import { Signup } from './Signup.jsx';

export const Landing = () => {

  //const user = useTracker(() => Meteor.user());
  localStorage.username="";
  return(
      <div>
        <h1 className="header">zipBoard</h1>
        <Login />
        <Signup />
      </div>
  );
}
