import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const Product = ({ product }) => {
  const { _id, name, knownfor, description, img, price } = product;

  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275, mb: 10 }}>
        <CardMedia
          component="img"
          //   height="140"
          style={{ width: "400px ", height: "300px", margin: "0 auto" }}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" color="#4a4e69" component="div">
            {name}
          </Typography>
          <br />
          <Typography sx={{ mb: 1.5 }} color="#dc2f02">
            Known for : {knownfor}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ textAlign: "left" }}
          >
            {description}
          </Typography>
          <br />
          <Typography sx={{ mb: 1.5 }} color="#dc2f02">
            Price : {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            style={{ textDecoration: "none" }}
            className="w-full"
            to={`/purchase/${_id}`}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "#4a4e69",
                width: "350px",
              }}
              // size="medium"
            >
              Purchase
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
