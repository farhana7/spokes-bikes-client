import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Alert, Container, Typography } from "@mui/material";
import Product from "../Product/Product";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://stormy-sierra-88839.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Box>
      <Header></Header>
      <Box>
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
            sx={{
              mt: 5,
              mb: 5,
              fontSize: 24,
              color: "gray",
              fontWeight: "bold",
            }}
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
      </Box>
      <Footer></Footer>
    </Box>
  );
};

export default Products;
