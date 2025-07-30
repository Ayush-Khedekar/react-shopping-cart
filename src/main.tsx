// import "./index.css";
// import App from "./App.tsx";
// import { createBrowserRouter, RouterProvider } from "react-router";
// import Home from "./components/Home.tsx";
// import Store from "./components/Store.tsx";
// import About from "./components/About.tsx";
// import ReactDOM from "react-dom/client";
// import Cart_For_Product_Details from "./components/Cart_For_Product_Details.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: App,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "/Home",
//         element: <Home />,
//       },
//       {
//         path: "/Store",
//         element: <Store />,
//       },
//       {
//         path: "/About",
//         element: <About />,
//       },
//       {
//         path: "/Cart",
//         element: <Cart_For_Product_Details />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <RouterProvider router={router} />
// );

import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import App from "./App";
import "./index.css";

import Store from "./components/Store";
import Home from "./components/Home";
import About from "./components/About";
import { CartProvider } from "./Hooks/CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, element: <Home /> },
      { path: "/Home", element: <Home /> },
      { path: "/Store", element: <Store /> },
      { path: "/About", element: <About /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);
