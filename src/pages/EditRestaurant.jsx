import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import RestaurantForm from "../components/RestaurantForm";
import { useNavigate, useParams } from "react-router-dom";
import { fetchById, update } from "../services/api";

const EditRestaurant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState(null);
  
  useEffect(() => {
    fetchData();
  }, []);

  //  Get Restaurant data according to ID
  const fetchData = async () => {
    const response = await fetchById(id);
    if (response?.status===200) {
      setInitialValues(response.data);
    } else {
      navigate("/");
    }
  };

  // Edit Restaurant Data
  const handleSubmit = async (values) => {
    const data = await update(values);
    if (data?.status===200) {
      navigate("/");
    }
  };
  return (
    <Box sx={{ width: "50%", margin: "auto", padding: "2%" }}>
      <Typography gutterBottom className="restaurant_text">
        Edit Restaurants
      </Typography>
      {initialValues && (
        <RestaurantForm initialValues={initialValues} onSubmit={handleSubmit} />
      )}
    </Box>
  );
};

export default EditRestaurant;
