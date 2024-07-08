import React from 'react'

function Button({buttonName, className,bgColor = "",textColor = "", type, ...props}) {
  return (
    <button
    onClick={type} 
    className={`${bgColor} ${className} ${textColor} `}

    >
      {buttonName}
    </button>
  )
}

export default Button
