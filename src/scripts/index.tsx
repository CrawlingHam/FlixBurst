import { EmailIsValid } from "./InputValidation/EmailValidation";
import { PasswordIsValid } from "./InputValidation/PasswordValidation";
import { ValidationResult } from "./InputValidation/ValidationResults";
import { HandleSignUp } from "./functions/handleLogin";
import { HandleLogin } from "./functions/handleSignUp";
import { SignOut } from "./functions/handleSignOut";
import { GoogleLogin } from "./functions/handleGoogleLogin";
import { WindowCreation } from "./WindowCreation";

export {
    EmailIsValid,
    PasswordIsValid,
    ValidationResult,

    HandleLogin,
    HandleSignUp,
    SignOut,
    GoogleLogin,

    WindowCreation
}