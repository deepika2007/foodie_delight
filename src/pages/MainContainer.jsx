import React, { useCallback, useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import ListRestaurants from "./ListRestaurants";
import RestaurantFormDialog from "../components/RestaurantFormDialog";
import { add, fetch, remove, update } from "../services/api";

const initial = { name: "", description: "", location: "", id: "" };

const MainContainer = () => {
  const [restaurantState, setRestaurantState] = useState({
    isModel: false,
    restaurants: [],
    initialValues: initial,
  });

  const handleModalRestaurant = () => {
    setRestaurantState((prev) => ({
      ...prev,
      isModel: !restaurantState?.isModel,
    }));
  };

  useEffect(() => {
    fetchRestaurantData(false);
  }, []);

  // Get Restaurant Data
  const fetchRestaurantData = useCallback(async (modal) => {
    const response = await fetch();
    setRestaurantState((prev) => ({
      ...prev,
      restaurants: response?.data || [],
      initialValues: initial,
      isModel: modal,
    }));
  }, []);

  // Edit Restaurant Data
  const editRestaurantData = async (data) => {
    setRestaurantState((prev) => ({
      ...prev,
      initialValues: data,
      isModel: !restaurantState?.isModel,
    }));
  };

  // add and edit restaurant data
  const handleSubmit = async (values) => {
    const data = values?.id ? await update(values) : await add(values);
    if (data?.status == 200) {
      fetchRestaurantData(false);
    }
  };

  // Delete Restaurant Data
  const deleteRestaurantData = async (data) => {
    const result = await remove(data);
    if (result?.status == 200) {
      fetchRestaurantData(false);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          padding: "1% 2%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom className="restaurant_text">
          Restaurants
        </Typography>
        <Button
          color="warning"
          variant="outlined"
          onClick={() => handleModalRestaurant()}
        >
          Add Restaurant
        </Button>
      </Box>
      {restaurantState?.restaurants.length > 0 && (
        <ListRestaurants
          restaurants={restaurantState?.restaurants}
          editRestaurantData={editRestaurantData}
          deleteRestaurantData={deleteRestaurantData}
        />
      )}
      {restaurantState?.isModel && (
        <RestaurantFormDialog
          open={restaurantState?.isModel}
          handleClose={handleModalRestaurant}
          initialValues={restaurantState?.initialValues}
          onSubmit={handleSubmit}
        />
      )}
    </Box>
  );
};

export default MainContainer;
