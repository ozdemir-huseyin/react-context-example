import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Teacher from "./components/Teacher";
import Student from "./components/Student";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/teacher",
    element: <Teacher />,
  },
  {
    path: "/student",
    element: <Student />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
