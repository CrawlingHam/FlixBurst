import { useEffect } from "react"
import { auth } from '../../../../firebase/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

export const UserStateWatcher = (setUser: React.Dispatch<React.SetStateAction<User | null>>) => 
{
    useEffect(() => 
    {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => 
        {
            if (currentUser) 
            {
                setUser(currentUser); // User is signed in
            } 
            else 
            {
                setUser(null); // User is signed out
            }
        });
        
        return () => unsubscribe();
    }, []);
}
