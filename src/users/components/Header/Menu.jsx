import React from "react";
import { Route, Routes } from "react-router-dom";

const Menu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "block" : "hidden"
      } md:flex justify-center items-center`}
    >
      <a
        href="/"
        className="text-white hover:text-gray-300 px-3 py-2 block md:inline"
      >
        Home
      </a>
      <a
        href="/about"
        className="text-white hover:text-gray-300 px-3 py-2 block md:inline"
      >
        About
      </a>
      <a
        href="/services"
        className="text-white hover:text-gray-300 px-3 py-2 block md:inline"
      >
        Download Certificate
      </a>
      <a
        href="/contact"
        className="text-white hover:text-gray-300 px-3 py-2 block md:inline"
      >
        FAQs
      </a>
      <a
        href="/contact"
        className="text-white hover:text-gray-300 px-3 py-2 block md:inline"
      >
        Help
      </a>
      <div className="bg-white p-2 rounded-md">
        <a
          href="/register"
          className="text-blue-800 hover:text-blue-600 px-3 py-2 block md:inline"
        >
          Register/Login
        </a>
      </div>
    </div>
  );
};

export default Menu;
