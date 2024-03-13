import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Signup from './Signup';
import Signin from './Signin';
import Appbar from './Appbar';
import Course from './Course';

function App() {
  return (
    <>
      
      <Router>
      <Appbar />
        <Routes>
          <Route path={'/addcourse'} element={<Course />} />
          <Route path={'/signup'} element={<Signup />} />
          <Route path={'/signin'} element={<Signin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
