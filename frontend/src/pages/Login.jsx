import React,{useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isTrue, setIsTrue] = useState(false);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8081/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.log("Error:", response.statusText);
        return;
      }

      const data = await response.json();
      if (data == true) {
        console.log("Success:", data);
        localStorage.setItem("isAuthenticated", true);
        navigate("/");
        alert("Succesfully logged in")
      } else if (data == false) {
        setFormData({ email: "", password: "" });
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  localStorage.setItem("email", formData.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <div className="card p-4">
              <form className="formh" onSubmit={handleSubmit}>
                <div className="my-3">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="password">Password</label>
                  <input
                    className="form-control"
                    placeholder="Password"
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="my-3">
                  <p>
                    New Here?{" "}
                    <Link
                      to="/register"
                      className="text-decoration-underline text-info"
                    >
                      Register
                    </Link>{" "}
                  </p>
                </div>
                <div className="text-center">
                  <button className="my-2 mx-auto btn btn-dark" type="submit">
                    Login
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

export default Login;
