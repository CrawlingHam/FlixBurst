import { useState } from "react";
import { HandleLogin } from "@/scripts";

export const useLogin = () => 
{
    const [isSigningIn, setIsSigningIn] = useState(false);

    const LogIn = (email: string, password: string) => 
    {
        HandleLogin(
        {
            email,
            password,
            isSigningIn,
            setIsSigningIn,
        });
    };

    return { LogIn };
};
