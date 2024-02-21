import { Grid, Typography, Button } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ShopByCategoryProduct from "./ShopByCategoryProduct";

export default function ShopByCategory() {
  return (
    <Grid container mt={3}>
      <Grid item xs={10}>
        {" "}
        <Typography variant="h4">Shop by Categories</Typography>
      </Grid>
      <Grid item xs={2} textAlign={"end"}>
        {" "}
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
      <Grid item xs={12}>
        <ShopByCategoryProduct />
      </Grid>
    </Grid>
  );
}
