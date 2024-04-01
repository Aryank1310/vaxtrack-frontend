import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.trim() === "") {
      setErrorMessage("Please enter your username");
    } else if (password.trim() === "") {
      setErrorMessage("Please enter your password");
    } else {
      setErrorMessage("");
      console.log("Username:", username);
      console.log("Password:", password);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-teal-400 py-12 px-4">
      <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow-md flex">
        <div className="w-1/2 h-full mr-2">
          <img
            src="1.jpg"
            alt="Vaccination registration"
            className="h-full object-cover rounded-t-lg rounded-b-lg"
          />
        </div>

        <div className="w-1/2 flex flex-col justify-center relative">
          <h1 className="text-m font-bold absolute top-0 right-5 mt-6 mr-20">
            LOGIN
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-8"
              placeholder="Enter your username"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-4"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
            <button
              type="submit"
              className="w-full mt-6 py-2 text-center text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
            >
              LOGIN
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4 text-center">
            By Sign In/Registration, I am accepting the Terms of Services &
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
