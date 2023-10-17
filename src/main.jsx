import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root/Root";
import "./index.css";
import { PokemonDetail } from "./pages/PokemonDetail/PokemonDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "pokemon/:pokemonId",
    element: <PokemonDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
