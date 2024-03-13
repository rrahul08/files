import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appbar from './Appbar.jsx';
import AddCourse from './AddCourse.jsx';
import Courses from './Courses.jsx';
import Course from './Course.jsx';
import Signin from './Signin.jsx';
import Signup from './Signup.jsx';

function App() {
  return (
    <RecoilRoot>
    <Router>
      <div style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#eeeeee"
      }}>
        <Appbar />
        <Routes>
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/course/:courseId" element={<Course />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
    </RecoilRoot>
  );
}

export default App;
