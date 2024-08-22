import React, {useState, useEffect} from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Register = () => {

     useEffect(() => {
       document.title = "Register";
     }, []);

     const [formData, setFormData] = useState({
       fullName: "",
       email: "",
       password: "",
       mobileNo: "",
       gender: "",
     });

     const navigate = useNavigate();
     const fetchData = async () => {
       const response = await fetch(
         "http://localhost:8081/api/users/register",
         {
           body: JSON.stringify(formData),
           method: `POST`,
           headers: {
             "Content-Type": "application/json",
           },
         }
       );
       console.log(response);
       if (!response.ok) {
         console.log("Error");
       }
       if (response.ok) {
         navigate("/login");
         console.log("Success");
       }
       const data = await response.json();
       console.log(data);
     };

     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       fetchData();
     };

    return (
      <>
        <Navbar />
        <div className="container my-3 py-3">
          <h1 className="text-center">Register</h1>
          <hr />
          <div className="row my-4 h-100">
            <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
              <div className="card p-4">
                <form
                  onSubmit={handleSubmit}
                  className="formh"
                  action="/registration"
                  method="post"
                  role="form"
                >
                  <div className="form-group my-3">
                    <label htmlFor="Name">Full Name</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Enter your name"
                      required=""
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="Email">Email address</label>
                    <input
                      onChange={handleChange}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      required=""
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="Password">Password</label>
                    <input
                      onChange={handleChange}
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      required=""
                    />
                  </div>
                  <div className="my-3">
                    <p>
                      Already has an account?{" "}
                      <Link
                        to="/login"
                        className="text-decoration-underline text-info"
                      >
                        Login
                      </Link>{" "}
                    </p>
                  </div>
                  <div className="text-center">
                    <button
                      className="my-2 mx-auto btn btn-dark"
                      type="submit"
                    >
                      Register
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
}

export default Register