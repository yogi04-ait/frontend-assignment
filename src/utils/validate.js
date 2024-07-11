export const checkValidData = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);

    if (!isEmailValid) return "Invalid Email";
    if (!isPasswordValid) return "Incorrect Password";

    return null;

}