import { Grid, Typography } from "@mui/material";
import OurBestsellerProductCard from "./OurBestsellerProductCard";
export default function OurBestSeller() {
  return (
    <>
      <Grid container alignItems={"center"} rowGap={7}>
        <Grid item xs={12}>
          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            Our Bestseller
          </Typography>
          <Grid item xs={12}>
            <OurBestsellerProductCard />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
