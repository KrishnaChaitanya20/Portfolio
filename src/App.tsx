import React from 'react';
import Welcome from './ui/welcome';
import AboutMe from './ui/aboutme';
import Skills from "./ui/skills"
import Education from "./ui/education"
import Projects from "./ui/projects"
import WavyBackground from "./components/wavy-bg"

const App: React.FC = () => {
  return (
    <>
          {/* <WavyBackground containerClassName="wavy-bg " className=" min-w-full mx-auto pb-20"> */}
          {/* </WavyBackground> */}
        <div className="content">
          <Welcome />
          <AboutMe/>
          <Skills/>
          <Education/>
          <Projects/>
        </div>

    </>
  );
};

export default App;
