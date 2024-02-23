import { Grid, Typography, Button, Link, Box } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Background_Image from "../assets/silder_image.jpeg";

export default function DealOfTheMoth() {
  return (
    <>
      <Grid container>
        <Grid item xs={6} alignItems={"center"} textAlign={"center"}>
          <Typography variant="h4" mt={2}>
            Deals Of The Month
          </Typography>
          <Typography variant="body2" mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
            <br />
            ornare suspendisse sed nisi lacus.
          </Typography>
          <Grid container>
            <Grid item xs={12} textAlign={"center"} ml={21}>
              <Grid container columnSpacing={3} textAlign={"center"}>
                <Grid item xs={3} md={2}>
                  <Typography
                    variant="h3"
                    fontSize={"28px"}
                    fontWeight={"bold"}
                  >
                    120
                  </Typography>
                  <Typography variant="body1">Days</Typography>
                </Grid>
                <Grid item xs={3} md={2}>
                  <Typography
                    variant="h3"
                    fontSize={"28px"}
                    fontWeight={"bold"}
                  >
                    18
                  </Typography>
                  <Typography variant="body1">hours</Typography>
                </Grid>
                <Grid item xs={3} md={2}>
                  <Typography
                    variant="h3"
                    fontSize={"28px"}
                    fontWeight={"bold"}
                  >
                    15
                  </Typography>
                  <Typography variant="body1">mins</Typography>
                </Grid>
                <Grid item xs={3} md={2}>
                  <Typography
                    variant="h3"
                    fontSize={"28px"}
                    fontWeight={"bold"}
                  >
                    10
                  </Typography>
                  <Typography variant="body1">Secs</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
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
              mt: 2,
            }}
          >
            <Link
              href="/Home"
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              View All Products
            </Link>
          </Button>
        </Grid>
        <Grid item xs={6} textAlign={"center"}>
          <Box
            sx={{
              backgroundImage: `url(${Background_Image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
            }}
          ></Box>
        </Grid>
      </Grid>
    </>
  );
}
