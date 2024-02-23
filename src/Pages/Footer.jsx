import { Grid, Typography } from "@mui/material";
import krist_Logo from "../assets/Krist_logo_New.png";
import CallIcon from "@mui/icons-material/Call";

export default function Footer() {
  return (
    <>
      <Grid container mt={10} sx={{ backgroundColor: "#000" }}>
        <Grid item xs={3} textAlign={"center"}>
          <img src={krist_Logo} alt="Krist Logo" />
          <Typography color={"#fff"} textAlign={"left"} ml={10} mt={2}>
            <CallIcon />
          </Typography>
          <Typography variant="body2" color={""}
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </>
  );
}
