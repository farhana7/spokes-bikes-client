import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import "./Review.css";

const Review = () => {
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
            mt: 10,
            mb: 10,
            fontStyle: "italic",
            color: "#dc2f02",
            fontWeight: "bold",
          }}
        >
          Reviews
        </Typography>
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

      <div className="review-form">
        <div className="bg-yellow-100">
          <form onSubmit={handleAddUser}>
            <input
              style={{ width: "100%" }}
              ref={nameRef}
              placeholder="Your Name"
              type="text"
              name="name"
              id=""
            />

            <input
              style={{ width: "100%" }}
              ref={emailRef}
              placeholder="Your Email"
              type="email"
              name="email"
              id=""
            />
            <input
              style={{ width: "100%" }}
              ref={messageRef}
              placeholder="Your Message"
              type="text"
              name="message"
              id=""
            />

            <input
              className=" bg-green-400"
              style={{ width: "100%" }}
              type="submit"
              value="Submit"
            />
          </form>
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
