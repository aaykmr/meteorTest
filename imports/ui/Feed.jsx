import React from "react";
import {
  useHistory,
  browserHistory,
  useLocation,
  Link,
} from "react-router-dom";
import { Cred } from "../api/collections.js";
import { Create } from "./Create";
import { Logout } from "./Logout";
export const Feed = () => {
  const history = useHistory();
  const location = useLocation();

  if (localStorage.username === "") {
    //document.getElementsByClassName("header")[0].innerHTML="Please Login";

    return (
      <div>
        <h1 className="header">
          <a href="/">Please Login</a>
        </h1>
      </div>
    );
  } else {
    //var result = Object.keys(Cred.find('collection').collection._docs._map).map((key) => [Number(key), Cred.find('collection').collection._docs._map[key]]);

    return (
      <div>
        <h1 className="header">zipBoard | Feed</h1>

        <Create />
      </div>
    );
  }
};
