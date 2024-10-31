import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import {
  PasswordIsValid,
  EmailIsValid,
  ValidationResult,
} from '../../../../../scripts';

interface SignUpProps {
  handleLoginClick: () => void;
  handleGoogleLoginIconClick: () => void;
  handleSignUp: (Email: string, password: string) => void;
}

export const SignUpForm: React.FC<SignUpProps> = ({
  handleSignUp,
  handleGoogleLoginIconClick,
  handleLoginClick,
}) => {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPasssword, setConfirmPassword] = useState('');

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) =>
    setConfirmPassword(event.target.value);

  const handleSignUpButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    console.log('Email: ', Email);
    console.log('new password: ', password);
    console.log('confirm password: ', confirmPasssword);

    const emailIsValidationResult = EmailIsValid(Email);
    const passwordIsValidationResult = PasswordIsValid(
      password,
      confirmPasssword,
    );

    const emailIsValid = emailIsValidationResult.validEmail;
    const passwordIsValid = passwordIsValidationResult.validPassword;

    const validationResult = ValidationResult(emailIsValid, passwordIsValid);
    switch (validationResult) {
      case 'Validation successful':
        console.log('validation success');
        handleSignUp(Email, password);
        break;
      case 'Validation unsuccessful':
        console.log(' validation failed');
        break;
    }
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="mx-auto my-12 w-96 rounded-lg border-2 border-black/30 bg-transparent p-10 text-black shadow-md backdrop-blur-lg">
      <form>
        <h1 className="text-center text-4xl">Sign Up</h1>

        {/* Email */}
        <div className="relative my-8 h-12 w-full">
          <input
            type="text"
            id="Email"
            placeholder="Email"
            autoComplete="off"
            required
            value={Email}
            onChange={handleEmailChange}
            className="h-full w-full rounded-full border-2 border-gray-200 bg-transparent px-6 py-2 text-black placeholder-black outline-none"
          />
          <i className="bx bx-user absolute right-6 top-1/2 -translate-y-1/2 transform text-xl"></i>
        </div>

        {/* Password */}
        <div className="relative my-8 h-12 w-full">
          <input
            type="text"
            id="password"
            placeholder="New Password"
            autoComplete="off"
            required
            value={password}
            onChange={handlePasswordChange}
            className="h-full w-full rounded-full border-2 border-gray-200 bg-transparent px-6 py-2 text-black placeholder-black outline-none"
          />
          <i className="bx bx-lock-alt absolute right-6 top-1/2 -translate-y-1/2 transform text-xl"></i>
        </div>

        {/* Confirm Password */}
        <div className="relative my-8 h-12 w-full">
          <input
            type="text"
            id="confirm-password"
            placeholder="Confirm Password"
            autoComplete="off"
            required
            value={confirmPasssword}
            onChange={handleConfirmPasswordChange}
            className="h-full w-full rounded-full border-2 border-gray-200 bg-transparent px-6 py-2 text-black placeholder-black outline-none"
          />
          <i className="bx bx-lock-alt absolute right-6 top-1/2 -translate-y-1/2 transform text-xl"></i>
        </div>

        {/* Signup Button */}
        <button
          type="submit"
          className="h-12 w-full rounded-full bg-black font-semibold text-white shadow-md hover:shadow-lg"
          id="signUpBtn"
          onClick={handleSignUpButtonClick}
        >
          Create Account
        </button>
      </form>

      <p className="my-4 text-center text-gray-500">
        ___________________or___________________
      </p>

      {/* Social Icons */}
      <div>
        <FaGoogle className="hover:cursor-pointer" size={25} onClick={handleGoogleLoginIconClick} />
      </div>

      <div className="mt-6 text-center">
        <span>
          Already Have An Account?
          <button
            className="ml-2 rounded-lg border-2 border-gray-300 bg-transparent px-4 py-1 font-bold hover:underline"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </span>
      </div>
    </div>
  );
};
