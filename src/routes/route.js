import { createBrowserRouter } from "react-router-dom";
import Home from '../components/Home';
import Category from '../components/Category/Category'

 const router = createBrowserRouter([
    {
        path:"/",
        element: <Home /> ,
        children:[
            {
                path:"/category",
                element:<Category />,
            },
           
        ]
    }
])

export default router