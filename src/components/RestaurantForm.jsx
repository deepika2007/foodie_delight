import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField, Button, Grid, Box } from "@mui/material";

const RestaurantForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    location: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, values, touched, handleChange }) => {
        return (
          <Form>
            <Grid container>
              <Grid item xs={12} sx={{ maxHeight: "80px", height: "80px" }}>
                <TextField
                  fullWidth
                  color="warning"
                  id="name"
                  name="name"
                  label="Name"
                  variant="outlined"
                  onChange={handleChange}
                  value={values?.name}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
              </Grid>
              <Grid item xs={12} sx={{ maxHeight: "80px", height: "80px" }}>
                <TextField
                  fullWidth
                  color="warning"
                  id="description"
                  name="description"
                  label="Description"
                  variant="outlined"
                  value={values?.description}
                  onChange={handleChange}
                  error={touched.description && Boolean(errors.description)}
                  helperText={touched.description && errors.description}
                />
              </Grid>
              <Grid item xs={12} sx={{ maxHeight: "80px", height: "80px" }}>
                <TextField
                  fullWidth
                  color="warning"
                  id="location"
                  name="location"
                  label="Location"
                  variant="outlined"
                  value={values?.location}
                  onChange={handleChange}
                  error={touched.location && Boolean(errors.location)}
                  helperText={touched.location && errors.location}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  color="warning"
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RestaurantForm;
