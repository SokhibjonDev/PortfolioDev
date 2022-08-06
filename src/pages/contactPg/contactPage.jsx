import React from "react";
import "./contactPage.css";
const contactPage = () => {
  return (
    <div className="container" style={{marginTop: -100}}>
      <div className="title">
        <h1>Contact</h1>
      </div>
      <form action="#!">
        <div className="name">
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Surname" required />
        </div>
        <div className="email">
          <input type="email" placeholder="Email" required />
        </div>
        <textarea
          placeholder="Comment"
          name="comment"
          id="comment"
          cols="30"
          rows="10"
          required
        ></textarea>
        <button className="send">Send</button>
      </form>
    </div>
  );
};

export default contactPage;
