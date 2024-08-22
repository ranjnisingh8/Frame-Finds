import React from "react";
import './App.css';

const Home = () => {
  return (
    <div className="hero border-1 pb-3">
      <div className="card bg-dark text-white border-0 ">
        <img
          className="card-img img-fluid"
          src="./assets/main.png.jpg"
          alt="Card"
          height={500}
        />
        <div className="card-img-overlay d-flex align-items-center">
          <div className="container">
          <h1 className="ak">
            Struggling to find merch of your favorite celebrities?
          </h1>
            <br />
            <p className="card-text  d-none d-sm-block description-text">
            Discover FameFinds: Your one-stop shop for all celebrity merch, saving you time and hassle!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;