import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookDetails from "./BookDetails.jsx";
import AllBooks from "./AllBooks.jsx";
import AddBook from "./AddBook.jsx";
import CategorizedBooks from "./CategorizedBooks.jsx";
import store from "../store/store.js";
import { Provider } from "react-redux";
import PageNotFound from "./PageNotFound.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Details/:id",
    element: <BookDetails />,
  },
  {
    path: "/Browse-books",
    element: <AllBooks />,
  },
  {
    path: "/Add-book",
    element: <AddBook />,
  },
  {
    path: "/Books/:Category",
    element: <CategorizedBooks />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={appRouter} />
    </StrictMode>
  </Provider>
);
