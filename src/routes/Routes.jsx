import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesRead from "../pages/PagesRead";
import BookDetails from "../components/BookDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      children: [
        {
            path: '/',
            element: <Home/>,
            loader: () => fetch('/books.json')
        },
        {
            path: '/booklists',
            element: <ListedBooks/>
        },
        {
            path: '/pages-read',
            element: <PagesRead/>
        },
        {
          path: '/book/:id',
          element: <BookDetails />,
          loader: () => fetch('/books.json')
        }
      ]
    },
  ]);

