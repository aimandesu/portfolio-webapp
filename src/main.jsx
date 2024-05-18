import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//rafce for quick components

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "./components/Provider/Provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
