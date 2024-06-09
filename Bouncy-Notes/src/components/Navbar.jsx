import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white-900 text-white p-4 border-b border-black">
      <div className="mx-auto flex justify-between items-center">
        <Link to='/' className="text-logo md:pl-10 font-oleo font-black no-underline text-black">
          Bouncy Notes
        </Link>
        <div className="flex items-center">
          <button className="hidden md:block font-['DM Sans'] border bg-transparent border-black rounded-lg text-black py-2 px-4 mx-2 hover:bg-black hover:text-white">
            Login
          </button>
          <button className="bg-[#2B45C2] font-['DM Sans'] hover:bg-blue-700 text-white rounded-lg py-2 px-4  mx-2">
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
