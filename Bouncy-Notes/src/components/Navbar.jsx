// src/components/Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white-900 text-white p-4 border-b border-black">
      <div className="mx-auto flex justify-between items-center">
        <div className="text-logo font-oleo font-black no-underline text-custom-black">
          Bouncy Notes
        </div>
        <div className="flex items-center">
          <button className="hidden md:block border bg-black border-white text-white font-bold py-2 px-4  mx-2">
            Login
          </button>
          <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4  mx-2">
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
