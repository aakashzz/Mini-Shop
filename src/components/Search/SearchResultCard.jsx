import React from 'react'
import Star from '../Star/Star'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBuyingProductDetails } from '../../store/features/buyProductDetails';

function SearchResultCard({img,data ,title, brandName, desc, discount, price, rating, warranty, ship}) {
  const navigate = useNavigate()
   const dispatch = useDispatch();
   function selectBtn(){
      console.log(data)
      dispatch(addBuyingProductDetails(data))
      navigate('/product')
   }

  return (
    <div className='w-full my-4 rounded h-fit border flex '>
        <div onClick={selectBtn} className='w-60 bg-gray-100 cursor-pointer'>
            <img src={img} alt={title} />
        </div>
        <div className='px-4 py-3 font-Inter w-[73%]'>
                <h3 className='font-bold text-lg'>{brandName}</h3>
                <article className='text-[13px] font-medium'>{desc}</article>
                <p className='text-sm font-medium w-fit'>(%{discount})</p>
                <p className='text-2xl py-1 w-fit'>${price}</p>
                <Star rating={rating}/>
                <p className='text-sm font-medium py-1'>{warranty}</p>
                <p className='text-xs font-medium  '>{ship}</p>
                <button className='bg-red-500 text-white font-medium text-xs px-2 py-1.5 rounded-full my-2'>Add to cart</button>

        </div>
    </div>
  )
}

export default SearchResultCard
