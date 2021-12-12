import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import BookingModal from "../BookingModal/BookingModal";

const Purchase = () => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const { user } = useAuth();
  // const { name, knownfor, description, img, price } = product;
  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetch(`http://localhost:5000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  console.log(product);

  return (
    <Box>
      <Header></Header>
      <>
        <Container>
          <Typography
            variant="h2"
            sx={{
              mt: 7,
              mb: 5,
              fontStyle: "italic",
              color: "#dc2f02",
              fontWeight: "bold",
            }}
          >
            Purchase
          </Typography>
          {bookingSuccess && (
            <Alert severity="success">Ordered Successfully !</Alert>
          )}
          <Grid container spacing={2}>
            <Grid item sx={{ mt: 15 }} xs={12} md={6}>
              {/* <Grid item xs={4} sm={4} md={4}> */}
              <Card sx={{ minWidth: 275, mb: 10 }}>
                <CardMedia
                  component="img"
                  //   height="140"
                  style={{ width: "400px ", height: "300px", margin: "0 auto" }}
                  image={product.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="h5" color="#4a4e69" component="div">
                    {product.name}
                  </Typography>
                  <br />
                  <Typography sx={{ mb: 1.5 }} color="#dc2f02">
                    Known for : {product.knownfor}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ textAlign: "left" }}
                  >
                    {product.description}
                  </Typography>
                  <br />
                  <Typography sx={{ mb: 1.5 }} color="#dc2f02">
                    Price : {product.price}
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
              {/* </Grid> */}
            </Grid>
            <Grid item sx={{ mt: 15 }} xs={12} md={6}>
              <form onSubmit={handleFormSubmit}>
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  defaultValue={user.displayName}
                  //   label="Your Name"
                  name="displayName"
                  // onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  defaultValue={user.email}
                  //   label="Your Email"
                  name="email"
                  type="email"
                  // onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Phone Number"
                  type="number"
                  name="number"
                  // onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Address"
                  type="text"
                  name="address"
                  // onBlur={handleOnBlur}
                  variant="standard"
                />

                <Button
                  onClick={handleBookingOpen}
                  sx={{ width: "75%", m: 1 }}
                  type="submit"
                  variant="contained"
                >
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
        </Container>
        <BookingModal
          product={product}
          openBooking={openBooking}
          handleBookingClose={handleBookingClose}
          setBookingSuccess={setBookingSuccess}
        ></BookingModal>
      </>
      <Footer></Footer>
    </Box>
  );
};

export default Purchase;
