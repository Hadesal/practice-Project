import Box from "@mui/material/Box";
import GridOnIcon from "@mui/icons-material/GridOn";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import React, { useState } from "react";
import { Card, CardContent, Typography, Divider, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PeopleIcon from "@mui/icons-material/People";
import LayersIcon from "@mui/icons-material/Layers";
import QrCodeIcon from "@mui/icons-material/QrCode";
import Styles from "./UserDashboardPage.Style";
import InventoryIcon from "@mui/icons-material/Inventory";
import { BackHand } from "@mui/icons-material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const buttonData = [
  { id: "home", icon: <HomeIcon />, label: "Home" },
  { id: "restaurants", icon: <RestaurantIcon />, label: "Restaurants" },
  { id: "staff", icon: <PeopleIcon />, label: "Staff" },
  { id: "categories", icon: <LayersIcon />, label: "Categories" },
  { id: "products", icon: <InventoryIcon />, label: "Products" },
  { id: "qrCode", icon: <QrCodeIcon />, label: "QR Code" },
  { id: "templates", icon: <ViewQuiltIcon />, label: "Templates" },
  { id: "plansAddons", icon: <GridOnIcon />, label: "Plans & Addons" },
  { id: "callWaiter", icon: <BackHand />, label: "Call Waiter" },
  { id: "feedbacks", icon: <QuestionAnswerIcon />, label: "Feedbacks" },
  { id: "settings", icon: <SettingsIcon />, label: "Settings" },
  { id: "support", icon: <SupportAgentIcon />, label: "Support" },
  { id: "signOut", icon: <PowerSettingsNewIcon />, label: "Sign out" },
];
export default function UserDashboardPage() {
  const [clickedId, setClickedId] = useState<string>();

  const handleClick = (id: string) => {
    setClickedId(id);
  };
  return (
    <div className="container" style={Styles.container}>
      <Card>
        <CardContent sx={Styles.cardContent as React.CSSProperties}>
          <Typography sx={{ color: "greenyellow", margin: "1vw" }} variant="h5">
            Dashboard
          </Typography>
          <Divider
            sx={{ width: "100%", background: "white" }}
            component={"ul"}
          />
          <Box sx={Styles.categoryListContainer}>
            {buttonData.map(({ id, icon, label }) => (
              <Button
                key={id}
                sx={Styles.button}
                startIcon={React.cloneElement(icon, {
                  style: {
                    ...Styles.buttonIcon,
                    color: clickedId === id ? "greenyellow" : "white",
                  },
                })}
                onClick={() => handleClick(id)}
                style={{ color: clickedId === id ? "greenyellow" : "" }}
              >
                <Typography
                  sx={{
                    ...Styles.typography,
                    color: clickedId === id ? "greenyellow" : "",
                  }}
                  variant="h6"
                >
                  {label}
                </Typography>
              </Button>
            ))}
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
