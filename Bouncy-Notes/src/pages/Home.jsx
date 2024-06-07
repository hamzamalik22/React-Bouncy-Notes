import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Welcome to my website!</h1>

        <p>
          This page should be protected by a PrivateRoutes component for
          authenticated users
        </p>
      </div>
    </>
  );
};

export default Home;
