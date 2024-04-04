import React, { useState, useEffect } from "react";
import axios from "axios";

const Menu = ({ showMenu }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({}); // Initialize with an empty object

  useEffect(() => {
    const fetchData = async () => {
      const storedUser = sessionStorage.getItem("userPhone");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        const response = await axios.get(`http://localhost:8081/api/patients/phone/${JSON.parse(storedUser).substring(3)}`);
        setUserData(response.data);
        sessionStorage.setItem('userData', JSON.stringify(response.data)); // Set userData to session storage
        console.log(response.data);
      }
    };

    fetchData();
  }, []);

  const scrollToFAQ = (e) => {
    e.preventDefault();
    const faqSection = document.getElementById("faq-section");
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`${showMenu ? "block" : "hidden"
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

      <div>
        {user ? (
          <a
            href="/myprofile"
            className="text-white hover:text-gray-300 px-3 py-2 block md:inline"
          >
            {userData.firstName}
          </a>
        ) : (
          <a href="/login" className="bg-white px-4 py-3 rounded-sm text-blue-008DDA hover:text-white hover:bg-blue-700">Register/Login</a>
        )}
      </div>
    </div>
  );
};

export default Menu;
