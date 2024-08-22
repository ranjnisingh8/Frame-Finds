import React from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <div className="card p-4">
              <form>
                <div className="form-group my-3">
                  <label htmlFor="Name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="Email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="Message">Message</label>
                  <textarea
                    className="form-control"
                    id="Message"
                    placeholder="Enter your message"
                  />
                </div>
                <div className="text-center">
                  <button className="my-2 mx-auto btn btn-dark" type="submit" disabled>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;