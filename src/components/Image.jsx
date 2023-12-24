import React from 'react'

export default function ImageComponent() {
  const handleScrollClick = () => {
    // Replace 'targetComponentId' with the actual ID of the target component
    const targetComponent = document.getElementById('consultation')

    if (targetComponent) {
      const yOffset =
        targetComponent.getBoundingClientRect().top + window.scrollY

      // Scroll to the target component
      window.scrollTo({ top: yOffset, behavior: 'smooth' })
    }
  }
  return (
    <div id="main">
      <img
        src="card1.svg"
        alt="background"
        className="rounded-none brightness-50  w-[100%] object-cover
                    mobile:h-[300px]
                    tablet:h-[400px]
                    laptop:h-[560px]"
      />
      <div
        className="absolute flex-col justify-between items-start
                  mobile:max-w-[75%]  mobile:top-[85px] mobile:space-y-4 mobile:pl-4
                  tablet:max-w-[60%]  tablet:top-[150px] tablet:space-y-6 
                  laptop:max-w-[45%]  laptop:top-[170px] laptop:space-y-10 laptop:pl-12"
      >
        <h2
          className="text-white font-[500]
                      mobile:text-[24px] 
                      tablet:text-[36px] 
                      laptop:text-[52px]"
        >
          Формируем будущее инфраструктуры
        </h2>
        <p
          className="text-white font-[100]
                    mobile:text-[14px] 
                    tablet:text-[18px] 
                    laptop:text-[24px]"
        >
          Частная консалтинговая компания, работающая в формате фабрики мысли,
          расположенная в Астане в юрисдикции МФЦА
        </p>
        <button
          onClick={handleScrollClick}
          className="leading-tight text-[#000000] bg-[#c3f2cb] rounded-3xl font-[500] 
                      mobile:h-[25px] mobile:text-[8px] mobile:w-[28vw]
                      tablet:h-[40px] tablet:text-[12px]
                      laptop:h-[45px] laptop:text-[16px] laptop:w-[22vw]"
        >
          Узнать подробнее
        </button>
      </div>
    </div>
  )
}
