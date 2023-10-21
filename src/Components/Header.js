import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [signed, setSigned] = useState(true);
  const signOutHandle = () => {
    signOut(auth)
      .then(() => {
        setSigned(false);
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-30 w-full flex justify-between">
      <img
        className="w-48 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />
      {signed && (
        <div className="flex space-x-2 m-5 h-1/2">
          <img
            alt="userLogo"
            src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
            // className="w-44"
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
