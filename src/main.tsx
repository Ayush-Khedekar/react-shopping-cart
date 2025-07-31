import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store/Store"; // make sure this path is correct
import App from "./App";
import "./index.css";

import Store from "./components/Store";
import Home from "./components/Home";
import About from "./components/About";

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
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
