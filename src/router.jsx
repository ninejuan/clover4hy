import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/main";
import Dev from "./pages/dev";
import Rotate from "./pages/rotate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
