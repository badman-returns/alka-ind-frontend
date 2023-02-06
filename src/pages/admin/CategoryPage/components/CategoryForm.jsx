import React, { useState } from "react";
import {
  DialogTitle,
  TextField,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { useEffect } from "react";

export default function CategoryForm({
  category,
  handleClose,
  submitCategoryData,
}) {
  const [name, setName] = useState(null);

  const handleCategorySubmit = (id) => {
    submitCategoryData(id, name);
    handleClose();
  };

  useEffect(() => {
    if (category !== null) {
      setName(category.name);
    }
  }, []);

  return (
    <>
      <DialogTitle>{category ? "Edit Category" : "Add Category"}</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          id="name"
          label="category"
          fullWidth
          type="text"
          variant="outlined"
          defaultValue={category ? category.name : ""}
          onChange={(e) => setName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={
            !category
              ? () => handleCategorySubmit()
              : () => handleCategorySubmit(category.id)
          }
        >
          Submit
        </Button>
      </DialogActions>
    </>
  );
}
