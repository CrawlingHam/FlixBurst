import { useState } from "react";
import { HandleSignUp } from "@/scripts";

export const useSignUp = () => {
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [weakPassword, setWeakPassword] = useState(false);
    const [emailAlreadyInUse, setEmailAlreadyInUse] = useState(false);

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
        });
      };

    return { SignUp };
};
