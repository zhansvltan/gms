import React from 'react'

export default function ConsultationComponent() {
  const handleScrollClick = () => {
    // Replace 'targetComponentId' with the actual ID of the target component
    const targetComponent = document.getElementById('contact')

    if (targetComponent) {
      const yOffset =
        targetComponent.getBoundingClientRect().top + window.scrollY

      // Scroll to the target component
      window.scrollTo({ top: yOffset, behavior: 'smooth' })
    }
  }
  return (
    <div className="flex justify-center bg-[#c3f2cb]" id="consultation">
      <div className="flex-col">
        <h2
          className="text-[#030303] font-[600] text-center
                      mobile:text-[18px] mobile:pt-[60px] mobile: pb-[16px]
                      tablet:text-[36px] tablet:pt-[75px] tablet: pb-[20px]
                      laptop:text-[52px] laptop:pt-[90px] laptop: pb-[28px]"
        >
          Получить консультацию
        </h2>
        <p
          className="text-[#5d5d5b] text-center  
                    mobile:text-[14px] mobile:pb-[24px] 
                    tablet:text-[20px] tablet:pb-[30px] 
                    laptop:text-[24px] laptop:pb-[38px]"
        >
          Консультации, экспертиза
        </p>
        <div
          className="flex justify-center
        mobile:gap-[20px] mobile:pb-[60px] 
        tablet:gap-[25px] tablet:pb-[75px]
        laptop:gap-[31px] laptop:pb-[85px]"
        >
          <button
            className="leading-tight text-[#030303] bg-[#ffffff] rounded-[24px] font-[600] 
          mobile:text-[12px] mobile:w-[156px] mobile:h-[36px]
          tablet:text-[14px] tablet:w-[183px] tablet:h-[45px]
          laptop:text-[16px] laptop:w-[208px] laptop:h-[54px]"
            onClick={handleScrollClick}
          >
            Оставить заявку
          </button>
          <button
            className="leading-tight text-[#030303] bg-[#ffffff] rounded-[24px] font-[600] 
                  mobile:text-[12px] mobile:w-[156px] mobile:h-[36px]
                  tablet:text-[14px] tablet:w-[183px] tablet:h-[45px]
                  laptop:text-[16px] laptop:w-[208px] laptop:h-[54px]"
            onClick={handleScrollClick}
          >
            Контакты
          </button>
        </div>
      </div>
    </div>
  )
}
