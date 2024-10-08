import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="w-full sm:h-20 nav-bar fixed mt-4 mx-auto z-20">
      <div className="sm:w-[90%]  mx-auto px-2 flex justify-between items-center text-white ">
        <div className="logo">
          <img className="logo-img" src={`assets/logo.svg`} alt="Logo" />
        </div>

        {/* Navigation Links for Medium and Up */}
        <div className="hidden flex nav-pill mx-auto space-x-4">
          <Link className="nav-toggle" to="/">Home</Link>
          <Link className="nav-toggle" to="/aboutme">About Me</Link>
        </div>

      <div className="sm:hidden flex items-center cursor-pointer py-2 px-3 rounded-full bg-[#f2f2f20d] border-[#f2f2f21a] border" onClick={toggleLinks}>
          @
        </div>

        {showLinks && (
          <div className="absolute top-full right-2 px-4 rounded bg-zinc-900 mt-1">
            <div className="flex flex-col space-y-2 text-xl py-2 px-4">
              <span className="flex items-center space-x-1">
                <a href="https://www.linkedin.com/in/krishna-chaitanya-devunoori" target="_blank">LinkedIn</a>
                <img src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg" loading="lazy" alt="" className="icon-external"></img>
              </span>
              <span className="flex items-center space-x-1">
                <a href="https://github.com/KrishnaChaitanya20" target="_blank">GitHub</a>
                <img src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg" loading="lazy" alt="" className="icon-external"></img>
              </span>
            </div>
          </div>
        )}

        <div className="hidden sm:flex space-x-4">
          <span className="flex items-center space-x-1">
            <a href="https://www.linkedin.com/in/krishna-chaitanya-devunoori" target="_blank">LinkedIn</a>
            <img src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg" loading="lazy" alt="" className="icon-external"/>
          </span>

          <span className="flex items-center space-x-1">
            <a href="https://github.com/KrishnaChaitanya20" target="_blank">GitHub</a>
            <img src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg" loading="lazy" alt="" className="icon-external"/>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
