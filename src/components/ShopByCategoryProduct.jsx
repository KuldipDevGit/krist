import Card from "react-bootstrap/Card";
import { Grid } from "@mui/material";
import Bg_Image from "..//assets/mentshirt.jpg";
import girl_Image from "..//assets/westn_wear.png";
import Ethnic_Img from "..//assets/Ethnic_wear.avif";
import Kids_Img from "..//assets/kids_wear.jpeg";

// import Button from "react-bootstrap/Button";
export default function ShopByCategoryProduct() {
  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          <Card style={{ width: "10rem" }}>
            <Card.Img
              variant="top"
              src={Bg_Image}
              height={"250px"}
              width={"200px"}
            />
            <Card.Body>
              <Card.Title>Casual Wear</Card.Title>
            </Card.Body>
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
            <Card.Body>
              <Card.Title>Western Wear</Card.Title>
            </Card.Body>
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
            <Card.Body>
              <Card.Title>Ethnic Wear</Card.Title>
            </Card.Body>
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
            <Card.Body>
              <Card.Title>Kids Wear</Card.Title>
            </Card.Body>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
