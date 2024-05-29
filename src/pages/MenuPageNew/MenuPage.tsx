import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ProductComponent from "../../components/ProductComponent/ProductComponent";

export default function MenuPage() {
  const [active, setActive] = useState(false);
  const secondColor = "#A4755D";
  const activeColor = "#A4755D";
  const inActiveColor = "#797979";
  const productsList = [
    { productName: "ipsonLorem", price: "50$" },
    { productName: "ipsonLorem", price: "50$" },
    { productName: "ipsonLorem", price: "50$" },
    { productName: "ipsonLorem", price: "50$" },
    { productName: "ipsonLorem", price: "50$" },
    { productName: "ipsonLorem", price: "50$" },
    { productName: "ipsonLorem", price: "50$" },
  ];
  let title: string = "";
  const ListView = (products: { productName: string; price: string }[]) => {};
  const GrdiView = (products: { productName: string; price: string }[]) => {
    return (
      <Grid sx={{ margin: "1rem" }} container>
        {products.map((product, index) => {
          return (
            <Grid
              item
              sx={{ marginBottom: "2rem", padding: "10px" }}
              xs={6}
              key={index}
            >
              <ProductComponent
                product={product}
                cardElevation={8}
                key={index}
              />
            </Grid>
          );
        })}
      </Grid>
    );
  };
  const backgroundBluredDivStyle: React.CSSProperties = {
    backgroundColor: "#D9B18F",
    width: "100px",
    height: "100px",
    filter: "blur(46px)",
    position: "absolute",
    top: 10,
  };
  return (
    <Stack spacing={2}>
      <div style={backgroundBluredDivStyle}></div>
      <div
        className="titleContainer"
        style={{ display: "flex", marginBottom: "1vh" }}
      >
        <Typography variant="h4" style={{ color: secondColor }}>
          {title ? title.split("-")[0] : "MENU"}
        </Typography>
        <Typography variant="h4">{title ? title : "-TO-GO"}</Typography>
      </div>
      <div
        style={{
          ...backgroundBluredDivStyle,
          top: 50,
          right: 0,
          width: 100,
          height: 100,
        }}
      ></div>
      <Paper
        elevation={8}
        sx={{
          width: "90vw",
          height: "10vh",
          alignSelf: "center",
          borderRadius: "3rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            padding: "5px",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Button
            sx={{
              color: "white",
              backgroundColor: activeColor,
              borderRadius: "20px",
              padding: "20px",
            }}
          >
            Restaurant
          </Button>
          <Button
            sx={{
              color: inActiveColor,
              borderRadius: "20px",
              padding: "20px",
            }}
          >
            Caffe
          </Button>
        </Box>
      </Paper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "99vh",
          width: "99vw",
          backgroundColor: "white",
        }}
      >
        {GrdiView(productsList)}
      </Box>
    </Stack>
  );
}
