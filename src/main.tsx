import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./game-hub/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  //   <QueryClientProvider client={queryClient}>
  //     <ChakraProvider theme={theme}>
  //       <ColorModeScript
  //         initialColorMode={theme.config.initialColorMode}
  //       ></ColorModeScript>
  //       <RouterProvider router={router} />
  //       <App />
  //     </ChakraProvider>
  //     <ReactQueryDevtools />
  //   </QueryClientProvider>
  // </React.StrictMode>

  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
