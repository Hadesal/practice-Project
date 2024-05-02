import React, { useState } from "react";
import {
  Card,
  CardContent,
  Container,
  Button,
  Box,
  Checkbox,
  Typography,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { Email } from "@mui/icons-material";
import { Styles } from "./RegisterPage.style";
import "react-phone-input-2/lib/material.css";
import { UserSignupData, CountryData } from "../../DataTypes/UserDataTypes";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import InputComponent from "../../components/InputComponent/InputComponent";
import { handleSignup } from "../../utils/Validators";
import { useNavigate } from "react-router-dom";
import style from "./styles.module.css";
export default function LoginPage() {
  const [userData, setUserData] = useState<UserSignupData>({
    userFullName: "",
    email: "",
    phone: { number: "", country: "" },
    password: "",
    rePassword: "",
    image: "",
    agreedTermsAndConditions: false,
  });
  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
    rePassword: "",
    agreed: false,
    fullName: "",
    phone: "",
  });

  const navigate = useNavigate();

  return (
    <Container sx={Styles.container}>
      <Card sx={Styles.card}>
        <CardContent sx={Styles.cardContent}>
          <div
            style={Styles.accountProfileIconContainer as React.CSSProperties}
          >
            <PersonAddAltRoundedIcon sx={Styles.accountProfileIcon} />
          </div>
          <h1>Register Account</h1>
          <InputComponent
            id="nameField"
            RightIcon={PersonRoundedIcon}
            label="Full Name"
            type="text"
            error={errorMessages.fullName ? true : false}
            helperText={errorMessages.fullName}
            required
            boxStyle={Styles.box}
            textFieldStyle={Styles.textField}
            onChange={(e) => {
              setUserData((prevState) => ({
                ...prevState,
                userFullName: e.target.value,
              }));
            }}
          />

          <Box sx={Styles.box}>
            <PhoneInput
              inputClass={
                errorMessages.phone.length > 2
                  ? style.phoneInputError
                  : style.phoneInput
              }
              placeholder={
                errorMessages.phone.length > 2
                  ? errorMessages.phone
                  : "Phone Number"
              }
              inputStyle={Styles.inputStyle}
              containerStyle={{ width: "15vw" }}
              onChange={(value, data: CountryData) => {
                setUserData((prevState) => ({
                  ...prevState,
                  phone: {
                    ...prevState.phone,
                    country: data?.name || "",
                    number: value,
                  },
                }));
              }}
            />
          </Box>
          <InputComponent
            id="emailField"
            type="email"
            label="Email"
            RightIcon={Email}
            required
            onChange={(e) => {
              setUserData((prevState) => ({
                ...prevState,
                email: e.target.value,
              }));
            }}
            textFieldStyle={Styles.textField}
            boxStyle={Styles.box}
            error={errorMessages.email ? true : false}
            helperText={errorMessages.email}
          />
          <InputComponent
            id="passwordField"
            required
            type="password"
            label="Password"
            textFieldStyle={Styles.textField}
            boxStyle={Styles.box}
            onChange={(e) => {
              setUserData((prevState) => ({
                ...prevState,
                password: e.target.value,
              }));
            }}
            error={errorMessages.password ? true : false}
            helperText={errorMessages.password}
          />
          <InputComponent
            id="rePasswordField"
            required
            type="password"
            label="re-Password"
            textFieldStyle={Styles.textField}
            boxStyle={Styles.box}
            onChange={(e) => {
              setUserData((prevState) => ({
                ...prevState,
                rePassword: e.target.value,
              }));
            }}
            error={errorMessages.rePassword ? true : false}
            helperText={errorMessages.rePassword}
          />
          <Box sx={Styles.checkbox}>
            <Checkbox
              required
              onChange={(e) => {
                setUserData((prev) => ({
                  ...prev,
                  agreedTermsAndConditions: e.currentTarget.checked,
                }));
              }}
            />
            <Typography
              variant="overline"
              sx={
                errorMessages.agreed
                  ? { color: "red", fontSize: 13 }
                  : { color: "#99cc33", fontSize: 13 }
              }
            >
              I agree the terms and conditions *
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="success"
            style={Styles.button}
            onClick={() => {
              handleSignup(userData, setErrorMessages);
            }}
          >
            Signup
          </Button>
          <Button
            sx={{ color: "#99cc33" }}
            onClick={() => {
              navigate("/dashboard");
            }}
            variant="text"
          >
            I already have account
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
