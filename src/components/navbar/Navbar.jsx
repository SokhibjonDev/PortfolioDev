import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <ul>
        <a href="/" className='Logo'>Sokhibjon<span>Dev</span></a>
        <li><a href="#!">About me</a></li>
        <li><a href="#!">Experience</a></li>
        <li><a href="#!">Services</a></li>
        <li><a href="#!">Portfolios</a></li>
        <li><a href="#!">Contact me</a></li>
        <i class="uil uil-moon toggle-btn"></i>
        {/* <i class="uil uil-sun"></i> */}
      </ul>
    </div>
  );
}

export default Navbar;
