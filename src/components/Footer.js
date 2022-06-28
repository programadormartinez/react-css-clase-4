import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const Footer = () => {
  return (
    <Stack spacing={3} direction="row" style={
        {
            justifyContent: 'center',
            bottom: 0,
            position: 'absolute',
            margin: 'auto',
            textAlign: 'center'
        }
    }>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
};


// const style = StyleSheet.
export default Footer;
