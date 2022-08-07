import './Navbar.css';
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="Navbar">
        <ul >
          <Link to="/" className='Logo'>Sokhibjon<span>Dev</span></Link>
          <li><Link to="/about">About me</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolios">Portfolios</Link></li>
          <li><Link to="/contact">Contact me</Link></li>
          <i class="uil uil-sun toggle-btn"></i>
          {/* <i class="uil uil-sun toggle-btn"></i> */}
        </ul>
      </div>
  );
}

export default Navbar;
