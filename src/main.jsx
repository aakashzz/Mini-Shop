import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
// import router from "./routes/route.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Category from "./components/Category/Category.jsx";
import SearchResult from './components/Search/SearchResult.jsx'
import ProductDetailsCard from "./components/Products Details/ProductDetailsCard.jsx";
import ProductMainDetails from "./components/Products Details/ProductMainDetails.jsx";

const router = createBrowserRouter([
   {
       path:"/",
       element: <App /> ,
       children:[
           {
               path:"/",
               element:<Home />,
           },
           {
               path:"/category",
               element:<Category />
           },
           {
                path:'/search?',
                element: <SearchResult />
           },
           {
                path:"/product",
                element: <ProductMainDetails />
           }
          
          
       ]
   }
])

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
         <Provider store={store}>
      <RouterProvider router={router}>
            <App />
      </RouterProvider>
         </Provider>
   </React.StrictMode>
);
