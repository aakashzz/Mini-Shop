import React from 'react'

function SearchResultCard({img , brandName, desc, discount, price, rating, warranty, ship}) {
  return (
    <div className='w-full h-full border flex '>
        <div className='w-60 bg-gray-100 '>
            <img src={img} alt="" />
        </div>
        <div className='px-4 py-3 font-Inter w-[73%]'>
                <h3 className='font-bold text-lg'>{brandName}</h3>
                <article className='text-[13px] font-medium'>{desc}</article>
                <p className='text-sm font-medium w-fit'>({discount})</p>
                <p className='text-2xl py-1 w-fit'>${price}</p>
                <p className='text-lg w-fit'>{rating}</p>
                <p className='text-sm font-medium py-1'>{warranty}</p>
                <p className='text-xs font-medium  '>{ship}</p>
                <button className='bg-red-500 text-white font-medium text-xs px-2 py-1.5 rounded-full my-2'>Add to cart</button>

        </div>
    </div>
  )
}

export default SearchResultCard
