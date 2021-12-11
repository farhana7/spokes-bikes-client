import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        variant="h3"
        sx={{
          mt: 5,
          fontStyle: "italic",
          fontWeight: "bold",
          color: "#dc2f02",
        }}
      >
        More of Our Products
      </Typography>
      <Typography
        variant="h4"
        sx={{
          mt: 5,
          fontStyle: "italic",
          fontWeight: "bold",
          color: "#264653",
        }}
      >
        Top - Brands
      </Typography>
      <Typography
        variant="h5"
        sx={{ mt: 5, mb: 5, fontSize: 24, color: "gray", fontWeight: "bold" }}
      >
        Services We Provide
      </Typography>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
