import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1DA1F2",
    800: "#1A91DA",
    700: "#1A85C1",
  },
  gray: {
    50: "#F5F8FA",
    100: "#E1E8ED",
    200: "#AAB8C2",
    300: "#657786",
    400: "#14171A",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
