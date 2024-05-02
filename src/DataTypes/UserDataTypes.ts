export interface CountryData {
  name: string;
  dialCode: string;
  countryCode: string;
}

export interface UserSignupData {
  userFullName: string;
  email: string;
  phone: {
    number: string;
    country: string;
  };
  password: string;
  rePassword: string;
  image: string;
  agreedTermsAndConditions: boolean;
}
export interface UserSignInData {
  email: string;
  password: string;
}
