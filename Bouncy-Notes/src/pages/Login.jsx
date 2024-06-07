import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useAuth } from "../utils/AuthContext";
import { useForm } from "react-hook-form";


const Login = () => {
  const navigate = useNavigate();
  const { user, loginUser } = useAuth();

  useEffect(()=>{
    if(user){
      navigate('/')
    }
  }, [])

  const {register, handleSubmit} = useForm();

  const handleForm = (data)=>{
    console.log(data.email);
    console.log(data.password);

    let email = data.email;
    let password = data.password;

    let userInfo = {
      email,
      password
    }

    loginUser(userInfo);

  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="login-register-container">
          <form onSubmit={handleSubmit(handleForm)}>
            <div className="form-field-wrapper">
              <label>Email:</label>
              <input {...register('email')}
                required
                type="email"
                name="email"
                placeholder="Enter email..."
              />
            </div>

            <div className="form-field-wrapper">
              <label>Password:</label>
              <input {...register('password')}
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
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
