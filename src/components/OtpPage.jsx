import {
  Button,
  FormControl,
  Grid,
  OutlinedInput,
  Typography,
  Link,
} from "@mui/material";
import React from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
function OtpPage() {
  return (
    <Grid container rowSpacing={2} alignItems={"center"} pl={3}>
      <Grid item xs={12} md={8}>
        <Link
          href="/ForgotPassword"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <Typography variant="h5">
            <span>
              <ArrowBackIosIcon fontSize="small" />
            </span>
            Back
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant="h4">Enter OTP </Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant="body1" sx={{ color: "#A4A1AA" }}>
          We have share a code of your registered email address
          robertfox@example.com
        </Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid container columnSpacing={2}>
          <Grid item xs={3} md={2}>
            <FormControl required fullWidth>
              <OutlinedInput sx={{ borderRadius: "8px" }} />
            </FormControl>
          </Grid>
          <Grid item xs={3} md={2}>
            <FormControl required fullWidth>
              <OutlinedInput sx={{ borderRadius: "8px" }} />
            </FormControl>
          </Grid>
          <Grid item xs={3} md={2}>
            <FormControl required fullWidth>
              <OutlinedInput sx={{ borderRadius: "8px" }} />
            </FormControl>
          </Grid>
          <Grid item xs={3} md={2}>
            <FormControl required fullWidth>
              <OutlinedInput sx={{ borderRadius: "8px" }} />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={8}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            background: "#000",
            "&:hover": {
              background: "#000",
            },
          }}
        >
          Verify
        </Button>
      </Grid>
    </Grid>
  );
}

export default OtpPage;
