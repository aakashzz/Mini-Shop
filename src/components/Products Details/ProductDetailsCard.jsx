import React, { useState } from "react";
import Button from "../Button";
import Star from "../Star/Star";


function ProductDetailsCard({imgArr, title, desc, price, disc, rating, review , returnPolicy,  Warranty, delivery}) {
   const discountPriceLess = price * disc/ 100;
   const realAmount = price - discountPriceLess;
   const [imgSelection, setImgSelection] = useState(imgArr[0]);
   function selectImageToShow(e){
      setImgSelection(e.target.currentSrc);
   }
   return (
      <div className="h-full w-full bg-white p-2 flex">
          <div className=" h-full w-[43%] bg-white flex ">
            <div className=" w-16 mx-3 h-fit border-gray-200">
               {
                  imgArr?.map((img)=>{
                     return <img loading="lazy" onClick={selectImageToShow} className="border cursor-pointer border-gray-200" src={img} alt={title}/>
                  })
               }
            </div>
            <div className="w-[500px] h-full">
               <img
                  className="border"
                  loading="lazy"
                  src={imgSelection}
                  alt={title}
               />
            </div>
         </div>
         <div className=" h-full w-[57%] p-2">
            <div className="p-4 font-Inter">
               <h2 className=" text-2xl font-medium">
                  {title}
               </h2>
               <article className="text-sm font-medium py-2">
               {desc}
               </article>
               <p className="pt-2">{<Star rating={rating} />}</p>
               <div>
                  <span className="text-red-500 text-xl font-light pr-3">
                     -{disc}
                  </span>
                  <span className=" text-3xl font-medium ">$ {realAmount.toLocaleString()}</span>
                  <p className="text-gray-500 text-sm pt-2">
                     M.R.P <del>${price}</del>
                  </p>
               </div>
               <div>
                  <Button
                     buttonName={"Buy Now"}
                     bgColor="bg-orange-500"
                     textColor="text-white"
                     className={
                        "px-5 rounded-full py-1 font-medium my-7 text-xl"
                     }
                  />
                  <Button
                     buttonName={"Add Cart"}
                     bgColor="bg-red-500"
                     textColor="text-white"
                     className={
                        "px-5 rounded-full mx-5 py-1 font-medium my-7 text-xl"
                     }
                  />
               </div>
               <div className="h-24 w-80 flex py-5 gap-x-5">
                  <div className="w-12 text-center">
                     <img
                        className="w-12"
                        src="../../../public/static/3668833_maintenance_repair_service_icon.svg"
                        alt=""
                     />
                     <p className="text-[10px]">{returnPolicy}</p>
                  </div>
                  <div className="w-12 text-center">
                     <img
                        className="w-12"
                        src="../../../public/static/4230551_delivery_shipping_time_icon.svg"
                        alt=""
                     />
                     <p className="text-[10px]">{delivery}</p>
                  </div>
                  <div className="w-12 text-center ">
                     <img
                        className="w-12"
                        src="../../../public/static/9840641_warranty_security_ecommerce_shop_market_icon.svg"
                        alt=""
                     />
                     <p className="text-[10px]">{Warranty}</p>
                  </div>
               </div>
               <div className=" bg-gray-200/40 my-10 ">
                     <div className="p-4">
                        <h2 className="text-xl font-medium pb-2">Review</h2>
                        <div className="border bg-white text-sm rounded-md p-3">
                           {
                              review.map((review)=>{
                                 return<div className="border rounded-md px-2">
                                    <div className="flex items-end gap-x-2 py-2">
                                    <img className="w-6" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male4-1024.png" alt="" />
                                    <span className="text-base">{review.reviewerName}</span>
                                    </div>
                                    <p className="py-1">{<Star rating={review.rating} />}</p>
                                    <article className="font-light">{review.comment}</article>
                             </div>
                              })
                           }
                           
                        </div>
                     </div>
               </div>
            </div>
         </div>
   
         </div>
   );
}

export default ProductDetailsCard;
