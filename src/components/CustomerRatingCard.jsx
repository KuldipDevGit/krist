import { Card, Grid, Typography, Rating } from "@mui/material";
import React from "react";
import rating_Image from "../assets/rating_image.jpg";

function CustomerRatingCard() {
  return (
    <Card
      variant="outlined"
      sx={{
        height: "50%",
        width: "50%",
        p: 7,
        borderRadius: "15px",
      }}
    >
      <Grid container alignItems={"center"} spacing={2}>
        <Grid item xs={12}>
          <Rating name="size-small" defaultValue={5} size="small" />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <img
            src={rating_Image}
            alt="customer"
            style={{ height: "50px", width: "50px", borderRadius: "50%" }}
          />
        </Grid>
        <Grid item xs={9}>
          <Typography>John Doe</Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

export default CustomerRatingCard;
