import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import HeadComponent from "./components/Header";
import Body from './components/Body';
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const Instamart = lazy(() => import("./components/Instamart"));



const AppLayout = ()=>{
    return(
        <Provider store={store}>
        <HeadComponent/>
        <Outlet/>
        <Footer/>
        </Provider>
    )
};

const approuter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
                children:[{
                    path:"profile",
                    element:<Profile/>,
                },
            ],
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>,
            },
            {
                path:"/instamart",
                element:<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>,
            },
            {
                path:"/cart",
                element:<Cart/>,
            },
        ],
    },
    
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter}/>);

