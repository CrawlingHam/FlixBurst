import React, { useContext, useEffect, useState } from "react";
import LoginScreen from "@/components/LaunchAnimation/RegisterScreens";

const AuthContext = React.createContext({
    currentUser: null,
    signup: false,
    loading: true,
});

export function useAuth()
{
    return useContext(AuthContext);
}

export function AuthProvider({children, user})
{
    return user ? children : <LoginScreen/>
}
