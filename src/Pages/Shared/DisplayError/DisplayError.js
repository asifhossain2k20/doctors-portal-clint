import React from "react";
import { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const DisplayError = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();
  const navigate=useNavigate()
  const handleLogout = () => {
    logOut().then(data=>{
      navigate('/login')
    }).catch({});
  };
  return (
    <div>
      <h2 className="text-3xl font-bold text-red-500">Error Found</h2>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button onClick={handleLogout} className="btn btn-outline">
        LogOut
      </button>
    </div>
  );
};

export default DisplayError;
