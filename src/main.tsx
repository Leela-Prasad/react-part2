import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./game-hub/routes";
import theme from "./game-hub/theme";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./game-hub/hooks/reducer";

const queryClient = new QueryClient();
const store = configureStore({ reducer });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ColorModeScript
          initialColorMode={theme.config.initialColorMode}
        ></ColorModeScript>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>

  // <React.StrictMode>
  //   <QueryClientProvider client={queryClient}>
  //     <RouterProvider router={router} />
  //     <ReactQueryDevtools />
  //   </QueryClientProvider>
  // </React.StrictMode>
);
