const Footer = () => {
  return (
    <footer className="footer text-white h-[25vh] flex flex-col justify-center gap-4">
      <p className="text-xl text-center">Connect with me:</p>
      <div className="footer-links flex justify-around">
        <span className="flex items-center space-x-1">
          <a href="https://github.com/KrishnaChaitanya20" target="_blank" rel="noopener noreferrer">GitHub</a>
          <img src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg" loading="lazy" alt="" className="icon-external"/>
        </span>
        <span className="flex items-center space-x-1">
          <a href="https://www.linkedin.com/in/krishna-chaitanya-devunoori" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <img src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg" loading="lazy" alt="" className="icon-external"/>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
