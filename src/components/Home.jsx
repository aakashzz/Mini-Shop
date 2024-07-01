import React from "react";
import CardList from "./Product/CardList";
import Container from "./container/Container";

function Home() {
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
   return (
      <main className="h-full py-4 ">
         <Container>
            <div className="  text-red-500 ">
               <ul className=" flex gap-x-2 justify-center">
                  {categoryList.map((item) => {
                     return (
                        <li
                           key={item}
                           className="font-Inter text-[13px] rounded-sm border-red-200 border p-1 font-medium hover:bg-red-500 hover:text-white duration-200 "
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
         </Container>
      </main>
   );
}

export default Home;
