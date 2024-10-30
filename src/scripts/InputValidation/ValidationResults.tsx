export function ValidationResult(emailIsValid: boolean, passwordIsValid: boolean)
{
    const validationSuccessMessage = "Validation successful"
    const validationFailedMessage = "Validation unsuccessful"
    
    if ((!emailIsValid) || (!passwordIsValid)) return validationFailedMessage

    return validationSuccessMessage
}
