import { Link } from "react-router-dom";
import "./Contact.css";
import "./Contact.media.css";

function Contact() {
  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500"
        className="title"
      >
        <h1>Contact</h1>
      </div>
      <div className="Contact">
        <div
          data-aos="fade-down"
          className="contactInfo"
        >
          <h1
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            Lorem, ipsum
          </h1>
          <p
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="600"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Officia, quia?. Ab, saepe.
          </p>
          <Link
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="400"
            to="/contact"
          >
            Contact me
          </Link>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="600"
          className="contactImg"
        >
          <img src="/images/contact.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Contact;
