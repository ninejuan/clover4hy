import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/main";
import Dev from "./pages/dev";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/dev",
    element: <Dev />,
  },
]);

export default router;
