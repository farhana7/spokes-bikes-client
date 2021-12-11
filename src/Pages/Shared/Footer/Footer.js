import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box>
      <Typography
        variant="h6"
        style={{ backgroundColor: "black" }}
        sx={{ mt: 5, fontSize: 17, color: "burlywood" }}
      >
        <br />
        Spokes Bikes is part of Future plc, an international media group and
        leading digital publisher. Visit our corporate site.
        <br />
        <br />
        Future Publishing Limited Quay House, The Ambury, Bath BA1 1UA. England
        and Wales company registration number 2008885
        <br />
        <br />© All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
