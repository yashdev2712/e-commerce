import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const isLoading = false;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const useEffect(() => {
  // const response = await fetch("http://localhost:3000/api/auth",{
  //   method:"POST",

  // })

  //   return
  // }, [third])

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md bg-white rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-8 mx-4">
        <h1 className="text-3xl font-semibold text-center mb-10">Login</h1>
        <span className="block text-center text-xl mb-8">Enchanted Pages</span>

        <div className="w-full mb-4">
          <label className="block text-lg mb-2">Username</label>
          <input
            type="text"
            placeholder="Enter your Username"
            className="input input-bordered input-primary w-full p-2"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className="w-full mb-4">
          <label className="block text-lg mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            className="input input-bordered input-primary w-full p-2"
            onChange={(e) => {
              setPassword.target.value;
            }}
          />
        </div>

        <Link
          to="/Signup"
          className="text-sm text-center hover:underline hover:text-blue-500 mt-2 inline-block"
        >
          Don't have an account
        </Link>

        <div>
          <button className="btn btn-block btn-sm mt-2" disabled={isLoading}>
            {isLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Login"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
