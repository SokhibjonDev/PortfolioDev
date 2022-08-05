import "./Experience.css";

function Experience() {
  return (
    <>
      <div className="title">
        <h1 style={{paddingTop:'30px'}}>Experience</h1>
      </div>
      <div className="Experience">
        <div className="exp">
          <ul>
            <h4>Front End</h4>
            <div className="brigada">
              <div className="fst-addel">
                <li>HTML & Handlebars</li>
                <li>CSS & Sass</li>
                <li>Javascript</li>
              </div>
              <div className="snd-addel">
                <li>jQuerry</li>
                <li>GitHub</li>
              </div>
            </div>
          </ul>
        </div>
        <div className="exp">
          <ul>
            <h4>Back End</h4>
            <div className="brigada">
              <div className="fst-addel">
                <li>Node JS</li>
                <li>Express JS</li>
                <li>Mondo DB</li>
              </div>
              <div className="snd-addel">
                <li>Python</li>
                <li>PHP</li>
              </div>
            </div>
          </ul>
        </div>
        <div className="exp">
          <ul>
            <h4>Frameworks</h4>
            <div className="brigada">
              <div className="fst-addel">
                <li>React JS</li>
                <li>Vue JS</li>
                <li>Andular JS</li>
              </div>
              <div className="snd-addel">
                <li>Bootstrap</li>
                <li>GitLub</li>
              </div>
            </div>
          </ul>
        </div>
        <div className="exp">
          <ul>
            <h4>UI & UX designer</h4>
            <div className="brigada">
              <div className="fst-addel">
                <li>Figma</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
              </div>
              <div className="snd-addel">
                <li>Gulp</li>
                <li>Webpack</li>
              </div>
            </div>
          </ul>
        </div>
        <div className="exp">
          <ul>
            <h4>Game dev</h4>
            <div className="brigada">
              <div className="fst-addel">
                <li>C</li>
                <li>C#</li>
                <li>C++</li>
              </div>
              <div className="snd-addel">
                <li>Java</li>
                <li>Redux</li>
              </div>
            </div>
          </ul>
        </div>
        <div className="exp">
          <ul>
            <h4>Data base</h4>
            <div className="brigada">
              <div className="fst-addel">
                <li>Mongo DB</li>
                <li>MySQL</li>
                <li>Graph</li>
              </div>
              <div className="snd-addel">
                <li>IBM</li>
                <li>Amazon Aurora</li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Experience;
