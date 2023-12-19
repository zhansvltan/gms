import React from 'react'

export default function GroupsComponent() {
  return (
    <div
      className="bg-white
                mobile:pl-[30px] mobile:pt-[20px] mobile:pb-4
                tablet:pl-[45px] tablet:pt-[30px] tablet:pb-12
                laptop:pl-[55px] laptop:pt-[38px] laptop:pb-16"
    >
      <h2
        className="font-[500] text-[#5d5d5b]
                  mobile:text-[24px] mobile:pb-3
                  tablet:text-[36px] tablet:pb-6
                  laptop:text-[42px] laptop:pb-12"
      >
        О группе компаний
      </h2>
      <div className="flex justify-center items-center">
        <img src="groups.svg" alt="Groups Img" />
      </div>
    </div>
  )
}
