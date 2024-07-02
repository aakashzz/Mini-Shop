import React, { useState, useEffect } from "react";
import CardList from "./Product/CardList";
import Container from "./container/Container";
import category from "../service/category/categoryApi";
import { useDispatch } from "react-redux";
import {
   showCategory,
   emptyCategory,
} from "../store/features/asyncSelectCAtegorySlice";


function Home() {
   const dispatch = useDispatch();
   const categoryList = [
      "Beauty",
      "Fragrances",
      "Furniture",
      "Groceries",
      "Home-decoration",
      "Laptops",
      "Mens-shirts",
      "Mens-shoes",
      "Mens-watches",
      "Motorcycle",
      "Skin-care",
      "Smartphones",
      "Sunglasses",
      "Tablets",
   ];

   function clickValue(e) {
      const value = e.target.innerText;
      category
         .selectedCategory(value)
         .then((data) => dispatch(showCategory(data)))
         .catch(() => emptyCategory());
   }

   return (
      <main className="h-full py-4 ">
         <Container>
            <div className="  text-red-500 ">
               <ul className=" flex gap-x-2 justify-center">
                  {categoryList.map((item) => {
                     return (
                        <li
                           key={item}
                           value={item}
                           onClick={clickValue}
                           className="font-Inter text-[13px] cursor-pointer rounded-sm border-red-200 border p-1 font-medium hover:bg-red-500 hover:text-white duration-200 "
                        >
                           {item}
                        </li>
                     );
                  })}
               </ul>
            </div>
            <div className="py-5">
               <CardList />
            </div>
            <div className="bg-gray-100 h-full w-full py-3 px-3">
               <h2 className="font-Inter font-light text-3xl ">All Products</h2>
               <div className=" grid grid-cols-5 ">
                  
               </div>
            </div>
         </Container>
      </main>
   );
}

export default Home;
