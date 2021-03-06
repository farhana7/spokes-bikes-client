import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Review from "../../Dashboard/Review/Review";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Product from "../Product/Product";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://stormy-sierra-88839.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Box>
      <Header></Header>
      <Banner></Banner>
      <Box>
        <Typography
          variant="h2"
          sx={{
            mt: 10,
            mb: 10,
            fontStyle: "italic",
            color: "#dc2f02",
            fontWeight: "bold",
          }}
        >
          Our Products
        </Typography>
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {products.slice(0, 6).map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </Grid>
        </Container>
      </Box>
      <Review></Review>
      <About></About>
      <Footer></Footer>
    </Box>
  );
};

export default Home;
