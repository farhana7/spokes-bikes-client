import * as React from "react";
import Typography from "@mui/material/Typography";
import MyOrders from "../MyOrder/MyOrders";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const DashboardHome = () => {
  return (
    <Box>
      <Typography
        sx={{ fontSize: 31, color: "gray", fontStyle: "italic" }}
        paragraph
      >
        Content here
      </Typography>
      <NavLink style={{ textDecoration: "none" }} to="/home">
        <Button
          variant="contained"
          style={{ width: "100%", backgroundColor: "#2a9d8f" }}
        >
          Go Home
        </Button>
      </NavLink>

      <Typography paragraph>{/* <MyOrders></MyOrders> */}</Typography>
    </Box>
  );
};

export default DashboardHome;
