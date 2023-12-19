import React from 'react'

const Card = ({ imageSrc, name, description, logo }) => {
  return (
    <div
      className="rounded-[24px] overflow-hidden shadow-[0px_2px_10px_rgba(3,3,3,0.1)]
      max-h-[481px]
      mobile:h-[60%]
      tablet:h-[75%] 
      laptop: h-[100%]"
    >
      <img
        className="w-full mobile:pb-[15px] tablet:pb-[20px] laptop:pb-[25px]"
        src={imageSrc}
        alt={name}
      />
      <div className="mobile:pl-[15px] tablet:pl-[20px] laptop:pl-[25px]">
        <h3
          className="text-[#030303] mobile:text-[16px] mobile:pb-[12px] 
        tablet:text-[20px] tablet:pb-[16px] 
        laptop:text-[24px] laptop: pb-[20px]"
        >
          {name}
        </h3>
        <p
          className="text-[#030303] 
        mobile:h-[96px]  mobile:text-[12px] 
        tablet:h-[120px] tablet:text-[16px] 
        laptop:h-[144px] laptop:text-[20px]"
        >
          {description}
        </p>
        <p
          className="text-[#030303]  
        mobile:text-[12px] mobile:pb-[12px] 
        tablet:text-[16px] tablet:pb-[16px]  
        laptop:text-[20px] laptop: pb-[20px]"
        >
          {logo}
        </p>
      </div>
    </div>
  )
}

export default Card
