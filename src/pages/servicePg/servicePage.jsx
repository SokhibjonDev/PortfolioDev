import React from "react";
import "./servicePage.css";
const servicePage = () => {
  return (
    <div className="container" style={{ marginTop: -100 }}>
      <div className="title">
        <h1>Service</h1>
      </div>
      <div className="ServiceCards">
        <div className="serviceCard">
          <i class="uil uil-clock"></i>
          <h1>24/7 Call Center Service</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            delectus animi ut possimus eius voluptate vitae
          </p>
        </div>
        <div className="serviceCard">
          <i class="uil uil-desktop-alt"></i>
          <h1>Web App Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            delectus animi ut possimus eius voluptate vitae
          </p>
        </div>
        <div className="serviceCard">
          <i class="uil uil-pagelines"></i>
          <h1>UI & UX Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            delectus animi ut possimus eius voluptate vitae
          </p>
        </div>
      </div>

      <h1 className="title">24/7 Call Center Service</h1>
      <div className="ServiceInfo">
        <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
        <h2>Hello world microsoft </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis aut
          cumque repellendus odio fuga iste obcaecati in maxime non itaque
          corrupti alias tenetur dolores iusto, perspiciatis nemo deserunt,
          dolorem enim nulla quod sed! Consequuntur, excepturi sapiente ipsam
          iusto, voluptatibus blanditiis eius assumenda eveniet voluptas tempora
          in dignissimos mollitia aut repellendus sed quidem Lorem ipsum dolor
          sit amet.
        </p>
        <p className="info">
          <div className="asd">
            <img
              width={600}
              height={350}
              style={{ borderRadius: 20 }}
              src="/images/24_7.jpeg"
              alt=""
            />
            <div className="cicle"></div>
          </div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis aut
          cumque repellendus odio fuga iste obcaecati in maxime non itaque
          corrupti alias tenetur dolores iusto, perspiciatis nemo deserunt,
          dolorem enim nulla quod sed! Consequuntur, excepturi sapiente ipsam
          iusto, voluptatibus blanditiis eius assumenda eveniet voluptas tempora
          in dignissimos mollitia autm Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Rerum quaerat numquam sunt nemo laborum aliquid
          ullam alias, ratione eos cum vel nam ipsam eum, illum voluptates velit
          eveniet sequi doloremque consequuntur debitis veritatis rem ad fuga?
          Dignissimos mollitia esse excepturi tenetur earum harum molestiae
          quas. Molestiae quia laboriosam tempore porro Lorem ipsum dolor sit
          amet consectetur adipisicing.
        </p>
      </div>
      <h1 className="title">client comments</h1>
      <div className="ServiceInfo">
        <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
        <h2>Hello world microsoft </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis aut
          cumque repellendus odio fuga iste obcaecati in maxime non itaque
          corrupti alias tenetur dolores iusto, perspiciatis nemo deserunt,
          dolorem enim nulla quod sed! Consequuntur, excepturi sapiente ipsam
          iusto, voluptatibus blanditiis eius assumenda eveniet voluptas tempora
          in dignissimos mollitia aut repellendus sed quidem Lorem ipsum dolor
          sit amet.
        </p>
        <p className="info">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis aut
          cumque repellendus odio fuga iste obcaecati in maxime non itaque
          corrupti alias tenetur dolores iusto, perspiciatis nemo deserunt,
          dolorem enim nulla quod sed! Consequuntur, excepturi sapiente ipsam
          iusto, voluptatibus blanditiis eius assumenda eveniet voluptas tempora
          in dignissimos mollitia autm Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Rerum quaerat numquam sunt nemo laborum aliquid
          ullam alias, ratione eos cum vel nam ipsam eum, illum voluptates velit
          eveniet sequi doloremque consequuntur debitis veritatis rem ad fuga?
          Dignissimos mollitia esse excepturi tenetur earum harum molestiae
          quas. Molestiae quia laboriosam tempore porro
          <div className="serviceCard asd">
            <div className="clientImg">
              <img src="/images/client.jpeg" alt="" />
            </div>
            <h4>Name Surname</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              modi tempora fugit eos, perferendis accusantium iste! In, ad? Ea
              commodi officia molestias minus in corporis sunt sed id, mollitia
              quis. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </p>
      </div>
    </div>
  );
};

export default servicePage;
