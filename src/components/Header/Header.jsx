import Logo from "../Logo";
import { NavLink } from "react-router-dom";
import products from "../../service/products/productsApi";
import { useRef, useState } from "react";
import { fetchDataProducts, emptyDataProducts} from "../../store/features/inputProductsSlice";
import Container from "../container/Container";
import category from "../../service/category/categoryApi";
import { useDispatch } from "react-redux";
import { showCategory, emptyCategory} from "../../store/features/selectCategorySlice";
import { useNavigate } from "react-router-dom";

function Header() {
   const navigate = useNavigate()
   let linkTab = [
      { name: "Home", direction: "/", active: true },
      // { name: "Product", direction: "/product", active: true },
      { name: "Card", direction: "/product", active: true },
      { name: "Order", direction: "/order", active: true },
   ];
   const value = useRef();
   const dispatch = useDispatch();
   function dataSubmit() {
      const inputValue = value.current.value;
      products
         .inputProduct(inputValue)
         .then((data) =>
            data
               ? dispatch(fetchDataProducts(data))
               : dispatch(emptyDataProducts("Product Is Not Found"))
            );
            navigate('/search?')
   }
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
         .catch(emptyCategory());
   }
   return (
      <>
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
                        OK
                     </button>
                  </div>
                  {linkTab.map((item) =>
                     item.active ? (
                        <li>
                           <NavLink
                              key={item.name}
                              to={item.direction}
                              className="w-fit font-Inter font-light text-lg"
                           >
                              {item.name}
                           </NavLink>
                        </li>
                     ) : null
                  )}
               </ul>
            </div>
         </nav>
      </header>
         <div className="py-4">
            <div className="  text-red-500 ">
               <Container>
                  <ul className=" flex gap-x-2 justify-center">
                     {categoryList.map((item) => {
                        return (
                           <NavLink
                           to={"/category"}
                              key={item}
                              value={item}
                              onClick={clickValue}
                              className="font-Inter text-[13px] cursor-pointer rounded-sm border-red-200 border p-1 font-medium hover:bg-red-500 hover:text-white duration-200 "
                           >
                              {item}
                           </NavLink>
                        );
                     })}
                  </ul>
               </Container>
            </div>
         </div>
      </>
   );
}

export default Header;
