import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  openBooking,
  handleBookingClose,
  product,
  setBookingSuccess,
}) => {
  const { name, price } = product;
  const { user } = useAuth();
  const initialInfo = {
    displayName: user.displayName,
    email: user.email,
    phone: "",
    address: "",
  };

  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    // console.log(newInfo);
    setBookingInfo(newInfo);
  };

  const handleBookingSubmit = (e) => {
    //collect data
    const purchase = {
      ...bookingInfo,
      price,
      productName: name,
    };

    // send to the server
    // console.log(purchase);
    fetch("http://localhost:5000/purchases", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchase),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSuccess(true);
          handleBookingClose();
        }
        // console.log(data);
      });

    e.preventDefault();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleBookingSubmit}>
            <TextField
              //   label="Size"
              sx={{ width: "90%", m: 1 }}
              disabled
              id="outlined-size-small"
              defaultValue={price}
              size="small"
            />
            <TextField
              //   label="Size"
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              name="displayName"
              onBlur={handleOnBlur}
              defaultValue={user.displayName}
              size="small"
            />
            <TextField
              //   label="Size"
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              name="email"
              onBlur={handleOnBlur}
              defaultValue={user.email}
              size="small"
            />
            <TextField
              //   label="Size"
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              name="phone"
              onBlur={handleOnBlur}
              label="Phone Number"
              type="number"
              //   defaultValue="Phone Number"
              size="small"
            />
            <TextField
              //   label="Size"
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              name="address"
              onBlur={handleOnBlur}
              //   defaultValue="Address"
              label="Address"
              type="text"
              size="small"
            />
            <Button type="submit" variant="contained">
              Confirm order
            </Button>

            {/* <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                
              {price}
            </Typography> */}
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
