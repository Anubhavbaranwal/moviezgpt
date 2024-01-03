import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import {} from "@reduxjs/toolkit";
import { addUser, removeUser } from "../utils/userSlice";
import { logo, userlogo } from "../utils/Constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/Constant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGpt = useSelector((store) => store.gpt.showGptSearch);
  const user = useSelector((state) => state.user);
  console.log(user);
  const signOutHandle = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {});
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handlegptsearch = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute  py-2 bg-gradient-to-b from-black z-30 w-full flex justify-between flex-col md:flex-row">
      <img className="w-44 h-16 mx-auto md:mx-0" src={logo} alt="Logo" />
      {user && (
        <div className="flex p-3">
          {showGpt && (
            <select
              className="py-1 px-4 m-4 bg-gray-900 text-white rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="mx-4 my-4 px-4 bg-purple-800 text-white rounded-lg "
            onClick={handlegptsearch}
          >
            {showGpt ? "Home Page" : "GPT search"}
          </button>
          <img
            alt="userLogo"
            src={userlogo}
            className="w-12 h-12 hidden md:block"
          />
          <button className="text-white" onClick={signOutHandle}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
