import { useState } from 'react';
import { User } from 'firebase/auth';
import { GoogleLogin } from '@/scripts';
import { TimedLaunchAnimation } from '../pages/LaunchAnimation';
import { HomePage, LoginForm, SignUpForm, Support } from '../pages';
import { TermsAndConditions, PrivacyPolicy, SideNav, LayoutFooter } from '../pages/Widgets';
import { useLogin, useSignUp, LaunchAnimationTimer, useSignOut, UserStateWatcher } from './constants';

export const LoginScreen: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [page, setPage] = useState<string | null>(null);

  // Watch for Auth State Change
  UserStateWatcher(setUser)

  // Runs a component that keeps track of the launch animation duration
  LaunchAnimationTimer(setLoading)
  
  // Components that set the page that will be rendered
  const showTermsAndConditions = () => setPage('Terms And Conditions');
  const showPrivacyPolicy = () => setPage('Privacy Policy');
  const handleSignUpClick = () => setPage('Sign Up Page');
  const handleLoginClick = () => setPage('Login Page');
  const supportPage = () => setPage('Support Page');
  const backToHomePage = () => setPage(null);

  // Initiates Firebase Google Api Login
  const handleGoogleLoginIconClick = () => GoogleLogin();

  // Components that execute logins, signups, and signouts
  const { LogIn } = useLogin()
  const { SignUp } = useSignUp()
  const { SignOut } = useSignOut(setUser)

  const chatbot = () => console.log("que chatbot")

  return (
    <div>
      {user ? (
        <div>
          <SideNav/>
          <HomePage SignOut={SignOut} chatbot={chatbot}/>
          <LayoutFooter/>
        </div>
      ) : (
        <div className={`flex min-h-screen items-center justify-center bg-cover bg-center ${!loading ? 'bg-wavy-line-unmirrored' : ''} `}>
          {loading ? (
            <TimedLaunchAnimation />
          ) : (
            <div>
              {/* 404 Page */}
              {(page === null || page === 'Login Page') && (
                <LoginForm
                  handleSignUpFormClick={handleSignUpClick}
                  handleLogin={LogIn}
                  handleGoogleLoginIconClick={handleGoogleLoginIconClick}
                  handlePrivacyPolicy={showPrivacyPolicy}
                  handleTermsAndConditions={showTermsAndConditions}
                />
              )}

              {/* Sign Up Form */}
              {page === 'Sign Up Page' && (
                <SignUpForm
                  handleLoginClick={handleLoginClick}
                  handleGoogleLoginIconClick={handleGoogleLoginIconClick}
                  handleSignUp={SignUp}
                />
              )}

              {/* Terms and Conditions Page */}
              {page === 'Terms And Conditions' && (
                <TermsAndConditions onGoBack={backToHomePage} onSupport={supportPage} />
              )}

              {/* Privacy Policy Page */}
              {page === 'Privacy Policy' && (
                <PrivacyPolicy onGoBack={backToHomePage} onSupport={supportPage} />
              )}

              {/* Support Page */}
              {page === 'Support Page' && <Support />}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
