export function EmailIsValid(email: string)
{
    const validEmail = email.includes("@");

    if (!email || !validEmail) 
    {
        return {
            validEmail,
            message: "Invalid email. Email must contain '@'."
        };
    }
    return {
        validEmail,
        message: "Email validation successful"
    }
}
