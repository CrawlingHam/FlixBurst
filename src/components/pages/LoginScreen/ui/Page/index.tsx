import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";

interface LoginFormProps
{
    handleSignUpFormClick: () => void;
    handleGoogleLoginIconClick: () => void;
    handleLogin: (username: string, password: string) => void;
    handlePrivacyPolicy: () => void;
    handleTermsAndConditions: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ handleSignUpFormClick, handleLogin, handleGoogleLoginIconClick, handlePrivacyPolicy, handleTermsAndConditions }) => 
{
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleLoginButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleLogin(username, password); // pass username & password to the parent component    
  }

  return (
      <div className="w-96 bg-transparent border-2 border-black/30 backdrop-blur-lg shadow-md text-black rounded-lg p-10 mx-auto my-12">
        <form>
          <h1 className="text-4xl text-center ">Login</h1>

          {/* Username */}
          <div className="relative w-full h-12 my-8">
            <input
              type="text"
              id="username"
              placeholder="Email"
              autoComplete="off"
              required
              value={username}
              onChange={handleUsernameChange}
              className="w-full h-full bg-transparent border-2 border-gray-200 rounded-full px-6 py-2 outline-none text-black placeholder-black"
            />
            <i className="bx bx-user absolute right-6 top-1/2 transform -translate-y-1/2 text-xl"></i>
          </div>

          {/* Password */}
          <div className="relative w-full h-12 my-8">
            <input
              type="text"
              id="password"
              placeholder="Password"
              autoComplete="off"
              required
              value={password}
              onChange={handlePasswordChange}
              className="w-full h-full bg-transparent border-2 border-gray-200 rounded-full px-6 py-2 outline-none text-black placeholder-black"
            />
            <i className="bx bx-lock-alt absolute right-6 top-1/2 transform -translate-y-1/2 text-xl"></i>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full h-12 bg-black text-white font-semibold rounded-full shadow-md hover:shadow-lg"
            id="loginButton"
            onClick={handleLoginButtonClick}
          >
            Log In
          </button>
        </form>

        <p className="text-center text-gray-500 my-4">__________________or__________________</p>

        {/* Social Icons */}
        <div>
          <FaGoogle className="hover:cursor-pointer" size={25} onClick={handleGoogleLoginIconClick}/>
        </div>

        <div className="text-center mt-6">
          <span>
            Don't have an account?
            <button className="ml-2 border-2 border-gray-300 rounded-lg px-4 py-1 bg-transparent font-bold hover:underline" onClick={handleSignUpFormClick}>
              Sign Up
            </button>
          </span>
        </div>
        
        <div className="mt-5">
          <p className="text-sm text-center">
            By signing up, you agree to our 
            <span 
              className="inline ml-1 hover:underline cursor-pointer mx-1" 
              onClick={handleTermsAndConditions}
            >
              Terms & Conditions
            </span> 
            as well as our
            <span 
              className="mx-1 inline hover:underline cursor-pointer" 
              onClick={handlePrivacyPolicy}
            >
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
  )
}
