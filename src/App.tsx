import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Welcome from './ui/welcome';
import AboutMe from './ui/aboutme';
import Skills from "./ui/skills"
import Education from "./ui/education"
import {Projects} from "./ui/projects"
import Navbar from './ui/navbar';


const App: React.FC = () => {
        <div className="content">
          <Welcome />
          <Projects/>
          <Skills/>
          <AboutMe/>
          <Education/>
        </div>
        const router = createBrowserRouter([
          {
            path: "/",
            element: 
            <div className="content">
              <Navbar/>
              <Welcome />
              <Projects/>
              <Skills/>
            </div>,
          },
          {
            path: "/aboutme",
            element: 
            <div className="content">
              <Navbar/>
              <AboutMe/>
              <Education/>
            </div>,
          }
        ])
  return (
    <>
          {/* <WavyBackground containerClassName="wavy-bg " className=" min-w-full mx-auto pb-20"> */}
          {/* </WavyBackground> */}
          <RouterProvider router={router}/>
    </>
  );
};

export default App;
