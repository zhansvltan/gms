import React from 'react'

export default function PartnerComponent() {
  return (
    <div
      className="flex bg-white items-center justify-center  
        mobile:flex-col mobile:my-8
        laptop:flex-row laptop:my-36"
    >
      <h2
        className="text-[#030303] font-[500] 
        mobile:text-[24px] 
        tablet:text-[36px] 
        laptop:max-w-[30%] laptop:text-[42px]"
      >
        Наши клиенты и партнеры
      </h2>
      <div
        className="flex-col 
      mobile:space-y-8 mobile:p-8 
      laptop:space-y-16 laptop:p-0"
      >
        <div className="flex justify-between">
          <div>
            <img src="lancaster.svg" alt="Lancaster" />
          </div>
          <div>
            <img src="world.svg" alt="World Bank Group" />
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <img src="aifc.svg" alt="AIFC" />
          </div>
          <div>
            <img src="dubai.svg" alt="Dubai" />
          </div>
        </div>
      </div>
    </div>
  )
}
