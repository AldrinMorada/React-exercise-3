import React from "react";
import { addProduct } from "../services/ProductService";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Container,
  Button,
  Typography,
} from "@mui/material";

import { useForm } from "react-hook-form";

const ProductForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    let product = data;
    addProduct(product);
    window.location.replace("/products/table");
  };
  return (
    <Container className="py-12">
      <Card>
        <CardContent>
          <Typography variant="h5" className="py-4 text-blue-700">
            ADD PRODUCT
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  name="name"
                  label="Product Name"
                  placeholder="Product Name"
                  variant="outlined"
                  fullWidth
                  required
                  {...register("name")}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  name="price"
                  label="Price"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  placeholder="Product Price"
                  variant="outlined"
                  fullWidth
                  required
                  {...register("price")}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  name="description"
                  label="Description"
                  multiline
                  rows={2}
                  placeholder="Product Description"
                  variant="outlined"
                  fullWidth
                  required
                  {...register("description")}
                />
              </Grid>

              <Grid xs={12} item>
                <Button variant="contained" component="label">
                  Upload File
                  <input type="file" hidden />
                </Button>
              </Grid>

              <Button
                variant="contained"
                type="submit"
                fullWidth
                className="my-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
                Save Product
              </Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductForm;
