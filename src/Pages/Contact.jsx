import { Grid, Typography,TextField,Button } from "@mui/material";
import Contact_logo from "..//assets/contactus.png";

export default function Contact_Us(){
  return(
    <>
    <Grid container textAlign={"center"} mt={15}>
    <Grid item xs={6}>
      <Typography variant="h5">
        Contact Us 
      </Typography>
      <TextField label="Name" variant="outlined" fullWidth required style={{ marginTop:"40px"}}/>
      <TextField label="Email" variant="outlined" fullWidth required type="email" style={{ marginTop:"40px"}}/>
      <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  required
                  style={{ marginTop:"40px"}}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop:"40px"}}>
                  Submit
                </Button>
            
    </Grid>
    <Grid item xs={6}>
      <img src={Contact_logo}></img>
    </Grid>
  </Grid>

    </>
  );
  
}