import React from 'react';
import { Outlet } from 'react-router-dom';
import ProfileClass from "./ProfileClass";
import Profile from './Profile';

const About
 = () => {
  return (
    <div>
        <h2>About us page</h2>
         <p>
            {" "}
            Namaste React episode 6
         </p>
         <Profile name={"Rahul"}/>
         <ProfileClass name={"Rahul Class"}/>
    </div>
  )
}

export default About; 