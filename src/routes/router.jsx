import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../components/Products/ProductDetails";
import ManageProduct from "../pages/ManageProduct";
import UpdateProduct from "../pages/UpdateProduct";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Products></Products>
            },
            {
                path: '/product/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
                path: '/manageproduct',
                element: <ManageProduct></ManageProduct>
            },
            {
                path: '/manageproduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
            }
        ]
    }
])