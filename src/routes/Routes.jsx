import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesRead from "../pages/PagesRead";
import BookDetails from "../components/BookDetails";
import Read from "../components/Read";
import Wishlists from "../components/Wishlists";
import ErrorPage from "../pages/ErrorPage";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home/>,
            loader: () => fetch('/books.json')
        },
        {
            path: '/booklists',
            element: <ListedBooks/>,
            // loader: () => fetch('/books.json'),
            children: [
              {
                index: true,
                element: <Read/>,
                loader: () => fetch('/books.json')
              },
              {
                path: 'wishlist',
                element: <Wishlists/>,
                loader: () => fetch('/books.json')
              }
            ]
        },
        {
            path: '/pages-read',
            element: <PagesRead/>,
            loader: () => fetch('/books.json'),
        },
        {
          path: '/about',
          element: <AboutUs/>
        },
        {
          path: '/contact',
          element: <ContactUs/>
        },
        {
          path: '/book/:id',
          element: <BookDetails />,
          loader: () => fetch('/books.json')
        }
      ]
    },
  ]);

