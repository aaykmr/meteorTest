import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Login } from "./Login.jsx";
import { Signup } from "./Signup.jsx";

export const Landing = () => {
  const originalObject = {
    b: 1,
    c: [1, 2, 3],
    d: {
      f: 2,
      g: "fooBar",
    },
  };
  const deepClonedObject1 = { ...originalObject };
  const deepClonedObject2 = originalObject;
  const deepClonedObject3 = Object.assign({}, originalObject);
  console.log(deepClonedObject1 === originalObject);
  console.log(deepClonedObject2 === originalObject);
  console.log(deepClonedObject3 === originalObject);
  //const user = useTracker(() => Meteor.user());
  localStorage.username = "";
  return (
    <div>
      <h1 className="header">zipBoard</h1>
      <Login />
      <Signup />
    </div>
  );
};
