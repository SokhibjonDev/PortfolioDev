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
                <li>HTML <i class="uil uil-check-circle"></i></li>
                <li>CSS & Sass <i class="uil uil-check-circle"></i></li>
                <li>Javascript <i class="uil uil-check-circle"></i></li>
              </div>
              <div className="snd-addel">
                <li>jQuerry <i class="uil uil-check-circle"></i></li>
                <li>GitHub <i class="uil uil-check-circle"></i></li>
              </div>
            </div>
          </ul>
        </div>
        <div className="exp">
          <ul>
            <h4>Back End</h4>
            <div className="brigada">
              <div className="fst-addel">
                <li>Node JS <i class="uil uil-check-circle"></i></li>
                <li>Express JS <i class="uil uil-check-circle"></i></li>
                <li>Handlebars<i class="uil uil-check-circle"></i></li>
              </div>
              <div className="snd-addel">
                <li>Python<i class="uil uil-times-circle"></i></li>
                <li>PHP<i class="uil uil-times-circle"></i></li>
              </div>
            </div>
          </ul>
        </div>
        <div className="exp">
          <ul>
            <h4>Frameworks</h4>
            <div className="brigada">
              <div className="fst-addel">
                <li>React JS <i class="uil uil-check-circle"></i></li>
                <li>Vue JS<i class="uil uil-times-circle"></i></li>
                <li>Andular JS<i class="uil uil-times-circle"></i></li>
              </div>
              <div className="snd-addel">
                <li>Bootstrap <i class="uil uil-check-circle"></i></li>
                <li>GitLub<i class="uil uil-times-circle"></i></li>
              </div>
            </div>
          </ul>
        </div>
        <div className="exp">
          <ul>
            <h4>UI & UX designer</h4>
            <div className="brigada">
              <div className="fst-addel">
                <li>Figma <i class="uil uil-check-circle"></i></li>
                <li>Photoshop <i class="uil uil-check-circle"></i></li>
                <li>Illustrator<i class="uil uil-times-circle"></i></li>
              </div>
              <div className="snd-addel">
                <li>Gulp<i class="uil uil-times-circle"></i></li>
                <li>Webpack<i class="uil uil-times-circle"></i></li>
              </div>
            </div>
          </ul>
        </div>
        <div className="exp">
          <ul>
            <h4>Game dev</h4>
            <div className="brigada">
              <div className="fst-addel">
                <li>C<i class="uil uil-times-circle"></i></li>
                <li>C#<i class="uil uil-times-circle"></i></li>
                <li>C++<i class="uil uil-times-circle"></i></li>
              </div>
              <div className="snd-addel">
                <li>Java<i class="uil uil-times-circle"></i></li>
                <li>Redux<i class="uil uil-times-circle"></i></li>
              </div>
            </div>
          </ul>
        </div>
        <div className="exp">
          <ul>
            <h4>Data base</h4>
            <div className="brigada">
              <div className="fst-addel">
                <li>Mongo DB <i class="uil uil-check-circle"></i></li>
                <li>MySQL<i class="uil uil-times-circle"></i></li>
                <li>Graph<i class="uil uil-times-circle"></i></li>
              </div>
              <div className="snd-addel">
                <li>IBM<i class="uil uil-times-circle"></i></li>
                <li>Amazon<i class="uil uil-times-circle"></i></li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Experience;
