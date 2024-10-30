import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/authContexts';
import { auth } from '@/firebase/firebase';
import { GoogleLogin, HandleLogin, HandleSignUp, SignOut } from '@/scripts';
import { onAuthStateChanged } from 'firebase/auth';
import { LoginForm, HomePage, SignUpForm, NotFoundPage, Support } from '../pages';
import { TermsAndConditions, PrivacyPolicy } from '../pages/Widgets';
import { InfiniteLaunchAnimation, TimedLaunchAnimation } from '../pages/LaunchAnimation';

const LoginScreen: React.FC = () => {
  // State to control whether to show login or sign-up form
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [emailAlreadyInUse, setEmailAlreadyInUse] = useState(false);
  const [currentPage, setCurrentPage] = useState<string | null>(null);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [weakPassword, setWeakPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false)

  // Set launch animation duration
  const launchAnimationTimer = 8200; // 2 second timer
  useEffect(() => {
    // Start the animation and hide background image
    setLoading(true);

    // Set a timer and end the animation when time is up, then fade in the background image
    const timer = setTimeout(() => {
      setLoading(false)
    }, launchAnimationTimer);

    return () => clearTimeout(timer)
  }, []);

  // Toggle between sign-up and login form
  const handleSignUpClick = () => {
    setCurrentPage("Sign Up Page")
  }
  const handleLoginClick = () => {
    setCurrentPage("Login Page")
  }
  const showPrivacyPolicy = () => {
    setCurrentPage("Privacy Policy")
  }
  const showTermsAndConditions = () => {
    setCurrentPage("Terms And Conditions")
  }
  const backToHomePage = () => {
    setCurrentPage(null)
  }
  const supportPage = () => {
    setCurrentPage("Support Page")

  }

  const LogIn = (email: string, password: string) => {
    HandleLogin({
      email: email,
      password: password,
      isSigningIn,
      setIsSigningIn,
      setIsLoggedIn,
    });
  }

  const SignUp = (email: string, password: string) => {
    HandleSignUp({
      email: email,
      password: password,
      isSigningIn,
      emailAlreadyInUse,
      invalidEmail,
      weakPassword,
      setIsSigningIn,
      setEmailAlreadyInUse,
      setInvalidEmail,
      setWeakPassword,
      setIsLoggedIn,
    });
  }
  const handleGoogleLoginIconClick = () => {
    console.log("que google sign in")
    GoogleLogin()
  }

  return (
    <div
      className={`flex justify-center items-center min-h-screen bg-cover bg-center ${!loading ? 'bg-wavy-line-unmirrored' : ''} `}>

      {loading ? (
        <TimedLaunchAnimation />
      ) : (
        <div>
          {/* 404 Page */}
          {(currentPage === null || currentPage === "Login Page") && (
            <LoginForm
              handleSignUpFormClick={handleSignUpClick}
              handleLogin={LogIn}
              handleGoogleLoginIconClick={handleGoogleLoginIconClick}
              handlePrivacyPolicy={showPrivacyPolicy}
              handleTermsAndConditions={showTermsAndConditions}
            />
          )}

          {/* Sign Up Form */}
          {currentPage === "Sign Up Page" && (
            <SignUpForm
              handleLoginClick={handleLoginClick}
              handleGoogleLoginIconClick={handleGoogleLoginIconClick}
              handleSignUp={SignUp}
            />
          )}

          {/* Terms and Conditions Page */}
          {currentPage === "Terms And Conditions" && (

            <PrivacyPolicy onGoBack={backToHomePage} onSupport={supportPage} />
          )}

          {/* Privacy Policy Page */}
          {currentPage === "Privacy Policy" && (
            <PrivacyPolicy onGoBack={backToHomePage} onSupport={supportPage} />
          )}

          {/* Support Page */}
          {currentPage === "Support Page" && (
            <Support />
          )}
        </div>
      )}
    </div>
  );
};

export default LoginScreen;
