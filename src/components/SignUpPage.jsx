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
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
function SignUpPage() {
  return (
    <Grid container rowSpacing={2} alignItems={"center"} pl={3}>
      <Grid item xs={12} md={8}>
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          Create New Account
        </Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant="body1" sx={{ color: "#A4A1AA" }}>
          Please enter details
        </Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <FormControl required fullWidth>
          <FormLabel>First name</FormLabel>
          <OutlinedInput placeholder="Robert" sx={{ borderRadius: "8px" }} />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={8}>
        <FormControl required fullWidth>
          <FormLabel>Last Name</FormLabel>
          <OutlinedInput placeholder="Fox" sx={{ borderRadius: "8px" }} />
        </FormControl>
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
      <Grid item xs={12}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="I agree to  the Terms & Conditions"
          />
        </FormGroup>
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
            href="/Login"
            style={{
              fontWeight: "bold ",
              textDecoration: "none",
              color: "#fff",
            }}
          >
            Sign Up
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
}

export default SignUpPage;
