import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Faq from "../components/Faq";
import Footer from "../components/Footer"
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="bg-[#FBF7EF] ">
        <Hero />
        <Features />
        <Faq />

        <Testimonial />


        <Footer />

      </div>
    </>
  );
};

export default Home;
