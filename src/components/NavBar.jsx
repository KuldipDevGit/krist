import { Grid, Link } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { hover } from "@testing-library/user-event/dist/hover";
export default function NavBar() {
  return (
    <>
      <Grid container textAlign={"center"} rowSpacing={2}>
        <Grid item xs={2}>
          <Link
            href="/Home"
            style={{
              textDecoration: "none",
              color: "#000",
            }}
          >
            Home
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link
            href="/Home"
            style={{
              textDecoration: "none",
              color: "#000",
              
            }}
          >
            <Grid container>
              <Grid item xs={6} textAlign={"end"}>
                Shop
              </Grid>
              <Grid item xs={6}>
                <KeyboardArrowDownIcon fontSize="small" />
              </Grid>
            </Grid>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link
            href="/Home"
            style={{
              textDecoration: "none",
              color: "#000",
            }}
          >
            Our Story
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link
            href="/Home"
            style={{
              textDecoration: "none",
              color: "#000",
            }}
          >
            Blog
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link
            href="/contact"
            style={{
              textDecoration: "none",
              color: "#000",
            }}
          >
            Contact Us
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link
            href="/Home"
            style={{
              textDecoration: "none",
              color: "#000",
            }}
          >
            Help
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
