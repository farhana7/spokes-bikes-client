import {
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
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useAuth from "../../../hooks/useAuth";

const Purchase = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const { user } = useAuth();
  //   const { name, knownfor, description, img, price } = product;

  useEffect(() => {
    fetch(`http://localhost:5000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  console.log(product);

  return (
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
          <form>
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
  );
};

export default Purchase;
