import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataAsync } from "../../store/features/asyncCategorySlice";

function CardList() {
   const dispatch = useDispatch();
   const { data, loading, error } = useSelector((state) => state.category);

   useEffect(() => {
      dispatch(fetchDataAsync());
   }, [dispatch]);

   if (loading) {
      return (
         <p className="text-black font-xl font-bold text-center font-Inter">
            Loading ...
         </p>
      );
   }
   if (error) {
      return <p className="text-red-500 font-bold">{error}</p>;
   }

   return (
      <>
         <div className="h-full bg-gray-100/60 rounded p-3">
            <div className="font-Inter px-1 pb-4">
               <h2 className="text-xl font-semibold">Laptops Category</h2>
            </div>
            <div className="flex flex-wrap justify-around">
               {data.map((data) => {
                  return (
                     <Card
                        key={data.id}
                        img={data.thumbnail}
                        title={data.title}
                        price={data.price}
                     />
                  );
               })}
            </div>
         </div>
      </>
   );
}

export default CardList;
