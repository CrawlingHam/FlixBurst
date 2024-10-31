import { doSignInWithEmailAndPassword } from '@/firebase/auth';

interface SignUpProps {
  email: string;
  password: string;
  isSigningIn: boolean;
  setIsSigningIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export async function HandleLogin({
  email,
  password,
  isSigningIn,
  setIsSigningIn,
}: SignUpProps) {
  if (!isSigningIn) {
    setIsSigningIn(true);

    doSignInWithEmailAndPassword(email, password)
      .then((useCredentials) => {
        const user = useCredentials.user;
        console.log('user logged in', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  }
  setIsSigningIn(false);
}
