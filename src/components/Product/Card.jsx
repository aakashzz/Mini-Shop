import React from "react";

function Card({img,price, title}) {
   return (
      <>
         <div className="w-fit  bg-white rounded">
            <div className="w-52 border rounded  h-52">
               <img
                  src={img}
                  alt=""
                  className="rounded-t w-fit h-52"
               />
            </div>
            <div className="font-Inter  text-center py-2  space-y-1 bg-slate-200">
               <h3 className="text-sm font-medium  text-wrap w-52 ">
                  {title}
               </h3>
               <p className="text-base  text-blue-800  font-semibold">
                  ${price}
               </p>
            </div>
         </div>
      </>
   );
}

export default Card;
