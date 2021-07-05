import React from "react";
import { customTheme } from "./theme.js";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import "./style.css";

//
// ChakraUI Components
//
import { Box } from "@chakra-ui/core";

export default function App(props, { children }) {
  return (
    // Use at the root of your app
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <Box bg="tomato" w="100%" p={4} color="white">
          This is the Box
        </Box>
      </div>
      {children}
    </ThemeProvider>
  );
}
