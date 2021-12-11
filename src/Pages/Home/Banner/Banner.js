import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bann from "../../../images/bann.jpg";
import { Button, Typography } from "@mui/material";

const bannerBg = {
  background: `url(${bann})`,
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 550,
  //   border: "1px solid red",
};

const Banner = () => {
  return (
    <Box style={bannerBg} sx={{ mt: 2, fontStyle: "italic", flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item style={{ textAlign: "left" }} xs={12} md={6}>
          <Box>
            <Typography variant="h3" sx={{ mt: 5 }}>
              The Best Road Bikes
            </Typography>
            <Typography variant="h5" sx={{ fontSize: 24, color: "black" }}>
              Go Fast, Go Long, Go Comfortably ON these Amazing BIKES.
            </Typography>
            {/* <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}>
            Explore
          </Button> */}
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          {/* <img style={{ width: "auto" }} src={bann} alt="" /> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
