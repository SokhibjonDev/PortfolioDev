import React from "react";
import "./experiencePage.css";
const experiencePage = () => {
  return (
    <div className="container" style={{ marginTop: -100 }}>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500"
        className="title"
      >
        <h1>Experience</h1>
      </div>

      <div className="ExpeienceCards">
        <div
          className="card"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          <div className="percent">
            <div className="dot"></div>
            <svg>
              <circle cx={70} cy={70} r={70}></circle>
              <circle cx={70} cy={70} r={70}></circle>
            </svg>
            <div className="number">
              <h2>
                64 <span>%</span>
              </h2>
              <p>HTML & CSS</p>
            </div>
          </div>
        </div>
        <div
          className="card"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          <div className="percent">
            <div className="dot"></div>
            <svg>
              <circle cx={70} cy={70} r={70}></circle>
              <circle cx={70} cy={70} r={70}></circle>
            </svg>
            <div className="number">
              <h2>
                50<span>%</span>
              </h2>
              <p>Javascript</p>
            </div>
          </div>
        </div>
        <div
          className="card"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          <div className="percent">
            <div className="dot"></div>
            <svg>
              <circle cx={70} cy={70} r={70}></circle>
              <circle cx={70} cy={70} r={70}></circle>
            </svg>
            <div className="number">
              <h2>
                44 <span>%</span>
              </h2>
              <p>Bootstrap</p>
            </div>
          </div>
        </div>
        <div
          className="card"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          <div className="percent">
            <div className="dot"></div>
            <svg>
              <circle cx={70} cy={70} r={70}></circle>
              <circle cx={70} cy={70} r={70}></circle>
            </svg>
            <div className="number">
              <h2>
                70 <span>%</span>
              </h2>
              <p>React JS</p>
            </div>
          </div>
        </div>
        <div
          className="card"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          <div className="percent">
            <div className="dot"></div>
            <svg>
              <circle cx={70} cy={70} r={70}></circle>
              <circle cx={70} cy={70} r={70}></circle>
            </svg>
            <div className="number">
              <h2>
                22 <span>%</span>
              </h2>
              <p>Redux</p>
            </div>
          </div>
        </div>
      </div>
      <h1
        data-aos="fade-down"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        className="titlecha"
      >
        Front End - React JS
      </h1>
      <p
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500"
        className="params"
      >
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application, and React will efficiently update
        and render just the right components when your data changes. Declarative
        views make your code more predictable and easier to debug.
        <br />
        <br />
        Build encapsulated components that manage their own state, then compose
        them to make complex UIs. Since component logic is written in JavaScript
        instead of templates, you can easily pass rich data through your app and
        keep state out of the DOM.
        <br />
        <br />
        We don’t make assumptions about the rest of your technology stack, so
        you can develop new features in React without rewriting existing code.
        React can also render on the server using Node and power mobile apps
        using React Native.
        <br />
        <br />
        Stack Overflow is a popular forum to ask code-level questions or if
        you’re stuck with a specific error. Read through the existing questions
        tagged with reactjs or ask your own!
      </p>
    </div>
  );
};

export default experiencePage;
