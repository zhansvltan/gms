import React from 'react'

const Card = ({ imageSrc, name, description }) => {
  return (
    <div
      className="rounded-[24px] overflow-hidden shadow-[0px_2px_10px_rgba(3,3,3,0.1)]
    mobile:w-[75%]
    tablet:w-[50%]
    laptop:w-[21.5%]"
    >
      <img className="w-full" src={imageSrc} alt={name} />
      <div className="p-4">
        <h3
          className="text-[#030303] 
        mobile:text-[16px]  
        tablet:text-[20px] 
        laptop:text-[24px]"
        >
          {name}
        </h3>
        <p
          className="text-[#030303] h-[20vh]
          mobile:text-[12px] 
          tablet:text-[16px] 
          laptop:text-[20px]"
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export default Card
