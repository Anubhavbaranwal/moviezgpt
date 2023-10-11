import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  const handletoogleform = () => {
    setIsSignForm(!isSignForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>
      <form className="w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        {isSignForm ? (
          <h1 className="font-bold text-3xl my-4">Sign In</h1>
        ) : (
          <h1 className="font-bold text-3xl my-4">Sign Up</h1>
        )}
        {!isSignForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignForm ? (
          <p className="py-4 cursor-pointer" onClick={handletoogleform}>
            New to Netfilx ? Sign Up
          </p>
        ) : (
          <p className="py-4 cursor-pointer" onClick={handletoogleform}>
            Already a User ? Sign In
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
