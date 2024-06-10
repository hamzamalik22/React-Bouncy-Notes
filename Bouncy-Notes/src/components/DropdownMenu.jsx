import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import { VscLayoutMenubar } from "react-icons/vsc";
import { FaUser } from "react-icons/fa";


const DropdownMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { logoutUser, user } = useAuth(); 

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="absolute">
      <div
        onClick={toggleMenu}
        className="absolute top-8 right-2 md:top-4 md:right-4 w-10 h-10 rounded-full bg-white flex justify-center items-center text-black cursor-pointer z-10"
      >
        <VscLayoutMenubar size='1.2em' />
      </div>
      {showMenu && (
        <div className="absolute top-20 right-4 w-32 md:w-40 md:top-16 bg-white rounded shadow-lg z-20">
          <ul className="flex flex-col p-2">
            <li>
                <Link className='text flex justify-center items-center border-2 rounded'><FaUser />&nbsp; {user.name}</Link>
            </li>
            <li>
              <Link to="/" className="block px-4 py-2 text-center hover:bg-gray-200">Home</Link>
            </li>
            <li>
              <button
                onClick={logoutUser}
                className="block w-full px-4 py-2 text-center hover:bg-gray-200"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
