import { useState } from 'react';
import { GoogleLogin } from '@/scripts';
import { LoginForm, SignUpForm, Support } from '../pages';
import { TermsAndConditions, PrivacyPolicy } from '../pages/Widgets';
import { TimedLaunchAnimation } from '../pages/LaunchAnimation'; 
import { useLogin, useSignUp, LaunchAnimationTimer } from './constants';

export const LoginScreen: React.FC = () => 
{
  const [loading, setLoading] = useState(false);
  const [Page, setPage] = useState<string | null>(null);

  // Components that set the page that will be rendered
  const showTermsAndConditions = () => setPage('Terms And Conditions');
  const showPrivacyPolicy = () => setPage('Privacy Policy');
  const handleSignUpClick = () => setPage('Sign Up Page');
  const handleLoginClick = () => setPage('Login Page');
  const supportPage = () => setPage('Support Page');
  const backToHomePage = () => setPage(null);

  // Initiates Firebase Google Api Login
  const handleGoogleLoginIconClick = () => GoogleLogin();

  // Runs a component that keeps track of the launch animation duration
  LaunchAnimationTimer(setLoading)
  
  // Components that execute logins and signups
  const { LogIn } = useLogin()  
  const { SignUp } = useSignUp()

  return (
    <div className={`flex min-h-screen items-center justify-center bg-cover bg-center ${!loading ? 'bg-wavy-line-unmirrored' : ''} `}>
      {loading ? (
        <TimedLaunchAnimation />
      ) : (
        <div>
          {/* 404 Page */}
          {(Page === null || Page === 'Login Page') && (
            <LoginForm
              handleSignUpFormClick={handleSignUpClick}
              handleLogin={LogIn}
              handleGoogleLoginIconClick={handleGoogleLoginIconClick}
              handlePrivacyPolicy={showPrivacyPolicy}
              handleTermsAndConditions={showTermsAndConditions}
            />
          )}

          {/* Sign Up Form */}
          {Page === 'Sign Up Page' && (
            <SignUpForm
              handleLoginClick={handleLoginClick}
              handleGoogleLoginIconClick={handleGoogleLoginIconClick}
              handleSignUp={SignUp}
            />
          )}

          {/* Terms and Conditions Page */}
          {Page === 'Terms And Conditions' && (
            <TermsAndConditions onGoBack={backToHomePage} onSupport={supportPage} />
          )}

          {/* Privacy Policy Page */}
          {Page === 'Privacy Policy' && (
            <PrivacyPolicy onGoBack={backToHomePage} onSupport={supportPage} />
          )}

          {/* Support Page */}
          {Page === 'Support Page' && <Support />}
        </div>
      )}
    </div>
  );
};
