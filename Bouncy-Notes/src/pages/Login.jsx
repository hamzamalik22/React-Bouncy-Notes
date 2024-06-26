import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  const navigate = useNavigate();
  const { user, loginUser } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/bouncy-notes");
    }
  }, []);

  const { register, handleSubmit } = useForm();

  const handleForm = (data) => {
    let email = data.email;
    let password = data.password;

    let userInfo = {
      email,
      password,
    };

    loginUser(userInfo);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="login-register-container">
          <form onSubmit={handleSubmit(handleForm)}>
            <div className="form-field-wrapper">
              <label>Email:</label>
              <input
                className="border"
                {...register("email")}
                required
                type="email"
                name="email"
                placeholder="Enter email..."
              />
            </div>

            <div className="form-field-wrapper">
              <label>Password:</label>
              <input
                className="border"
                {...register("password")}
                type="password"
                name="password"
                placeholder="Enter password..."
              />
            </div>

            <div className="form-field-wrapper">
              <input type="submit" value="Login" className="btn" />
            </div>
          </form>

          <p>
            Don't have an account?{" "}
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
      <hr />
      <Footer />
    </>
  );
};

export default Login;
