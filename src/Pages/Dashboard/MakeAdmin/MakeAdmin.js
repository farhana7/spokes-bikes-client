import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          // setEmail("");
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
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
        Make an Admin
      </Typography>
      <NavLink style={{ textDecoration: "none" }} to="/home">
        <Button
          variant="contained"
          style={{ width: "100%", backgroundColor: "#2a9d8f" }}
        >
          Go Home
        </Button>
      </NavLink>

      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "50%", mt: 7 }}
          label="Email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <Button sx={{ mt: 7 }} type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Make Admin successfully !</Alert>}
    </Box>
  );
};

export default MakeAdmin;
