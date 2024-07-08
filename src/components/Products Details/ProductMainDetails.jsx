import React from "react";
import ProductDetailsCard from "./ProductDetailsCard";
import { useSelector } from "react-redux";
function ProductMainDetails() {
   const { data, loading } = useSelector((state) => state.buyProduct);
   if (!data.length) {
      return <p>Data Not found</p>;
   }
   console.log(data);
   return (
      <div className="h-full w-full bg-white p-2 flex">
         {loading ? (
            <div className="flex justify-center items-center h-screen">
               <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-purple-500"></div>
               <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-red-500 ml-3"></div>
               <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-blue-500 ml-3"></div>
            </div>
         ) : (
            data.map((value) => {
               console.log(value);
               return (
                  <ProductDetailsCard
                     key={value.id}
                     imgArr={value.images}
                     title={value.title}
                     desc={value.description}
                     disc={value.discountPercentage}
                     review={value.reviews}
                     returnPolicy={value.returnPolicy}
                     Warranty={value.warrantyInformation}
                     delivery={value.shippingInformation}
                     rating={value.rating}
                     price={value.price}
                  />
               );
            })
         )}
      </div>
   );
}

export default ProductMainDetails;
