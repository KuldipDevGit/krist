import { Box } from "@mui/system";
import Background_Image from "../assets/silder_image.jpeg";
import { Grid, Typography, Link, Button } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
export default function Slider() {
  return (
    <Box
      height={"100%"}
      width={"100%"}
      border={"1px solid blue"}
      sx={{
        display: "flex", // Added for flexbox
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        backgroundImage: `url(${Background_Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Changed to cover to maintain aspect ratio
      }}
      mt={2}
      pl={10}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4">Classic Exclusive</Typography>
          <Typography variant="h3" fontWeight={"bold"}>
            Women`s Collection
          </Typography>
          <Typography variant="h4">UPTO 40% OFF</Typography>
          <Button
            variant="contained"
            endIcon={<ArrowForwardOutlinedIcon />}
            sx={{
              background: "#000",
              "&:hover": {
                background: "#000",
              },
              borderRadius: "8px",
              height: "45px",
              p: 2,
            }}
          >
            <Link
              href="/Home"
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              Shop Now
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
