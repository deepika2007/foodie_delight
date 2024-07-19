import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RestaurantForm from "./RestaurantForm";

const RestaurantFormDialog = ({
  open,
  handleClose,
  initialValues,
  onSubmit,
}) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {!initialValues?.id ? "Add" : "Edit"} Restaurant
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <RestaurantForm
          initialValues={initialValues}
          onSubmit={onSubmit}
        />
      </DialogContent>
    </Dialog>
  );
};

export default RestaurantFormDialog;
