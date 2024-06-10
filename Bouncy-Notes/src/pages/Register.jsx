import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Register = () => {
  const navigate = useNavigate();
  const { user, registerUser } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  const { register, handleSubmit } = useForm();

  const handleForm = (data) => {
    const { name, email, password1, password2 } = data;

    // console.log(name);
    // console.log(email);
    // console.log(password1);
    // console.log(password2);

    if (password1 !== password2) {
      alert("Passwords don't match..");
      return;
    }

    let userInfo = {
      name,
      email,
      password1,
      password2,
    };

    registerUser(userInfo);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="login-register-container">
          <form onSubmit={handleSubmit(handleForm)}>
            <div className="form-field-wrapper">
              <label>Name:</label>
              <input
                className="border"
                {...register("name")}
                required
                type="text"
                name="name"
                placeholder="Enter name..."
              />
            </div>

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
                {...register("password1")}
                type="password"
                name="password1"
                placeholder="Enter password..."
              />
            </div>

            <div className="form-field-wrapper">
              <label>Confirm Password:</label>
              <input
                className="border"
                {...register("password2")}
                type="password"
                name="password2"
                placeholder="Confirm password..."
              />
            </div>

            <div className="form-field-wrapper">
              <input type="submit" value="Register" className="btn" />
            </div>
          </form>

          <p>
            Already have an account?{" "}
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
      <hr />
      <Footer />
    </>
  );
};

export default Register;
