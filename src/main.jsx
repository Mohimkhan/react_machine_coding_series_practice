import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import AutoComp from "./AutoComplete";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/autocomplete",
    element: <AutoComp />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
