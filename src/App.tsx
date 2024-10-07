import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import Welcome from './ui/welcome';
import AboutMe from './ui/aboutme';
import Skills from "./ui/skills";
import Education from "./ui/education";
import Projects from "./ui/projects";
import Navbar from './ui/navbar';
import Resume from './ui/resume';
import Footer from './ui/footer';
import ScrollHint from './components/scroll-Hint.tsx';

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
      element: (
        <>
          <ScrollToTop />
          <ScrollHint />
          <div className="content">
            <Navbar />
            <Welcome />
            <Projects />
            <Skills />
            <Footer />
          </div>
        </>
      ),
    },
    {
      path: "/aboutme",
      element: (
        <>
          <ScrollToTop />
          <div className="content">
            <Navbar />
            <AboutMe />
            <Education />
            <Footer />
          </div>
        </>
      ),
    },
    {
      path: "/resume",
      element: <Resume/>,
    },
    {
      path: "*",
      element: <div className='text-white'>404 - Page Not Found</div>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
