import {
  Card,
  Container,
  CardContent,
  Button,
  Stack,
  Typography,
} from "@mui/material";
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
    <Stack spacing={2} direction={"row"}>
      <Stack spacing={2} direction={"column"}>
        <Typography variant={"h2"}>Sign in</Typography>
        <Typography variant={"caption"}>
          Hi Welcome Back , You`ve been Missed
        </Typography>
        <InputComponent />
      </Stack>
    </Stack>
  );
}
