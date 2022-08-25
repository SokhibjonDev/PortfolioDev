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
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3018.670469723845!2d69.61773640690016!3d40.83520127171431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1661435123460!5m2!1sru!2s" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className="rgba"></div>
      </div>
      <div className="infoW">
        <h4>Lorem, ipsum dolor.</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore nam ea quia distinctio optio esse assumenda laborum numquam. Placeat cumque velit perferendis cupiditate tempore magni praesentium, ipsam nulla sed voluptatem vitae nemo error quo? Earum, officiis ipsam. Molestias cum error aliquid repudiandae iure magnam est labore numquam, aperiam commodi asperiores earum quis consequatur suscipit assumenda. Aut, culpa. Dolorum error perferendis repellat <a href="#!">sokhibjondev@gmail.com</a> itaque. Tenetur, quod mollitia? Aspernatur facere assumenda aliquam obcaecati explicabo iusto ullam dignissimos dolor quasi pariatur magnam amet expedita exercitationem, quibusdam voluptas, ab praesentium molestiae soluta corrupti repellat quam illo, voluptatem iste? Consequuntur voluptas magnam magni facere provident.</p><br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore nam ea quia distinctio optio esse assumenda laborum numquam. Placeat cumque velit perferendis cupiditate tempore magni <a href="#!">+998 94 404 56 40</a>praesentium, ipsam nulla sed voluptatem vitae nemo error quo? Earum, officiis ipsam. Molestias cum error aliquid repudiandae iure magnam est labore numquam, aperiam commodi asperiores earum quis consequatur suscipit assumenda. Aut, culpa. Dolorum error perferendis repellat  itaque. Tenetur, quod mollitia? Aspernatur facere assumenda aliquam obcaecati explicabo iusto ullam dignissimos dolor quasi pariatur magnam amet expedita exercitationem, quibusdam voluptas, ab praesentium molestiae soluta corrupti repellat quam illo, voluptatem iste? Consequuntur voluptas magnam magni facere provident.</p><br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore nam ea quia distinctio optio esse assumenda laborum numquam. Placeat cumque velit perfe<a href="#!">sokhibjondev@gmail.com</a> rendis cupiditate tempore magni praesentium, ipsam nulla sed voluptatem vitae nemo error quo? Earum, officiis ipsam. Molestias cum error aliquid repudiandae iure magnam est labore numquam, aperiam commodi asperiores earum quis consequatur suscipit assumenda. Aut, culpa. Dolorum error perferendis repellat itaque. Tenetur, quod mollitia? Aspernatur facere assumenda aliquam obcaecati explicabo iusto ullam dignissimos dolor quasi pariatur magnam amet expedita exercitationem, quibusdam voluptas, ab praesentium molestiae soluta corrupti repellat quam illo, voluptatem iste? Consequuntur voluptas magnam magni facere provident.</p>
      </div>
    </div>
  );
};

export default contactPage;
