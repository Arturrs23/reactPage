import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-secondary">
      <div className="container mx-auto flex justify-between items-center py-4">
        <a className="text-xl font-bold text-white" href="#">Logo</a>
        <button className="navbar-toggler md:hidden focus:outline-none">
          <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </button>
        <div className="hidden md:flex md:items-center md:w-auto" id="navbarNav">
          <ul className="text-lg flex md:flex-grow">
            <li className="nav-item active">
              <a className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4" href="#">Stuff</a>
            </li>
            <li className="nav-item">
              <a className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400" href="#">Stuff</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
