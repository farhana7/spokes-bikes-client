import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="navbar"
        style={{ backgroundColor: "#264653" }}
        position="static"
      >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h2"
            component="div"
            sx={{
              mt: 1,
              fontStyle: "italic",
              textAlign: "left",
              color: "#dc2f02",
              flexGrow: 1,
            }}
          >
            Spokes Bikes
          </Typography>
          <NavLink to="/home">
            <Button
              sx={{
                fontWeight: "bold",
                color: "#dc2f02",
              }}
            >
              Home
            </Button>
          </NavLink>

          <Button color="inherit">Login</Button>

          <Button variant="contained" style={{ backgroundColor: "#2a9d8f" }}>
            Explore
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
