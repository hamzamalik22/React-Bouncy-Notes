import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  return (
    <nav className="bg-white-900 text-white p-4 border-b border-black">
      <div className="mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-logo md:pl-10 font-oleo font-black no-underline text-black"
        >
          Bouncy Notes
        </Link>
        <div className="flex items-center">
          {user ? (
            <>
              <Link
                to="/bouncy-notes"
                className="hidden md:block font-['DM Sans'] border bg-transparent border-black rounded-lg text-black py-2 px-4 mx-2 hover:bg-black hover:text-white"
              >
                Notes App
              </Link>
              <Link
                onClick={logoutUser}
                className="max-[400px]:hidden bg-red-600 font-['DM Sans'] hover:bg-red-400 text-white rounded-lg py-2 px-4  mx-2"
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hidden md:block font-['DM Sans'] border bg-transparent border-black rounded-lg text-black py-2 px-4 mx-2 hover:bg-black hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="max-[400px]:hidden bg-[#2B45C2] font-['DM Sans'] hover:bg-blue-700 text-white rounded-lg py-2 px-4  mx-2"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
