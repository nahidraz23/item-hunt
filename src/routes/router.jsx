import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Products from "../pages/Products";
import ProductDetails from "../components/Products/ProductDetails";
import ManageProduct from "../pages/ManageProduct";
import UpdateProduct from "../pages/UpdateProduct";
import AddProduct from "../pages/AddProduct";

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
                loader: async ({params}) => await fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
                path: '/manageproduct',
                element: <ManageProduct></ManageProduct>
            },
            {
                path: '/manageproduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: async ({params}) => await fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
                path: '/addproduct',
                element: <AddProduct></AddProduct>
            }

        ]
    }
])