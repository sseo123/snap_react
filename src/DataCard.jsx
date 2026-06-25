import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import dataset from "./locations.json";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

// console.log(dataset);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
}

export default function DataCard({ img, location, bullet_point, rating }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid>
        <Card sx={{ maxWidth: 350 }}>
          <CardMedia sx={{ height: 250 }} image={img} title={location} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {location}
            </Typography>
            <Typography>
              {bullet_point.map((test_string) => (
                <Typography component="li">{test_string}</Typography>
              ))}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="secondary" onClick={handleOpen}>
              Shawn's Rating is ...
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...style, width: 400 }}>
                <h1 id="parent-modal-title">THE FINAL RATING IT</h1>
                <CardMedia sx={{ height: 250 }} image={img} />
                <p id="parent-modal-description">
                  <Typography align="center" color="success" variant="h1">
                    {rating} / 10{" "}
                  </Typography>
                </p>
                <Button onClick={handleClose}>
                  <h3>Close Rating</h3>
                </Button>

                <ChildModal />
              </Box>
            </Modal>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
