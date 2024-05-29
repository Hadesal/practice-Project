import { Card, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import React from "react";
import im from "../../../src/assets/foodiesfeed.com_burger-with-melted-cheese.jpg";
interface Product {
  productName: string;
  price: string;
}

export default function ProductComponent({
  product,
  cardElevation,
}: {
  product: Product;
  cardElevation: number;
}) {
  return (
    <Paper
      elevation={cardElevation}
      sx={{ height: "100%", width: "100%", borderRadius: "10%" }}
    >
      <Card sx={{ borderRadius: "10%" }}>
        <CardMedia component={"img"} image={im} alt="foodImage" />
        <CardContent>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2" color={"#A4755D"}>
              {product.productName}
            </Typography>
            <Typography variant="body2" color={"#A4755D"}>
              {product.price}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Paper>
  );
}
