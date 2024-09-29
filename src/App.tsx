import React, { useEffect } from 'react';
import { createBrowserRouter,RouterProvider, useLocation } from 'react-router-dom';
import Welcome from './ui/welcome';
import AboutMe from './ui/aboutme';
import Skills from "./ui/skills"
import Education from "./ui/education"
import {Projects} from "./ui/projects"
import Navbar from './ui/navbar';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
        const router = createBrowserRouter([
          {
            path: "/",
            element: 
            <div className="content">
              <ScrollToTop />
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
              <ScrollToTop />
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
