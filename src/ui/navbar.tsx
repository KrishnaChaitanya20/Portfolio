import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <div className='nav-pill sticky top-2 z-20 flex'>
        <Link className='nav-toggle' to="/">Home</Link>
        <Link className='nav-toggle' to="/aboutme">About Me</Link>
    </div>
  )
}

export default Navbar