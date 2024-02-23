import { Typography } from "@mui/material";
import Card from "react-bootstrap/Card";
import { Grid } from "@mui/material";
import Bg_Image from "..//assets/mentshirt.jpg";
import girl_Image from "..//assets/westn_wear.png";
import Ethnic_Img from "..//assets/Ethnic_wear.avif";
import Kids_Img from "..//assets/kids_wear.jpeg";
export default function InstagramStory() {
  return (
    <>
      <Grid container mt={2}>
        <Grid item xs={12} textAlign={"center"}>
          <Typography variant="h4">Our Instagram Stories</Typography>
        </Grid>
      </Grid>
      <Grid container mt={3}>
        <Grid item xs={3}>
          <Card style={{ width: "10rem" }}>
            <Card.Img
              variant="top"
              src={Bg_Image}
              height={"250px"}
              width={"200px"}
            />
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card style={{ width: "10rem" }}>
            <Card.Img
              variant="top"
              src={girl_Image}
              height={"250px"}
              width={"200px"}
            />
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card style={{ width: "10rem" }}>
            <Card.Img
              variant="top"
              src={Ethnic_Img}
              height={"250px"}
              width={"200px"}
            />
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card style={{ width: "10rem" }}>
            <Card.Img
              variant="top"
              src={Kids_Img}
              height={"250px"}
              width={"200px"}
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
