import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updatePassword } from 'firebase/auth'
import { auth } from './firebase'

// Create New user with Email & Password    
export const doCreateUserWithEmailAndPassword = async (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

// Sign in with Email & Password
export const doSignInWithEmailAndPassword = async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
}

// Sign out
export const doSignOut = () => {
    return auth.signOut();
}

// Reset password
export const doPasswordReset = (email: string) => {
    return sendPasswordResetEmail(auth, email);
}

// Change password if a user is signed in
export const doPasswordChange = (password: string) => {
    const user = auth.currentUser;
    if (user)
    {
        return updatePassword(user, password);
    }
    else
    {
        return Promise.reject(new Error('No User is currently signed in'));
    }
}

export const doSendEmailVerification = () => {
    const user = auth.currentUser;
    if (user)
    {
        return sendEmailVerification(user, {
            url: `${window.location.origin}/home`,
        });
    }
    else
    {
        return Promise.reject(new Error('No User is currently signed in'));
    }
}