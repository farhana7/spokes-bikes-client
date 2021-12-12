import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.jpg";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    // console.log(field, value, newLoginData);
    // console.log(newLoginData);
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };

  return (
    <Box>
      <Header></Header>
      <Container>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 15 }} xs={12} md={6}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: 27 }}
              variant="body1"
              gutterBottom
            >
              Register
            </Typography>
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Name"
                  name="name"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Email"
                  name="email"
                  type="email"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Password"
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="ReType Your Password"
                  type="password"
                  name="password2"
                  onBlur={handleOnBlur}
                  variant="standard"
                />

                <Button
                  sx={{ width: "75%", m: 1 }}
                  type="submit"
                  variant="contained"
                >
                  Register
                </Button>
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  <Button variant="text">
                    Already Registered? Please Login
                  </Button>
                </NavLink>
              </form>
            )}
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">User created successfully !</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Grid>

          <Grid item sx={{ mt: 15 }} xs={12} md={6}>
            <img style={{ width: "100%" }} src={login} alt="" />
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </Box>
  );
};

export default Register;
