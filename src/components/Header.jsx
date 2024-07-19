import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => (
  <AppBar position="static" sx={{ backgroundColor: "#ed6c02" }}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Foodie Delight App
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
