import React from "react";

const Menu = ({ showMenu }) => {
  const scrollToFAQ = (e) => {
    e.preventDefault(); // Prevent default behavior of anchor tag
    const faqSection = document.getElementById("faq-section");
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = (e) => {
    e.preventDefault(); // Prevent default behavior of anchor tag
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        onClick={scrollToAbout}
        className="text-white hover:text-gray-300 px-3 py-2 block md:inline"
      >
        About
      </a>
      <a
        href="/faq"
        onClick={scrollToFAQ}
        className="text-white hover:text-gray-300 px-3 py-2 block md:inline"
      >
        FAQs
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
