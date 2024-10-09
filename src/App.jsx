import Artist from "./pages/Artist";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Test from "./pages/Test";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/artist/:id",
    element: <Artist />,
  },
  {
    path: "/test",
    element: <Test />
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
