import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { PasswordIsValid, EmailIsValid, ValidationResult } from "../../../../../scripts";

interface SignUpProps {
    handleLoginClick: () => void;
    handleGoogleLoginIconClick: () => void;
    handleSignUp: (Email: string, password: string) => void;
}

export const SignUpForm: React.FC<SignUpProps> = ({ handleSignUp, handleGoogleLoginIconClick, handleLoginClick}) => {
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPasssword, setConfirmPassword] = useState('');

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);
    const handleConfirmPasswordChange = (event) => setConfirmPassword(event.target.value);

    const handleSignUpButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log("Email: ", Email)
        console.log("new password: ", password)
        console.log("confirm password: ", confirmPasssword)

        const emailIsValidationResult = EmailIsValid(Email);
        const passwordIsValidationResult = PasswordIsValid(password, confirmPasssword);

        const emailIsValid = emailIsValidationResult.validEmail
        const passwordIsValid = passwordIsValidationResult.validPassword

        const validationResult = ValidationResult(emailIsValid, passwordIsValid)
        switch (validationResult) {
            case "Validation successful":
                console.log("validation success")
                handleSignUp(Email, password)
                break
            case "Validation unsuccessful":
                console.log(" validation failed")
                break
        }
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    return (
        <div className="w-96 bg-transparent border-2 border-black/30 backdrop-blur-lg shadow-md text-black rounded-lg p-10 mx-auto my-12">
            <form>
             <h1 className="text-4xl text-center">Sign Up</h1>

                {/* Email */}
                <div className="relative w-full h-12 my-8">
                    <input
                        type="text"
                        id="Email"
                        placeholder="Email"
                        required
                        value={Email}
                        onChange={handleEmailChange}
                        className="w-full h-full bg-transparent border-2 border-gray-200 rounded-full px-6 py-2 outline-none text-black placeholder-black"
                    />
                    <i className="bx bx-user absolute right-6 top-1/2 transform -translate-y-1/2 text-xl"></i>
                </div>

                {/* Password */}
                <div className="relative w-full h-12 my-8">
                    <input
                        type="text"
                        id="password"
                        placeholder="New Password"
                        required
                        value={password}
                        onChange={handlePasswordChange}
                        className="w-full h-full bg-transparent border-2 border-gray-200 rounded-full px-6 py-2 outline-none text-black placeholder-black"
                    />
                    <i className="bx bx-lock-alt absolute right-6 top-1/2 transform -translate-y-1/2 text-xl"></i>
                </div>

                {/* Confirm Password */}
                <div className="relative w-full h-12 my-8">
                    <input
                        type="text"
                        id="confirm-password"
                        placeholder="Confirm Password"
                        required
                        value={confirmPasssword}
                        onChange={handleConfirmPasswordChange}
                        className="w-full h-full bg-transparent border-2 border-gray-200 rounded-full px-6 py-2 outline-none text-black placeholder-black"
                    />
                    <i className="bx bx-lock-alt absolute right-6 top-1/2 transform -translate-y-1/2 text-xl"></i>
                </div>

                {/* Signup Button */}
                <button
                    type="submit"
                    className="w-full h-12 bg-black text-white font-semibold rounded-full shadow-md hover:shadow-lg"
                    id="signUpBtn"
                    onClick={handleSignUpButtonClick}
                >
                    Create Account
                </button>
            </form>

            <p className="text-center text-gray-500 my-4">___________________or___________________</p>

            {/* Social Icons */}
            <div>
                <FaGoogle size={25} onClick={handleGoogleLoginIconClick} />
            </div>

            <div className="text-center mt-6">
                <span>
                    Already Have An Account?
                    <button
                        className="ml-2 border-2 border-gray-300 rounded-lg px-4 py-1 bg-transparent font-bold hover:underline"
                        onClick={handleLoginClick}>
                        Login
                    </button>
                </span>
            </div>
        </div>
    )
}