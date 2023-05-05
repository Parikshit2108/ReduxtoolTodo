import { createTheme } from "@mui/material";

const bgWhite = "#fff";
const orange = "##FAA81D";

export default createTheme({
  palette: {
    common: {
      white: `${orange}}`,
    },
    primary: {
      main: `${orange}`,
    },
    secondary: {
      main: `${orange}`,
    },
  },
  zIndex: {
    appBar: 1201,
  },
  typography: {
    fontWeight: {
      fontW: "600",
    },
    fontFamily: {
      fontF: "Abril Fatface",
    },
  },
});
