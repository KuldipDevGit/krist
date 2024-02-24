import { Grid, Typography } from "@mui/material";
import krist_Logo from "../assets/Krist_logo_New.png";
import CallIcon from "@mui/icons-material/Call";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

export default function Footer() {
  return (
    <>
      <Grid container mt={10} sx={{ backgroundColor: "#000" }} p={2}>
        <Grid item xs={3} textAlign={"center"}>
          <img src={krist_Logo} alt="Krist Logo" />
          <Typography
            color={"#fff"}
            alignItems={"center"}
            display="flex"
            ml={10}
            mt={3}
          >
            <CallIcon />
            <span style={{ marginLeft: 11 }}>+919876543210</span>
          </Typography>
          <Typography
            color={"#fff"}
            alignItems={"center"}
            display={"flex"}
            ml={10}
            mt={1}
          >
            <MarkunreadOutlinedIcon />
            <span style={{ marginLeft: 11 }}>Krist07@gmail.com</span>
          </Typography>
          <Typography
            color={"#fff"}
            alignItems={"left"}
            display={"flex"}
            ml={10}
            mt={1}
          >
            <PlaceOutlinedIcon />
            <span style={{ marginLeft: 11 }}>Ahemdabad, 380001</span>
          </Typography>
        </Grid>
        <Grid item xs={3} color={"#fff"}>
          <Typography variant="h6" fontWeight={"bold"}>
            information
          </Typography>
          <Typography variant="body1" mt={1}>
            My Account
          </Typography>
          <Typography variant="body1" mt={1}>
            Login
          </Typography>
          <Typography variant="body1" mt={1}>
            My Cart
          </Typography>
          <Typography variant="body1" mt={1}>
            My Wishlist
          </Typography>
          <Typography variant="body1" mt={1}>
            Checkout
          </Typography>
        </Grid>
        <Grid item xs={3} color={"#fff"}>
          <Typography variant="h6" fontWeight={"bold"}>
            Service
          </Typography>
          <Typography variant="body1" mt={1}>
            About Us
          </Typography>
          <Typography variant="body1" mt={1}>
            Careers
          </Typography>
          <Typography variant="body1" mt={1}>
            Delivery Information
          </Typography>
          <Typography variant="body1" mt={1}>
            Privacy Policy
          </Typography>
          <Typography variant="body1" mt={1}>
            Terms & Conditions
          </Typography>
        </Grid>
        <Grid item xs={3} color={"#fff"}>
          <Typography variant="h6" fontWeight={"bold"}>
            Subscribe
          </Typography>
          <Typography variant="body2" mt={1}>
            Enter your email below to be the first to know
            <br />
            about new collections and product launches.
          </Typography>
          <Typography mt={3} alignItems={"center"} display={"flex"}>
            <MarkunreadOutlinedIcon />
            <span style={{ marginLeft: 11 }}>Your Email</span>
            <span style={{ marginLeft: 120 }}>
              <ArrowForwardOutlinedIcon fontSize="small" />
            </span>
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ backgroundColor: "#000" }}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4} textAlign={"center"} color={"#fff"}>
          <Typography variant="body2">
            @2003 Krist All Rights are reserved
          </Typography>
        </Grid>
        <Grid item xs={4} textAlign={"center"} color={"#fff"}>
          <span>
            <TwitterIcon />
          </span>
          <span style={{ marginLeft: 11 }}>
            <InstagramIcon />
          </span>
          <span style={{ marginLeft: 11 }}>
            <FacebookOutlinedIcon />
          </span>
        </Grid>
      </Grid>
    </>
  );
}
