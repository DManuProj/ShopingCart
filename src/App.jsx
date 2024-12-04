import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import NotFoundPage from "./pages/PageNotFound";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      index: true,
      element: <Home />,
      path: "/",
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/cart",
      element: (
        <PrivateRoute>
          <Cart />
        </PrivateRoute>
      ),
    },
    { path: "*", element: <NotFoundPage /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
