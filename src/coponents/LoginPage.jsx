import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  Link,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
function LoginPage() {
  return (
    <Grid container rowSpacing={2} alignItems={"center"} pl={3}>
      <Grid item xs={12} md={8}>
        <Typography variant="h3">Welcome 👋</Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant="body1" sx={{ color: "#A4A1AA" }}>
          Please login here{" "}
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
        <FormControl required fullWidth>
          <FormLabel>Password</FormLabel>
          <OutlinedInput
            type="Password"
            placeholder="password"
            sx={{ borderRadius: "8px" }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Remember me" />
        </FormGroup>
      </Grid>
      <Grid item xs={6}>
        <Link href="#" sx={{ color: "#000", textDecoration: "none" }}>
          Forgot password
        </Link>
      </Grid>
      <Grid item xs={12} md={8}>
        <Button variant="contained" fullWidth sx={{ background: "#000" }}>
          Login
        </Button>
      </Grid>
    </Grid>
  );
}

export default LoginPage;
