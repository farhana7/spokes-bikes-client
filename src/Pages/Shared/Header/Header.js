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
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

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
              fontWeight: "bold",
              color: "#dc2f02",
              flexGrow: 1,
            }}
          >
            Spokes Bikes
          </Typography>
          <NavLink style={{ textDecoration: "none" }} to="/home">
            <Button
              sx={{
                // fontWeight: "bold",
                fontSize: 20,
                color: "#dc2f02",
              }}
            >
              Home
            </Button>
          </NavLink>
          {/* <NavLink to="/addAProduct">
            <Button>Add A Product</Button>
          </NavLink> */}

          {user?.email ? (
            <Box>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                to="/dashboard"
              >
                <Button
                  sx={{
                    // fontWeight: "bold",
                    fontSize: 20,
                    color: "#dc2f02",
                  }}
                  color="inherit"
                >
                  Dashboard
                </Button>
              </NavLink>
              <Button
                sx={{
                  // fontWeight: "bold",
                  fontSize: 17,
                }}
                onClick={logOut}
                color="inherit"
              >
                Logout
              </Button>
            </Box>
          ) : (
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              <Button
                sx={{
                  // fontWeight: "bold",
                  fontSize: 17,
                }}
                color="inherit"
              >
                Login
              </Button>
            </NavLink>
          )}
          <>
            Signed in as:
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="/#login"
            >
              {user?.displayName}
            </a>
          </>

          <NavLink style={{ textDecoration: "none" }} to="/products">
            <Button
              variant="contained"
              sx={{
                // fontWeight: "bold",
                fontSize: 17,
                backgroundColor: "#2a9d8f",
              }}
            >
              Explore
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
