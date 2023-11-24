import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import {} from "@reduxjs/toolkit";
import { addUser, removeUser } from "../utils/userSlice";
import { logo } from "../utils/Constant";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const user = useSelector((state) => state.user);

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
  const handlegptsearch =()=>{

  }

  return (
    <div className="absolute  py-2 bg-gradient-to-b from-black z-30 w-screen flex justify-between">
      <img className="w-44" src={logo} alt="Logo" />
      {user && (
        <div className="flex h-1/2">
          <button className="mx-4 my-2 bg-purple-800 text-white rounded-lg py-4 px-2" onClick={handlegptsearch}>
            GPT search
          </button>
          <img alt="userLogo" src={user.photoURL} className="w-12" />
          <button className="text-white" onClick={signOutHandle}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
