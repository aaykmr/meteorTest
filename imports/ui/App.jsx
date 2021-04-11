import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import './style.css';
import { Landing } from './Landing';
import { Feed } from './Feed.jsx';
import { Route, Link} from 'react-router-dom';
export const App = () => {

  //const user = useTracker(() => Meteor.user());
  //localStorage.userId="";
  return(
      <div>
        
        <Route exact path="/" component={Landing} />
        <Route exact path="/feed" component={Feed} />


        
      </div>
  );
}
