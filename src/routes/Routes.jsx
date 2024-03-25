import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesRead from "../pages/PagesRead";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/booklists',
            element: <ListedBooks/>
        },
        {
            path: '/pages-read',
            element: <PagesRead/>
        }
      ]
    },
  ]);

