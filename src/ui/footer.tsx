import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Connect with me:</p>
        <div className="footer-links">
          <a href="https://github.com/KrishnaChaitanya20" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span> | </span>
          <a href="https://www.linkedin.com/in/krishna-chaitanya-devunoori" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span> | </span>
          <Link to="/aboutme">About Me</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
