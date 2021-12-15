import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Pay = () => {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          mt: 5,
          mb: 5,
          fontStyle: "italic",
          color: "#dc2f02",
          fontWeight: "bold",
        }}
      >
        Pay
      </Typography>

      <NavLink style={{ textDecoration: "none" }} to="/home">
        <Button
          variant="contained"
          style={{ width: "100%", backgroundColor: "#2a9d8f" }}
        >
          Go Home
        </Button>
      </NavLink>
      <Typography sx={{ mt: 7 }} variant="h4">
        Payment system coming soon . . .
      </Typography>
    </Box>
  );
};

export default Pay;
