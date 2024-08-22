import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        At FameFinds, we're passionate about bringing fans closer to their favorite celebrities. 
        Our platform is dedicated to curating a diverse collection of celebrity merchandise, making 
        it easy for fans to find everything they love in one convenient place. Whether you're searching 
        for apparel, accessories, or collectibles, we've got you covered. Say goodbye to endless searching
         and hello to hassle-free shopping with FameFinds.
        </p>

        <h2 className="text-center py-4">Our Team</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="assets/arjun.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Arjun Kunwar</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="assets/priya.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Priyanshu Shah</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="assets/ranjni.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Ranjni</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Diva Goyal</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="assets/saanvi.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Saanvi Lohani</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="assets/sameer.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Sameer</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage