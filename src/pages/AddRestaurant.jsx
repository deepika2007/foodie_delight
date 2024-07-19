import React from "react";
import { Box, Typography } from "@mui/material";
import RestaurantForm from "../components/RestaurantForm";
import { useNavigate } from "react-router-dom";
import { add } from "../services/api";

const AddRestaurant = () => {
  const initial = { name: "", description: "", location: "", id: "" };
  const navigate = useNavigate();

  // add restaurant data
  const handleSubmit = async (values) => {
    const data = await add(values);
    if (data?.status===200) {
      navigate("/");
    }
  };
  return (
    <Box sx={{ width: "50%", margin: "auto", padding: "2%" }}>
      <Typography gutterBottom className="restaurant_text">
        Add Restaurants
      </Typography>
      <RestaurantForm initialValues={initial} onSubmit={handleSubmit} />
    </Box>
  );
};

export default AddRestaurant;
