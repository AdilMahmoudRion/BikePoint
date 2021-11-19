import React, { useState } from "react";
import './Booking.css'
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useAuth from "../../../hooks/useAuth";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 50,
  p: 4,
};
const Booking = ({
  openBooking,
  handleBookingClose,
  bikes,
  setBookingSuccess,
}) => {
  const { name, price} = bikes;
  const { user } = useAuth();
  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };

  const handleBookingSubmit = (e) => {
    // collect data
      const appointment = {
      name: user.displayName,
      email: user.email,
      bikeName: name,
      price: price,
    };
      console.log(appointment);
    // send to the server
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSuccess(true);
          handleBookingClose();
        }
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
        <Box sx={style} className="box-style">
          <Typography className="confirmation-hed" id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form className="booking-from" onSubmit={handleBookingSubmit}>
            <TextField
           
             variant="standard"
             color="warning"
              sx={{ width: "96%", m: 1 }}
              id="outlined-size-small"
              name="userName"
              label="Name"
              onBlur={handleOnBlur}
              defaultValue={user.displayName}
              size="small"
            />
            <TextField
             variant="standard"
             color="warning"
              sx={{ width: "96%", m: 1 }}
              id="outlined-size-small"
              name="email"
              label="Email Address"
              onBlur={handleOnBlur}
              defaultValue={user.email}
              size="small"
            />
            <TextField
             variant="standard"
             color="warning"
              sx={{ width: "96%", m: 1 }}
              id="outlined-size-small"
              name="phone"
              label="Phone Number"
              onBlur={handleOnBlur}
              defaultValue="+8801"
              size="small"
            />
            <TextField
             variant="standard"
             color="warning"
              disabled
              sx={{ width: "96%", m: 1}}
              id="outlined-size-small"
              label="Price"
              price="price"
              defaultValue={price}
              size="small"
            />
            <Button variant="contained"className="sub-btn" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default Booking;
