import { Grid, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
export default function Offer() {
  return (
    <>
      <Grid container mt={6} textAlign={"center"}>
        <Grid item xs={4}>
          <Typography>
            <LocalShippingOutlinedIcon fontSize="medium" />
          </Typography>
          <Typography variant="h6" fontWeight={"bold"}>
            Free Shipping
          </Typography>
          <Typography variant="body2" sx={{ color: "#A4A1AA" }}>
            Free shipping for order above ₹200
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>
            <HeadsetMicOutlinedIcon />
          </Typography>
          <Typography variant="h6" fontWeight={"bold"}>
            Online Support
          </Typography>
          <Typography variant="body2" sx={{ color: "#A4A1AA" }}>
            24 Hours a day, 7 days a week
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>
            <PaymentOutlinedIcon />
          </Typography>
          <Typography variant="h6" fontWeight={"bold"}>
            Flexible Payment
          </Typography>
          <Typography variant="body2" sx={{ color: "#A4A1AA" }}>
            Pay with multiple credit card
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
