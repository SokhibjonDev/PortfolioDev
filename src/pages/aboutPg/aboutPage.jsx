import React from "react";
import "./aboutPage.css";
const aboutPage = () => {
    return (
        <div className="container" style={{ marginTop: -100 }}>
            <div className="title">
                <h1>About me</h1>
            </div>
            <div className="aboutMe">
                <h1>SokhibjonDev</h1>
                <h2>FrontEnd Developer</h2>
                <br />
                <p>My name is Sokhibdjon, I am a Front End developer.
                    I have good leadership skills and am a strong developer.
                    · I help my partners as much as I can
                    ·I'm a guy full of fun and motivation =)
                    I understand the computer well! ! !</p>
                <br />
                <ol>
                    <ul>
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
                    <ul>
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
