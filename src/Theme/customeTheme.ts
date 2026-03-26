import { createTheme } from "@mui/material";

const customeTheme = createTheme({
  palette: {
    mode: "light", // This sets the theme to dark mode
    primary: {
      main: "#8bc2ee",

    },
    secondary: {
      main: "#ffffffff", 
    },
   
   
  },
});

export default customeTheme;