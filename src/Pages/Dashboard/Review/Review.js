import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Review.css";
// import * as React from 'react';
// import Box from '@mui/material/Box';
import Rating from "@mui/material/Rating";
// import Typography from '@mui/material/Typography';

const Review = () => {
  // export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  const [users, setUsers] = useState([]);
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  useEffect(() => {
    fetch("http://localhost:5000/viewers")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (e) => {
    // console.log(nameRef.current.value);
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    const newUser = { name: name, email: email, message: message };

    //send data to the server
    fetch("http://localhost:5000/viewers", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const addedUser = data;
        const newUsers = [...users, addedUser];
        setUsers(newUsers);
      });

    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";

    e.preventDefault();
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
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
          Reviews
        </Typography>
        <NavLink style={{ textDecoration: "none" }} to="/home">
          <Button
            variant="contained"
            style={{ width: "100%", backgroundColor: "#2a9d8f" }}
          >
            Go Home
          </Button>
        </NavLink>
      </Box>

      <br />
      <h2
        style={{
          mt: 5,
          mb: 5,

          fontWeight: "bold",
        }}
      >
        Found Users : {users.length}
      </h2>
      {/* <Container>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 15 }} xs={12} md={6}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: 27 }}
              variant="body1"
              gutterBottom
            >
              Found Users : {users.length}
            </Typography>

            <form onSubmit={handleAddUser}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                ref={nameRef}
                id="standard-basic"
                label="Your Name"
                name="name"
                // onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                ref={emailRef}
                id="standard-basic"
                label="Your Email"
                name="email"
                type="email"
                // onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                ref={messageRef}
                id="standard-basic"
                label="Your Message"
                name="message"
                type="text"
                // onBlur={handleOnBlur}
                variant="standard"
              />

              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
            </form>
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  {user.id} : {user.name} ______ {user.email}______
                  {user.message}
                </li>
              ))}
            </ul>
          </Grid>

          <Grid item sx={{ mt: 15 }} xs={12} md={6}>
            {/* <img style={{ width: "100%" }} src={login} alt="" /> */}
      {/* </Grid>
        </Grid>
      </Container> */}

      <div className="review-form">
        <div className="bg-yellow-100">
          <form onSubmit={handleAddUser}>
            <input
              style={{ width: "500px" }}
              ref={nameRef}
              placeholder="Your Name"
              type="text"
              name="name"
              id=""
            />

            <input
              style={{ width: "500px" }}
              ref={emailRef}
              placeholder="Your Email"
              type="email"
              name="email"
              id=""
            />
            <input
              style={{ width: "500px", height: "100px" }}
              ref={messageRef}
              placeholder="Your Message"
              type="text"
              name="message"
              id=""
            />

            <input
              // className=" bg-green-400"
              style={{ width: "100%", backgroundColor: "orange" }}
              type="submit"
              value="Submit"
            />
          </form>
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Typography component="legend">Controlled</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            {/* <Typography component="legend">Read only</Typography>
            <Rating name="read-only" value={value} readOnly />
            <Typography component="legend">Disabled</Typography>
            <Rating name="disabled" value={value} disabled />
            <Typography component="legend">No rating given</Typography>
            <Rating name="no-value" value={null} /> */}
          </Box>
        </div>
      </div>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} : {user.name} ______ {user.email}______{user.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Review;
