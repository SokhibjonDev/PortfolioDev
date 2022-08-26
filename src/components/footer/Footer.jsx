import "./Footer.css";
import "./Footer.media.css";
import "../navbar/Navbar.css";

function Footer() {
  return (
    <>
      <div className="Footer">
        <div
          className="d-flex"
        >
          <ul>
            <h5>Partners</h5>
            <li>
              <a href="https://changeit.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                Change IT
              </a>
            </li>
            <li>
              <a
                href="https://online.pdp.uz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PDP Academy
              </a>
            </li>
            <li>
              <a
                href="https://deepcode.uz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deepcode
              </a>
            </li>
            <li>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                iKnow Academy
              </a>
            </li>
          </ul>
          <ul>
            <h5>Freelance</h5>
            <li>
              <a href="#!">Upwork</a>
            </li>
            <li>
              <a href="#!">Freelancer</a>
            </li>
            <li>
              <a href="#!">Webfreelancer</a>
            </li>
            <li>
              <a href="#!">TopTal</a>
            </li>
          </ul>
          <ul>
            <h5>Social networks</h5>
            <li>
              <a href="#!">Instagram</a>
            </li>
            <li>
              <a href="#!">Telegram</a>
            </li>
            <li>
              <a href="#!">YouTube</a>
            </li>
            <li>
              <a href="#!">GitHub</a>
            </li>
          </ul>
          <ul>
            <h5>Connection</h5>
            <li>
              <a href="#!">
                <i class="uil uil-envelope"></i> sokhibjondev@gmail.com
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="uil uil-phone"></i> +998 94 404 56 40
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="uil uil-phone"></i> +998 93 574 67 66
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="uil uil-location-point"></i>Uzbekistan / Almalyk
              </a>
            </li>
          </ul>
        </div>
        <p>
          © 2022 "SokhibjonDev"
        </p>
      </div>
    </>
  );
}

export default Footer;
