import React from "react";
import "./aboutPage.css";
const aboutPage = () => {
  return (
    <div className="container" style={{ marginTop: -100 }}>
      <div
        data-aos="fade-down"
        data-aos-easing="ease-in-out"
        data-aos-duration="500"
        className="title"
      >
        <h1>About me</h1>
      </div>
      <div className="aboutMe">
        <h1
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          SokhibjonDev
        </h1>
        <h2
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="900"
        >
          FrontEnd Developer
        </h2>
        <br />
        <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="800">
          My name is Sokhibdjon, I am a Front End developer. I have good
          leadership skills and am a strong developer. · I help my partners as
          much as I can ·I'm a guy full of fun and motivation =) I understand
          the computer well! ! !
        </p>
        <br />
        <ol>
          <ul
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="700"
          >
            <h2>Skills</h2>
            <li>Html & Handlebars & Pug</li>
            <li>Css / Less / Sass</li>
            <li>Bootstrap/Materalize</li>
            <li>JavaScript</li>
            <li>Jquery</li>
            <li>GitHub</li>
            <li>Node JS</li>
            <li>Express JS</li>
            <li>Mongo DB</li>
            <li>Photoshop & Figma</li>
            <li>Socket.io || Realtime Options</li>
          </ul>
          <ul
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="600"
          >
            <h2>Hobies</h2>
            <li>Basketbol</li>
            <li>Reading books</li>
            <li>Listening music</li>
            <li>Playing video games</li>
          </ul>
        </ol>
      </div>
    </div>
  );
};

export default aboutPage;
