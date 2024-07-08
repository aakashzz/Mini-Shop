import React, { useEffect } from 'react'
import Card from './Card';
import { fetchProductsDataAsync } from "../../store/features/asyncAllProductsSlice";
import { useDispatch, useSelector } from 'react-redux';

function AllProducts() {
    const dispatch = useDispatch();
    const { error, data, loading } = useSelector((state) => state.products);

    useEffect(() => {
       dispatch(fetchProductsDataAsync());
    }, [dispatch]);

    if (loading) {
         return
    }
  return (
    <div className="bg-gray-100 h-full w-full py-3 px-3">
               <h2 className="font-Inter font-light text-3xl py-6  pl-7">All Products</h2>
               <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-4 ">
                  {data.map((data) => {
                     return <Card
                        key={data.id}
                        img={data.thumbnail}
                        title={data.title}
                        price={data.price}
                        data={data}
                     />;
                  })}
               </div>
            </div>
  )
}

export default AllProducts
