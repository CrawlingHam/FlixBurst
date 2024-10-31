import { auth, googleAuth } from '@/firebase/firebase';
import { signInWithPopup } from 'firebase/auth';

export const GoogleLogin = async () => {
  const result = signInWithPopup(auth, googleAuth)
    .then((res) => {
      console.log('user logged in', res);
    })
    .catch((err) => {
      console.log(err.code);
    });
  return result;
};
