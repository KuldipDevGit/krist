import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  OutlinedInput,
  Typography,
  Link,
} from "@mui/material";
import React from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
function ForgotPasswordPage() {
  return (
    <Grid container rowSpacing={2} alignItems={"center"} pl={3}>
      <Grid item xs={12} md={8}>
        <Link href="/Login" style={{ textDecoration: "none", color: "#000" }}>
          <Typography variant="h5">
            <span>
              <ArrowBackIosIcon fontSize="small" />
            </span>
            Back
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant="h4">Forgot Password </Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant="body1" sx={{ color: "#A4A1AA" }}>
          Enter your registered email address. we will send you a code to reset
          your passsword
        </Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <FormControl required fullWidth>
          <FormLabel>Email address</FormLabel>
          <OutlinedInput
            placeholder="robertfox@example.com"
            sx={{ borderRadius: "8px" }}
          />
        </FormControl>
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
          <Link
            href="/Otp"
            style={{
              fontWeight: "bold ",
              textDecoration: "none",
              color: "#fff",
            }}
          >
            Send OTP
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
}

export default ForgotPasswordPage;
