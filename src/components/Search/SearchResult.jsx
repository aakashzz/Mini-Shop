import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchResultCard from "./SearchResultCard";


function SearchResult() {
  
   const { data, loading } = useSelector((state) => state.input);

   if (!data.length) {
      return (
         <p className="text-2xl text-center h-screen font-semibold">
            Product Not Found
         </p>
      );
   }

    
   return (
      <div className="grid grid-cols-4 space-x-3  rounded ">
         <div className="w-full h-96 bg-white p-4 space-y-2">
            <div className="font-Inter space-x-1 ">
               <label htmlFor="price" className="font-light">
                  Price:
               </label>
               <select
                  name=""
                  id="price"
                  className="w-36 rounded-lg outline-none border font-light text-center"
                  defaultChecked="random"
                  
               >
                  <option value="random">Random</option>
                  <option value="veryLowPrice">Very Low Price</option>
                  <option value="lowPrice">Low Price</option>
                  <option value="mediumPrice">Medium Price</option>
                  <option value="highPrice">High Price</option>
                  <option value="veryHighPrice">Very High Price</option>
               </select>
            </div>
            <div className="font-Inter space-x-1  ">
               <label htmlFor="price" className="font-light ">
                  Rating:
               </label>
               <select
                  name=""
                  id="price"
                  className="w-32 rounded-lg  outline-none border font-light text-center"
               >
                  <option value="random">Random</option>
                  <option value="best">Best</option>
                  <option value="good">Good</option>
                  <option value="normal">Normal</option>
               </select>
            </div>
         </div>
         <div className="col-span-3 bg-white ">
         
            {loading ? (
               <div className="flex justify-center items-center h-screen">
                  <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-purple-500"></div>
                  <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-red-500 ml-3"></div>
                  <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-blue-500 ml-3"></div>
               </div>
            ) : (
               data.map((value) => {
                  return (
                     <SearchResultCard
                        title={value.title}
                        key={value.id}
                        img={value.thumbnail}
                        brandName={value.brand}
                        desc={value.description}
                        discount={value.discountPercentage}
                        price={value.price}
                        rating={value.rating}
                        warranty={value.warrantyInformation}
                        ship={value.shippingInformation}
                     />
                  );
               })
            )}
         </div>
      </div>
   );
}

export default SearchResult;
