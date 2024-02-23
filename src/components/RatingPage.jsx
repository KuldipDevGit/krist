import { Grid, Typography, Button } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import CustomerRatingCard from "./CustomerRatingCard";
export default function RatingPage() {
  return (
    <>
      <Grid container mt={5}>
        <Grid item xs={6}>
          <Typography variant="h4">What our Customer say's</Typography>
        </Grid>
        <Grid item xs={6} textAlign={"end"}>
          <Button
            variant="contained"
            sx={{
              background: "#A4A1AA",
              "&:hover": {
                background: "#000",
              },
              "&:active": {
                background: "#000",
              },
              height: "40px",
              borderRadius: "8px",
            }}
          >
            <ArrowBackOutlinedIcon />
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "#A4A1AA",
              "&:hover": {
                background: "#000",
              },
              "&:active": {
                background: "#000",
              },
              height: "40px",
              borderRadius: "8px",
              ml: 2,
            }}
          >
            <ArrowForwardOutlinedIcon />
          </Button>
        </Grid>
      </Grid>
      <Grid container mt={4}>
        <Grid item xs={4}>
          <CustomerRatingCard />
        </Grid>
        <Grid item xs={4}>
          <CustomerRatingCard />
        </Grid>
        <Grid item xs={4}>
          {" "}
          <CustomerRatingCard />
        </Grid>
      </Grid>
    </>
  );
}
