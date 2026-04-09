import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import AutoComp from "./AutoComplete";
import TabContainer from "./Tabs/index.jsx";
import TrafficLightContainer from "./Traffic_lights/index.jsx";
import AccordionContainer from "./Accordion/AccordionContainer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/autocomplete",
    element: <AutoComp />,
  },
  {
    path: "/tabs",
    element: <TabContainer />,
  },
  {
    path: "/traffic_light",
    element: <TrafficLightContainer />,
  },
  {
    path: "/accordion",
    element: <AccordionContainer />,
  },
]);

createRoot(document.getElementById("root")).render(
  <div className="container mx-auto p-3">
    <RouterProvider router={router} />
  </div>,
);
