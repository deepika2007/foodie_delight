import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  CardActionArea,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ListRestaurants = ({
  restaurants,
  editRestaurantData,
  deleteRestaurantData,
}) => {
  return (
    <Box sx={{ padding: "2%" }}>
      <Grid container spacing={4}>
        {restaurants.map((restaurant, index) => (
          <Grid item xs={12} sm={6} md={3} key={restaurant.id}>
            <Card
              sx={{
                maxWidth: 345,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                "&:hover .icon-buttons": {
                  display: "flex",
                },
              }}
            >
              <Box className="icon-buttons">
                <EditIcon
                  className="action_icon"
                  onClick={() => editRestaurantData(restaurant)}
                />
                <DeleteIcon
                  className="action_icon"
                  onClick={() => deleteRestaurantData(restaurant.id)}
                />
              </Box>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={require(`../assests/images/img${restaurant.imageNumber}.jpg`)}
                  alt={restaurant.name}
                />
                <CardContent>
                  <Box className="d-flex">
                    <Typography className="restaurant_name">
                      {restaurant.name}
                    </Typography>
                    <Box className="center-div">
                      <StarIcon color="warning" />
                      <Typography variant="subtitle1" sx={{ pl: 0.5 }}>
                        4.3
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    className="restaurant_description"
                  >
                    {restaurant.description}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {restaurant.location}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ListRestaurants;
