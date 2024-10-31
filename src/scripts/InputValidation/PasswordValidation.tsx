export function PasswordIsValid(password: string, confirmPassword: string) {
  const isLengthValid = password.length >= 8 && password.length <= 266; // Set minimum and maximum length
  const hasTwoLetters = (password.match(/[A-Za-z]/g) || []).length >= 2; // Set minimum amount of letters
  const hasTwoNumbers = (password.match(/[0-9]/g) || []).length >= 2; // Set minimum amount of numbers
  const passwordsMatch = password === confirmPassword; // Check if the two passwords match

  const validPassword =
    isLengthValid && hasTwoLetters && hasTwoNumbers && passwordsMatch; // Validate password based on the requirements above

  // Set error messages if any of the conditions are not met
  if (password === '' || confirmPassword === '' || !validPassword) {
    let message =
      'Password must be at least 8 characters long, contain at least 2 letters, 2 numbers, and match the confirm password.';
    if (!isLengthValid)
      message = 'Password must be between 8 and 266 characters.';
    else if (!hasTwoLetters)
      message = 'Password must contain at least 2 letters.';
    else if (!hasTwoNumbers)
      message = 'Password must contain at least 2 numbers.';
    else if (!passwordsMatch) message = 'Passwords do not match.';

    console.log('passwordIsValid1: ', message);

    return {
      validPassword,
      message,
    };
  }

  // Return valid password and message
  return {
    validPassword,
    message: 'Password validation successful',
  };
}
