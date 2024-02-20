import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import backgroundImage from "../assets/ForgotPassword.png";
// import kristLogo from "../assets/Krist_logo.png";
// import LoginPage from "../coponents/LoginPage";
import ForgotPasswordPage from "../components/ForgotPasswordPage";

function ForgotPassword() {
  return (
    <>
      <Stack height={"100vh"} maxHeight={"100vh"}>
        <Grid container height="100%" width="100%">
          <Grid item xs={6}>
            <Box
              height="100%"
              width="100%"
              sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            ></Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box height="100%" width="100%">
              <Grid container height="100%" width="100%" alignItems={"center"}>
                <Grid item xs={12}>
                  <ForgotPasswordPage />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

export default ForgotPassword;
