import React from 'react'

export default function GroupsComponent() {
  return (
    <div
      className="bg-white
                laptop:pl-[55px] laptop:pt-[38px] laptop:pb-16"
    >
      <h2
        className="font-[500] text-[#5d5d5b]
                  mobile:text-[24px]
                  tablet:text-[36px]
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
