import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Resume from "../Components/Resume/Resume";
import Contact from "../Components/Contact/Contact";
import Portfolio from "../Components/Projects/Portfolio";
import Error from "../Components/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Layout></Layout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "about",
          element: <About></About>
        },
        {
          path: "resume",
          element: <Resume></Resume>
        },
        {
          path: "projects",
          element: <Portfolio></Portfolio>
        },
        {
          path: "contact",
          element: <Contact></Contact>
        },
    ],
  },
]);
