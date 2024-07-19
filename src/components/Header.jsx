import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => (
  <AppBar position="static" sx={{ backgroundColor: "#ed6c02" }}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Foodie Delight App
      </Typography>

      <Button color="inherit" component={Link} to="/add">
        Add Restaurant
      </Button>
      <Button color="inherit" component={Link} to="/">
        List Restaurants
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
