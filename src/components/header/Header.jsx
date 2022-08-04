import "./Header.css";

function Header() {
  return (
    <div className="Header" id="Header">
      <div className="headerInfo">
        <span>
          <p>| </p> Front End Developer
        </span>
        <h1>Soliyev Sokhibdjon</h1>
        <p>I'm a freelance web developer. Let's work together</p>
        <div className="btn-s">
          <button className="contact">Contact me</button>
          <button className="resume">Download CV</button>
        </div>
        <div className="ixix">
          <h1>+ + + +</h1>
          <h1>+ + + +</h1>
          <h1>+ + + +</h1>
        </div>
      </div>
      <div className="headerImg">
          <img className="avatar" src="/images/avatar.png" alt="" />
      </div>
      <div className="sot-set">
        <ul>
          <li>
            <a href="#!">
              <i class="uil uil-telegram"></i>
            </a>
          </li>
          <li>
            <a href="#!">
              <i class="uil uil-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#!">
              <i class="uil uil-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#!">
              <i class="uil uil-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="radius">
        <div className="roundes">
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>
        <div className="bigBorder"></div>
        <div className="roundes">
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
