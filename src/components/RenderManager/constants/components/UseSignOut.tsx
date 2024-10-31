import { User } from 'firebase/auth'; 
import { signOut } from 'firebase/auth';
import { auth } from '../../../../firebase/firebase';

export const useSignOut = (setUser: React.Dispatch<React.SetStateAction<User | null>>) => 
{    
    const SignOut = async () => 
    {
        try 
        {
            await signOut(auth);
            setUser(null);
            console.log('logout successfull');
        } 
        catch (error) 
        {
            console.log(error);
        }
    };

    return { SignOut };
};
