import { Card, Container, CardContent, Button } from "@mui/material";
import React, { useState } from "react";
import InputComponent from "../../components/InputComponent/InputComponent";
import PersonIcon from "@mui/icons-material/Person";
import { Styles } from "./LoginPage.style";
import { UserSignupData } from "../../DataTypes/UserDataTypes";
import { handleSignIn } from "../../utils/Validators";

export default function LoginPage() {
  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState<UserSignupData>({
    userFullName: "",
    email: "",
    phone: { number: "", country: "" },
    password: "",
    rePassword: "",
    image: "",
    agreedTermsAndConditions: false,
  });

  return (
    <Container sx={Styles.container}>
      <Card sx={Styles.card}>
        <CardContent sx={Styles.cardContent}>
          <div
            className="iconContainer"
            style={{
              borderRadius: "50%",
              background: "rgb(153, 204, 51)",
              margin: 0,
              height: "120px",
              width: "115px",
              position: "absolute",
              top: "24vh",
            }}
          >
            <PersonIcon
              style={{ fontSize: "7rem", color: "white", margin: 0 }}
            />
          </div>
          <h1>Login</h1>
          <div>
            <InputComponent
              id="nameField"
              label="Email"
              type="text"
              error={errorMessages.email ? true : false}
              helperText={errorMessages.email}
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
          </div>
          <Button
            variant="contained"
            color="success"
            style={Styles.button}
            onClick={() => {
              handleSignIn(userData, setErrorMessages);
            }}
          >
            SignIn
          </Button>
          <div style={{ display: "flex", marginBottom: 15, height: 0 }}>
            <h4>Not Registered? </h4>
            <h4
              onClick={() => {
                console.log("hey");
              }}
              style={{
                color: "rgb(153, 204, 51)",
                marginLeft: "5px",
                cursor: "pointer",
              }}
            >
              SignUp
            </h4>
          </div>
          <div style={{ display: "flex", height: 0 }}>
            <h4>forgot password!? </h4>
            <h4
              onClick={() => {
                console.log("hey");
              }}
              style={{
                color: "rgb(153, 204, 51)",
                marginLeft: "5px",
                cursor: "pointer",
              }}
            >
              Reset password
            </h4>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
