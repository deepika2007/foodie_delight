import React, { useCallback, useEffect, useState } from "react";
import { Typography, Grid, Box } from "@mui/material";
import { fetch, remove } from "../services/api";
import RestaurantItem from "./RestaurantItem";

const ListRestaurants = () => {
  const [restaurants, setRestaurantState] = useState([]);

  useEffect(() => {
    fetchRestaurantData(false);
  }, []);

  // Get Restaurant Data
  const fetchRestaurantData = useCallback(async () => {
    const response = await fetch();
    setRestaurantState(response.data || []);
  }, []);

  // Delete Restaurant Data
  const deleteRestaurantData = async (data) => {
    const result = await remove(data);
    if (result?.status == 200) {
      fetchRestaurantData();
    }
  };

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
};

export default ListRestaurants;
