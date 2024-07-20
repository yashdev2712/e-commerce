import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import { UseAuth } from "./Context/authContext";

const App = () => {
  const { authUser } = UseAuth();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="<Login />" />}
        />
        <Route
          path="/Login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/Signup"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
      </Routes>
    </>
  );
};

export default App;
