import React from "react";
import hero_img from '../images/hero_img.png'
import hero from '../images/hero.png'

function Hero() {
  return (
    <>
      <div className="w-full h-screen bg-[#FBF7EF] pt-10 md:flex">
        <div className="w-100 flex flex-col justify-center items-center md:items-start md:w-[50%] md:pl-10 font-['DM Sans']">
          <h1 className="text-4xl text-center pt-6 px-5 md:text-5xl lg:text-6xl md:px-6 md:text-left">
            Online sticky notes for sharing ideas digitally
          </h1>
          <p className="text-[20px] leading-none text-center pt-6 px-6">
            Miro's digital collaboration tool is a visual workspace where you
            can work with online sticky notes — and so much more.
          </p>
          <button className="px-4 text-2xl mt-8 py-2 bg-[#2E4DE6] rounded text-white md:ml-8">Sign up</button>
        </div>
        <div className="w-100 md:w-[50%] md:flex md:justify-center md:items-center">
            <img className="mx-auto px-5 object-cover w-full " src={hero} alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero;
