import { Grid } from "@mui/material";
import krist_Logo from "../assets/Krist_logo.png";

export default function Footer() {
  return (
    <>
      <Grid container mt={10} sx={{ backgroundColor: "#000" }}>
        <Grid item xs={3} textAlign={"center"}>
          <img
            src={krist_Logo}
            alt="Krist Logo"
            height={"35px"}
            style={{ background: "#fff", padding: "10px" }}
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </>
  );
}
