import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Cart from "../Pages/Cart/Cart";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/",
                element: <Shop />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    }
])