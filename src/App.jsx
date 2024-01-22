import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Home from "../src/pages/home/Home";
import Blog from "../src/pages/blog/Blog";
import Contact from "../src/pages/contact/Contact";
import Package from "./pages/package/Package";
import { useState } from "react";
import ProductDetails from "./component/products/ProductDetails";

function App() {
  const pages = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products/:id",
      element: <ProductDetails />,
    },
    { path: "/blog", element: <Blog /> },
    { path: "/contact", element: <Contact /> },
    { path: "/package", element: <Package /> },
    // { path: "/blog", element: <Blog /> },
    // <ScrollRestoration />,
  ]);

  return (
    <div className="App">
      <RouterProvider router={pages} />
    </div>
  );
}

export default App;
