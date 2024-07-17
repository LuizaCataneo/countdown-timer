import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Home from "./routes/Home.jsx";
import Countdown from "./routes/Countdown.jsx";

// context
import { CountdownProvider } from "./context/CountdownContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/countdown",
        element: <Countdown></Countdown>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CountdownProvider>
      <RouterProvider router={router}></RouterProvider>
    </CountdownProvider>
  </React.StrictMode>
);
