import React from "react";
import Button from "../Button";
import { addBuyingProductDetails, emptyBuyProductDetails } from "../../store/features/buyProductDetails";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Card({ img, price, title , data}) {
   const navigate = useNavigate()
   const dispatch = useDispatch();
   function buyBtn(){
      console.log(data)
      dispatch(addBuyingProductDetails(data))
      navigate('/product')
   }
   
   return (
      <>
         <div className="w-fit  bg-white rounded hover:shadow-2xl shadow-gray-200 duration-500">
            <div className="w-52 border rounded  h-52 cursor-pointer">
               <img src={img} alt="" className="rounded-t w-fit h-52" />
            </div>
            <div className="font-Inter  text-center py-2  space-y-1 bg-slate-200">
               <h3 className="text-sm font-medium  text-wrap w-52 ">{title}</h3>
               <div className="flex justify-between px-3">
                     <Button buttonName={"Card"} className={'font-Inter text-[11px] cursor-pointer rounded-sm border-red-200 border px-1.5 text-red-500 font-medium hover:bg-red-500 hover:text-white duration-200'}/>
                  <p className="text-base  text-blue-800  font-semibold">
                     ${price}
                  </p>
                  <Button type={buyBtn} buttonName={"Buy"} className={'font-Inter text-[11px] cursor-pointer rounded-sm border-orange-300 border px-2 text-orange-500 font-medium hover:bg-orange-500 hover:text-white duration-200'}/>
               </div>
            </div>
         </div>
      </>
   );
}

export default Card;
