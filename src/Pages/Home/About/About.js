import { Button, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import company from "../../../images/company.jpg";
import ye from "../../../images/ye.jpg";

const aboutBg = {
  background: `url(${ye})`,
  marginTop: 100,
  paddingTop: 25,
  height: 450,
};

const About = () => {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          mt: 20,
          fontStyle: "italic",
          fontWeight: "bold",
          color: "#264653",
        }}
      >
        About Us
      </Typography>

      <Box style={aboutBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              style={{
                width: "auto",
                marginTop: "-25px",
                height: 389,
              }}
              src={company}
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              color="green"
              sx={{
                textAlign: "left",
                fontSize: 17,
                fontWeight: "400",
                fontStyle: "italic",
              }}
            >
              Widely regarded as the bike industry's leading innovator of
              game-changing technologies, Spokes Bikes and its handcrafted
              bicycles continue to innovate across the World. The Spokes Bikes
              Corporation is an American division of Canadian conglomerate Dorel
              Industries that supplies bicycles. Our headquarters are in Wilton,
              Connecticut with engineering offices in Freiburg, Germany. Frames
              are manufactured in Taiwan. Bikes are assembled in Taiwan, as well
              as in the USA and in The Netherlands for the local markets.
            </Typography>
          </Grid>
        </Grid>
        <Button
          style={{ color: "green" }}
          sx={{ pt: 4, fontSize: 18, fontWeight: "bold" }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default About;
