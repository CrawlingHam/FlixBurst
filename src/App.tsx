import ChatBot from './components/AiChatbot/chatbotUi';
import ImageDownloader from './components/DownloadFromURL/fileDownloader';
import { Window } from '@tauri-apps/api/window';
import { AuthProvider } from './contexts/authContexts';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebase/firebase';
import { SignOut } from './scripts';
import {
  HomePage,
  LayoutFooter,
  LayoutHeader,
  SideNav,
} from './components/pages';
//import { LayoutHeader } from './components/pages/Widgets';

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // User is signed in
      } else {
        setUser(null); // User is signed out
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await SignOut();
      setUser(null);
      console.log('logout successfull');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthProvider user={user}>
      <div>
        <SideNav />

        <HomePage SignOut={handleSignOut} />
        <LayoutFooter />
      </div>
    </AuthProvider>
  );
};

export default App;

// pnpm tauri dev
