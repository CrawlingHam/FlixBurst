import { auth } from '@/firebase/firebase';
import { signOut } from 'firebase/auth';

export const SignOut = async () => {
  return await signOut(auth);
};
