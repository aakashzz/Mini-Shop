import React from "react";
import Card from "../Product/Card";
import { useSelector } from "react-redux";

function Category() {
   const category = useSelector((state) => state.select.data);
   return (
      <div className="h-full py-10">
         <div className="flex flex-wrap justify-around gap-y-2">
            {category.map((value) => {
               return (
                  <Card
                     data={value}
                     key={value.id}
                     img={value.thumbnail}
                     title={value.title}
                     price={value.price}
                  />
               );
            })}
         </div>
      </div>
   );
}

export default Category;
