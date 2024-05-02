import { UserSignInData, UserSignupData } from "../DataTypes/UserDataTypes";

export const validatePassword = (password: string): string => {
  // Example criteria: at least 8 characters, contains a number, a special character ".", and must match rePassword
  const passwordRegex = /^(?=.*[a-z])(?=.*\d)[A-Za-z\d.]{8,}$/; // Updated to include lowercase letters and numbers explicitly, with allowance for "."

  if (!passwordRegex.test(password)) {
    return "Password must be at least 8 characters long, contain at least one number, and one lowercase letter.";
  }
  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter.";
  }
  if (!password.includes(".")) {
    return "Password must have at least one special character ('.').";
  }
  return "";
};
export const validateRePassword = (
  password: string,
  rePassword: string
): string => {
  if (password !== rePassword) {
    return "Passwords do not match.";
  }
  return "";
};
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export const handleSignup = (
  userData: UserSignupData,
  setErrorMessages: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
      rePassword: string;
      agreed: boolean;
      fullName: string;
      phone: string;
    }>
  >
) => {
  if (userData.userFullName.length < 5) {
    setErrorMessages((prev) => ({
      ...prev,
      fullName: "Enter your full name please!",
    }));
  } else {
    setErrorMessages((prev) => ({
      ...prev,
      fullName: "",
    }));
  }
  if (userData.phone.number.length < 6) {
    setErrorMessages((prev) => ({
      ...prev,
      phone: "Make sure you entered your phone number",
    }));
  } else {
    setErrorMessages((prev) => ({ ...prev, phone: "" }));
  }
  if (!isValidEmail(userData.email)) {
    // Validate Email
    setErrorMessages((prev) => ({
      ...prev,
      email: "Invalid email format.",
    }));
    return; // Stop the signup process
  } else {
    setErrorMessages((prev) => ({ ...prev, email: "" }));
  }

  // Validate Password
  const passwordError = validatePassword(userData.password);
  if (passwordError) {
    setErrorMessages((prev) => ({ ...prev, password: passwordError }));
    return; // Stop the signup process
  } else {
    setErrorMessages((prev) => ({ ...prev, password: "" }));
  }
  const rePasswordError = validateRePassword(
    userData.password,
    userData.rePassword
  );
  if (rePasswordError) {
    setErrorMessages((prev) => ({ ...prev, rePassword: rePasswordError }));
    return;
  } else {
    setErrorMessages((prev) => ({
      ...prev,
      rePassword: "",
    }));
  }
  if (!userData.agreedTermsAndConditions) {
    setErrorMessages((prev) => ({
      ...prev,
      agreed: true,
    }));
    return;
  } else {
    setErrorMessages((prev) => ({
      ...prev,
      agreed: false,
    }));
  }
  console.log("Signup successful", userData);
};

export const handleSignIn = (
  userData: UserSignInData,
  setErrorMessages: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
    }>
  >
) => {};
