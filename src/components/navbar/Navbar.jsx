import './Navbar.css';
import './Navbar.media.css';
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="Navbar">
        <ul  data-aos="fade-down">
          <Link to="/" className='Logo a'>Sokhibdjon<span>Dev</span></Link>
          <li><Link className='a' to="/experience">Experience</Link></li>
          <li><Link className='a' to="/services">Services</Link></li>
          <li><Link className='a' to="/portfolios">Portfolios</Link></li>
          <li><Link className='a' to="/contact">Contact me</Link></li>
          <i class="uil uil-sun toggle-btn"></i>
          {/* <i class="uil uil-sun toggle-btn"></i> */}
        </ul>
      </div>
  );
}

export default Navbar;
