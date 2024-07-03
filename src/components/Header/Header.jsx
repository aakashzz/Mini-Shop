import Logo from "../Logo";
// import { NavLink } from "react-router-dom";
import products from "../../service/products/productsApi";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
   fetchDataProducts,
   emptyDataProducts,
} from "../../store/features/inputProductsSlice";

function Header() {
   let linkTab = [
      { name: "Home", direction: "/", active: true },
      { name: "Product", direction: "/product", active: true },
      { name: "About", direction: "/about", active: true },
      { name: "Contact", direction: "/contact", active: true },
   ];
   const value = useRef();
   const dispatch = useDispatch();
   function dataSubmit() {
      const inputValue = value.current.value;
      products
         .inputProduct(inputValue)
         .then((data) => dispatch(fetchDataProducts(data)))
         .catch(emptyDataProducts());
   }
   return (
      <header className="bg-white h-16 w-full shadow ">
         <nav className="lg:flex ">
            <div className="flex items-center w-full justify-around">
               <div className="mr-4">
                  <Logo />
               </div>
               <ul className="flex gap-x-4 w-fit ">
                  <div className="border w-72 rounded-md h-8 mx-4  flex">
                     <input
                        type="text"
                        className="w-64 border-none bg-transparent outline-none pl-3 h-7 font-light font-Inter  text-sm"
                        placeholder="Search"
                        ref={value}
                     />
                     <button
                        onClick={dataSubmit}
                        className="text-sm pl-1 font-Inter border-none outline-none text-gray-500"
                     >
                        Ok
                     </button>
                  </div>
                  {linkTab.map((item) =>
                     item.active ? (
                        <li
                           key={item.name}
                           className="w-fit font-Inter font-light text-lg"
                        >
                           {item.name}
                        </li>
                     ) : null
                  )}
               </ul>
            </div>
         </nav>
      </header>
   );
}

export default Header;
