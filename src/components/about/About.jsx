import './About.css';

function About() {
    return (
        <>
            <div className="title"><h1>About me</h1></div>
            <div className="About" id='About'>
                <div className="aboutImg">
                    <img style={{ display: 'inline' }} width={400} src="/images/imzo.png" alt="" />
                    <div className="uzbek">
                        <h3>Uzbek</h3>
                        <div className="stars">
                            <i class="uis uis-star"></i>
                            <i class="uis uis-star"></i>
                            <i class="uis uis-star"></i>
                            <i class="uis uis-star"></i>
                            <i class="uis uis-star"></i>
                        </div>
                    </div>
                    <div className="russian">
                        <h3>Russian</h3>
                        <div className="stars">
                            <i class="uis uis-star"></i>
                            <i class="uis uis-star"></i>
                            <i class="uis uis-star"></i>
                            <i class="uil uil-star"></i>
                            <i class="uil uil-star"></i>
                        </div>
                    </div>
                    <div className="english">
                        <h3>English</h3>
                        <div className="stars">
                            <i class="uis uis-star"></i>
                            <i class="uis uis-star"></i>
                            <i class="uis uis-star"></i>
                            <i class="uil uil-star"></i>
                            <i class="uil uil-star"></i>
                        </div>
                    </div>

                </div>
                <div className="aboutInfo">
                    <p><span>|</span> Front End Developer</p>
                    <h1>Soliyev Sokhibdjon</h1>
                    <p>My name's Sokhibdjon.I was born on March 6, 2007. I'm a Front End developer.I study at Change It Academy.I have 1 year of experience.My English level is IELTS 7.5 .My GitHub account contains projects I've done <a href="https://github.com/SokhibjonDev">( GitHub )</a>.I entered as a junior developer in 2021. In 2022, I entered the middle level.</p>
                    <div className="btn-s">
                        <button className='contact'>Contact me</button>
                        <button className='resume'>Download CV</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;