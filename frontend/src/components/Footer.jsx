import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4">
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-facebook-f"></i></a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter"></i></a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-google"></i></a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram"></i></a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-github"></i></a>
        </section>
        <section className="mb-4">
          <p>
            FameFinds is a one-stop shop for all celebrity merch, saving you time and hassle!
          </p>
        </section>
        <section className="">
          <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
            © 2024 Copyright
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;