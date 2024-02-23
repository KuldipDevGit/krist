import { Grid, Button, Link } from "@mui/material";
import krist_Logo from "../assets/Krist_logo.png";
import NavBar from "../components/NavBar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

export default function Header() {
  return (
    <>
      <Grid
        container
        textAlign={"center"}
        height={"50px"}
        alignItems={"center"}
      >
        <Grid item xs={3}>
          <img src={krist_Logo} alt="Krist Logo" height={"35px"} />
        </Grid>
        <Grid item xs={5}>
          <NavBar />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <SearchOutlinedIcon style={{ marginRight: "8px" }} />
          <FavoriteBorderOutlinedIcon style={{ marginRight: "8px" }} />
          <LocalMallOutlinedIcon style={{ marginRight: "8px" }} />
          <Button
            variant="contained"
            sx={{
              background: "#000",
              "&:hover": {
                background: "#000",
              },
              borderRadius: "10px",
              height: "30px",
            }}
          >
            <Link
              href="/Home"
              style={{
                fontWeight: "bold ",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              Login
            </Link>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
