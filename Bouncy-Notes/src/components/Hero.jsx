import React from "react";
import hero from "../images/hero.png";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

function Hero() {
  const { user } = useAuth();

  return (
    <>
      <div className="w-full h-screen bg-[#FBF7EF] pt-10 md:pt-0 md:flex">
        <div className="w-100 flex flex-col justify-center items-center md:items-start md:w-[45%] md:pl-10 font-['DM Sans']">
          <h1 className="text-3xl text-center pt-6 px-5 md:text-5xl lg:text-6xl md:px-6 md:text-left">
            Organize Your Tasks with Bouncy Notes
          </h1>
          <p className="text-[15px]  text-center pt-6 px-6 md:text-[18px] md:leading-normal md:px-8 md:text-left">
            Bouncy Notes is your digital assistant for task management. Use
            draggable sticky notes to organize, prioritize, and track tasks
            easily, making your to-do list fun and efficient.
          </p>

          {user ? (
            <Link
              to="/bouncy-notes"
              className="px-4 text-2xl mt-8 py-2 bg-[#2E4DE6] rounded text-white md:ml-8 hover:bg-blue-600"
            >
              Notes App
            </Link>
          ) : (
            <Link
              to="/register"
              className="px-4 text-2xl mt-8 py-2 bg-[#2E4DE6] rounded text-white md:ml-8 hover:bg-blue-600"
            >
              Sign up
            </Link>
          )}
        </div>
        <div className="w-100 md:w-[55%] md:flex md:justify-center md:items-center">
          <img
            className="mx-auto px-5 object-cover w-full "
            src={hero}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
