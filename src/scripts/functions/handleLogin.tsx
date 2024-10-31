import React from 'react';
import { doCreateUserWithEmailAndPassword } from '@/firebase/auth';

interface LoginProps {
  email: string;
  password: string;
  isSigningIn: boolean;
  invalidEmail: boolean;
  weakPassword: boolean;
  emailAlreadyInUse: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSigningIn: React.Dispatch<React.SetStateAction<boolean>>;
  setInvalidEmail: React.Dispatch<React.SetStateAction<boolean>>;
  setWeakPassword: React.Dispatch<React.SetStateAction<boolean>>;
  setEmailAlreadyInUse: React.Dispatch<React.SetStateAction<boolean>>;
}

export async function HandleSignUp({
  setIsSigningIn,
  setIsLoggedIn,
  setEmailAlreadyInUse,
  setInvalidEmail,
  setWeakPassword,

  email,
  password,
  isSigningIn,
  emailAlreadyInUse,
  invalidEmail,
  weakPassword,
}: LoginProps) {
  console.log('yo');

  if (!isSigningIn) {
    setIsSigningIn(true);
    doCreateUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('user: ', user);
      })
      .catch((err) => {
        const errorCode = err.code;
        switch (errorCode) {
          case 'auth/email-already-in-use':
            setEmailAlreadyInUse(true); // display this for user later
            console.log('email already in use');
            break;
          case 'auth/invalid-email':
            setInvalidEmail(true);
            console.log('invalid email');
            break;
          case 'auth/weak-password':
            setWeakPassword(true);
            console.log('weak password');
            break;
          default:
            const errorMessage = err.message;
            console.log(errorCode, errorMessage);
            break;
        }
        emailAlreadyInUse ? console.log('Email is already in use.') : '';
        invalidEmail ? console.log('Invalid Email') : '';
        weakPassword ? console.log('Weak password') : '';

        setIsSigningIn(false);
        setIsLoggedIn(true);
      });
  }
}
