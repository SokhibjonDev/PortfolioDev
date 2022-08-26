import "./Header.css";
function Header() {
  return (
    <div className="Header" id="Header">
      <div>
        <div
          data-aos="fade-up"
          className="headerInfo"
          style={{ marginLeft: 65 }}
        >
          <span
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos="fade-up"
          >
            <p>| </p> Front End Developer
          </span>
          <h1
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos="fade-up"
          >
            Soliyev Sokhibdjon
          </h1>
          <p
            data-aos-easing="linear"
            data-aos-duration="600"
            data-aos="fade-up"
          >
            I'm a freelance web developer. Let's work together
          </p>
          <div
            data-aos-easing="linear"
            data-aos-duration="650"
            data-aos="fade-up"
            className="btn-s"
          >
            <button className="contact">Contact me</button>
            <button className="resume">Download CV</button>
          </div>
          <div className="ixix">
            <h1>+ + + +</h1>
            <h1>+ + + +</h1>
            <h1>+ + + +</h1>
          </div>
        </div>
      </div>

      <div
        className="headerImg"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="400"
      >
        <img
          data-aos="fade-up"
          data-aos-easing="linear"
          className="avatar"
          src="/images/avatar.png"
          alt=""
        />
      </div>
      <div className="sot-set" data-aos="fade-up">
        <ul
          style={{
            position: "absolute",
            right: 100,
            top: 800,
            display: "flex",
          }}
        >
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/front_endev_ok"
            >
              <i class="uil uil-telegram"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/sohibjon-soliyev-13550a247/"
            >
              <i class="uil uil-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/profile.php?id=100084564271860"
            >
              <i class="uil uil-facebook"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/SokhibjonDev"
            >
              <i class="uil uil-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="radius" data-aos="fade-up">
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
