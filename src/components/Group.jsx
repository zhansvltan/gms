import React from 'react'

export default function GroupsComponent() {
  return (
    <div className="bg-white">
      <h2
        className="font-[500] text-[#5d5d5b] mb-4
                  mobile:text-[24px] mobile:text-center
                  tablet:text-[36px]
                  laptop:text-[42px] laptop:text-start"
      >
        О группе компаний
      </h2>
      <div className="flex justify-center items-center p-6">
        <img src="groups.svg" alt="Groups Img" />
      </div>
    </div>
  )
}
