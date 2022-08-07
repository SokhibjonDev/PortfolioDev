import React from "react";
import "./portfolioPage.css";
const portfolioPage = () => {
  return (
    <div className="container" style={{ marginTop: -100 }}>
      <div className="title">
        <h1>Portfolios</h1>
      </div>
      <div className="portfolios">
        <div className="PortfolioCard">
          <div className="PortImg">
            <img src="/images/kombo.png" alt="" />
          </div>
          <div className="PortInfo">
            <span>pizzeria</span>
            <h2>Combo pizza</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam possimus beatae, molestiae illo et a vitae? Officiis ducimus nulla dolor eveniet excepturi, quis <a href="#!">Pizzeria</a> rerum, amet vero nemo eos hic deserunt aliquid ea iusto placeat? Pariatur, non. Cupiditate modi atque beatae quidem magnam, qui tempore laborum officia assumenda perferendis, aperiam facilis.</p>
          </div>
        </div>
        <div className="PortfolioCard">
          <div className="PortInfo">
            <span>mypro</span>
            <h2>Computer service</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam possimus beatae, molestiae illo et a vitae? Officiis ducimus nulla dolor eveniet excepturi, quis rerum, amet vero nemo eos hic deserunt aliquid ea iusto placeat? Pariatur, non. Cupiditate modi atque beatae quidem magnam, qui tempore laborum officia assumenda perferendis, aperiam facilis.</p>
          </div>
          <div className="PortImg">
            <img src="/images/mypro.png" alt="" />
          </div>
        </div>
        <div className="PortfolioCard">
          <div className="PortImg">
            <img src="/images/porten.png" alt="" />
          </div>
          <div className="PortInfo">
            <span>porten</span>
            <h2>Men shop</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam possimus beatae, molestiae illo et a vitae? Officiis ducimus nulla dolor eveniet excepturi, quis rerum, amet vero nemo eos hic deserunt aliquid ea iusto placeat? Pariatur, non. Cupiditate modi atque beatae quidem magnam, qui tempore laborum officia assumenda perferendis, aperiam facilis.</p>
          </div>
        </div>
        <div className="PortfolioCard">
          <div className="PortInfo">
            <span>iknow</span>
            <h2>English Education</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam possimus beatae, molestiae illo et a vitae? Officiis ducimus nulla dolor eveniet excepturi, quis rerum, amet vero nemo eos hic deserunt aliquid ea iusto placeat? Pariatur, non. Cupiditate modi atque beatae quidem magnam, qui tempore laborum officia assumenda perferendis, aperiam facilis.</p>
          </div>
          <div className="PortImg">
            <img src="/images/iknow.png" alt="" />
          </div>
        </div>
        <div className="PortfolioCard">
          <div className="PortImg">
            <img src="/images/north.png" alt="" />
          </div>
          <div className="PortInfo">
            <span>Severyanochka</span>
            <h2>grocery store</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam possimus beatae, molestiae illo et a vitae? Officiis ducimus nulla dolor eveniet excepturi, quis rerum, amet vero nemo eos hic deserunt aliquid ea iusto placeat? Pariatur, non. Cupiditate modi atque beatae quidem magnam, qui tempore laborum officia assumenda perferendis, aperiam facilis.</p>
          </div>
        </div>
        <div className="PortfolioCard">
          <div className="PortInfo">
            <span>panteon</span>
            <h2>MARS</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam possimus beatae, molestiae illo et a vitae? Officiis ducimus nulla dolor eveniet excepturi, quis rerum, amet vero nemo eos hic deserunt aliquid ea iusto placeat? Pariatur, non. Cupiditate modi atque beatae quidem magnam, qui tempore laborum officia assumenda perferendis, aperiam facilis.</p>
          </div>
          <div className="PortImg">
            <img src="/images/panteon.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfolioPage;
