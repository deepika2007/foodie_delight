import React, { useCallback, useEffect, useState } from "react";
import { Typography, Grid, Box, CircularProgress } from "@mui/material";
import { fetch, remove } from "../services/api";
import RestaurantItem from "./RestaurantItem";

const ListRestaurants = () => {
  const [restaurants, setRestaurantState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRestaurantData(false);
  }, []);

  // Get Restaurant Data
  const fetchRestaurantData = useCallback(async () => {
    try {
      const response = await fetch();
      setRestaurantState(response.data || []);
    } catch (error) {
      console.error("Failed to fetch restaurant data:", error);
    } finally {
      setTimeout(() => setLoading(false), 600);
    }
  }, []);

  // Delete Restaurant Data
  const deleteRestaurantData = async (data) => {
    const result = await remove(data);
    if (result?.status === 200) {
      fetchRestaurantData();
    }
  };

  if (loading) {
    return (
      <Box className="center-div" sx={{ height: "100vh" }}>
        <CircularProgress size={80} color="warning" />
      </Box>
    );
  } else {
    return (
      <Box sx={{ padding: "2%" }}>
        <Typography gutterBottom className="restaurant_text">
          Restaurants
        </Typography>
        <Grid container spacing={4}>
          {restaurants.map((restaurant) => (
            <RestaurantItem
              key={restaurant?.id}
              restaurant={restaurant}
              deleteRestaurantData={deleteRestaurantData}
            />
          ))}
        </Grid>
      </Box>
    );
  }
};

export default ListRestaurants;
