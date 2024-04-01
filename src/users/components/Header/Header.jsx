import React, { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-blue-008DDA p-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {showMenu ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
          <div className="md:flex justify-center items-center hidden">
            <Menu showMenu={true} />
          </div>
        </div>
        <div className="md:hidden">
          <Menu showMenu={showMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
