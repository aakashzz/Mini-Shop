import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import React from 'react'

function Star({rating}) {
    const starRating = Array.from({length:5}, (und, index)=>{
        let number = index + 1;
        return (
            <span key={index}>
                {
                    rating >= index+1
                    ? <FaStar className="icon"/>
                    : rating >= number
                    ? <FaStarHalfAlt className="icon" />
                    : <AiOutlineStar className="icon" />
                }
            </span>
        )
    })
  return (
    <span className="flex text-yellow-400">
      {starRating}
    </span>
  )
}

export default Star
