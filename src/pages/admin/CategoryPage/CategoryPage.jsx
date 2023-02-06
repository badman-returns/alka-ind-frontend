import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  TableContainer,
  TableHead,
  TableCell,
  Paper,
  Table,
  TableRow,
  TableBody,
  Stack,
} from "@mui/material";
import BaseDialog from "../../../components/BaseDialog/BaseDialog";
import CategoryForm from "./components/CategoryForm";

function CategoryPage({ categories, submitCategoryData, deleteCategory }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const enableDisableDialog = (category) => {
    setSelectedCategory(category);
    setOpenDialog(!openDialog);
  };

  const insertCategory = () => {
    setSelectedCategory(null);
    setOpenDialog(!openDialog);
  };

  const categoryForm = () => {
    return (
      <CategoryForm
        category={selectedCategory}
        handleClose={enableDisableDialog}
        submitCategoryData={submitCategoryData}
      />
    );
  };

  return (
    <React.Fragment>
      <Grid container flexDirection="column" gap={2}>
        <Grid item>
          <Grid container flexDirection="row" justifyContent="space-between">
            <Box>
              <Typography variant="h4">Category Page</Typography>
            </Box>
            <Box alignItems="center">
              <Button
                variant="contained"
                component="label"
                onClick={insertCategory}
              >
                Add Category
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid item>
          {categories && (
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                aria-label="carousel table"
                size="small"
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      <b>Category</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>Created On</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>Actions</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {categories.length > 0 &&
                    categories.map((category) => (
                      <TableRow
                        key={category.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center">{category.name}</TableCell>
                        <TableCell align="center">
                          {category.createdOn}
                        </TableCell>
                        <TableCell align="center">
                          <Stack
                            direction="row"
                            gap={1}
                            justifyContent="center"
                          >
                            <Button
                              variant="contained"
                              color="primary"
                              sx={{ color: "#fff" }}
                              onClick={() => enableDisableDialog(category)}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="contained"
                              color="danger"
                              sx={{ color: "#fff" }}
                              onClick={() => deleteCategory(category.id)}
                            >
                              Delete
                            </Button>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Grid>
      </Grid>
      <BaseDialog
        renderContent={categoryForm}
        handleClose={enableDisableDialog}
        open={openDialog}
      />
    </React.Fragment>
  );
}

export default CategoryPage;
