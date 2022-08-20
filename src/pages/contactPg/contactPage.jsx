import React from "react";
import "./contactPage.css";
const contactPage = () => {
  return (
    <div className="container" style={{ marginTop: -100 }}>
      <div className="title">
        <h1>Contact</h1>
      </div>
      <form action="#!">
        <div className="name">
          <input type="text" placeholder="Name" required='required' aria-required="true"/>
          <input type="text" placeholder="Surname" required='required' />
        </div>
        <div className="email">
          <input type="email" placeholder="Email" required='required' />
        </div>
        <textarea
          placeholder="Comment"
          name="comment"
          id="comment"
          cols="30"
          rows="10"
          required='required'
        ></textarea>
        <button className="send">Send</button>
        <img className="handshacking" src="/images/handshacking.jpg" alt="" />
        <div className="handchack"></div>
      </form>
      <div className="title"><h1>Hello world</h1></div>
      <div className="imgW">
        <img src="/images/mypro.png" alt="" />
      </div>
      <div className="infoW">
        <h4>Lorem, ipsum dolor.</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore nam ea quia distinctio optio esse assumenda laborum numquam. Placeat cumque velit perferendis cupiditate tempore magni praesentium, ipsam nulla sed voluptatem vitae nemo error quo? Earum, officiis ipsam. Molestias cum error aliquid repudiandae iure magnam est labore numquam, aperiam commodi asperiores earum quis consequatur suscipit assumenda. Aut, culpa. Dolorum error perferendis repellat <a href="#!">sokhibjondev@gmail.com</a> itaque. Tenetur, quod mollitia? Aspernatur facere assumenda aliquam obcaecati explicabo iusto ullam dignissimos dolor quasi pariatur magnam amet expedita exercitationem, quibusdam voluptas, ab praesentium molestiae soluta corrupti repellat quam illo, voluptatem iste? Consequuntur voluptas magnam magni facere provident.</p><br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore nam ea quia distinctio optio esse assumenda laborum numquam. Placeat cumque velit perferendis cupiditate tempore magni <a href="#!">sokhibjondev@gmail.com</a>praesentium, ipsam nulla sed voluptatem vitae nemo error quo? Earum, officiis ipsam. Molestias cum error aliquid repudiandae iure magnam est labore numquam, aperiam commodi asperiores earum quis consequatur suscipit assumenda. Aut, culpa. Dolorum error perferendis repellat  itaque. Tenetur, quod mollitia? Aspernatur facere assumenda aliquam obcaecati explicabo iusto ullam dignissimos dolor quasi pariatur magnam amet expedita exercitationem, quibusdam voluptas, ab praesentium molestiae soluta corrupti repellat quam illo, voluptatem iste? Consequuntur voluptas magnam magni facere provident.</p><br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore nam ea quia distinctio optio esse assumenda laborum numquam. Placeat cumque velit perfe<a href="#!">sokhibjondev@gmail.com</a> rendis cupiditate tempore magni praesentium, ipsam nulla sed voluptatem vitae nemo error quo? Earum, officiis ipsam. Molestias cum error aliquid repudiandae iure magnam est labore numquam, aperiam commodi asperiores earum quis consequatur suscipit assumenda. Aut, culpa. Dolorum error perferendis repellat itaque. Tenetur, quod mollitia? Aspernatur facere assumenda aliquam obcaecati explicabo iusto ullam dignissimos dolor quasi pariatur magnam amet expedita exercitationem, quibusdam voluptas, ab praesentium molestiae soluta corrupti repellat quam illo, voluptatem iste? Consequuntur voluptas magnam magni facere provident.</p>
      </div>
    </div>
  );
};

export default contactPage;
