import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/main";
import Dev from "./pages/dev";
import Rotate from "./pages/rotate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rotate />,
  },
  {
    path: "/rotate",
    element: <Rotate />,
  },
  {
    path: "/dev",
    element: <Dev />,
  },
]);

export default router;
