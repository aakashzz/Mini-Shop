import React from "react";
import { useSelector } from "react-redux";
import Card from "../Product/Card";
import SearchResultCard from "./SearchResultCard";

function SearchResult() {
   const { data, error, loading } = useSelector((state) => state.input);
   //    console.log(products);

   return (
      <div className="grid grid-cols-4 space-x-3  rounded ">
         <div className="w-full h-auto bg-white p-4 border rounded text-center space-y-2">
            <div className="font-Inter space-x-1 ">
               <label htmlFor="price" className="font-light">
                  Price:
               </label>
               <select
                  name=""
                  id="price"
                  className="w-20 rounded-lg outline-none border font-light text-center"
               >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
               </select>
            </div>
            <div className="font-Inter space-x-1  ">
               <label htmlFor="price" className="font-light ">
                  Rating:
               </label>
               <select
                  name=""
                  id="price"
                  className="w-20 rounded-lg  outline-none border font-light text-center"
               >
                  <option value="best">Best</option>
                  <option value="good">Good</option>
                  <option value="normal">Normal</option>
               </select>
            </div>
         </div>
         <div className="col-span-3 bg-white ">
            {data.map((value) => {
               return (
                  <SearchResultCard
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
            })}
         </div>
      </div>
   );
}

export default SearchResult;
