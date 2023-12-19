import React from 'react'
export default function ImageComponent() {
  return (
    <>
      <img
        src="card1.svg"
        alt="background"
        className="rounded-none brightness-50 pt-2 w-[100%] object-cover
                    mobile:h-[400px]
                    tablet:h-[500px]
                    laptop:h-[560px]"
      />
      <div
        className="absolute flex-col justify-between space-y-10 
                    mobile:left-[30px] mobile:top-[120px]
                    tablet:left-[45px] tablet:top-[150px]
                    laptop:left-[55px] laptop:top-[170px]"
      >
        <h2
          className="text-white font-[500] max-w-[646px]
                      mobile:text-[24px] mobile:w-[40%] 
                      tablet:text-[36px] tablet:w-[60%] 
                      laptop:text-[52px] laptop:w-[100%]"
        >
          Формируем будущее инфраструктуры
        </h2>
        <p
          className="text-white font-[100] max-w-[610px]
                    mobile:text-[12px] mobile:w-[40%] 
                    tablet:text-[18px] tablet:w-[60%] 
                    laptop:text-[24px] laptop:w-[100%]"
        >
          Частная консалтинговая компания, работающая в формате фабрики мысли,
          расположенная в Астане в юрисдикции МФЦА
        </p>
        <button
          className="leading-tight text-[#000000] bg-[#c3f2cb] rounded-3xl font-[500] 
                      mobile:w-[105px] mobile:h-[25px] mobile:text-[8px]
                      tablet:w-[210px] tablet:h-[40px] tablet:text-[12px]
                      laptop:w-[316px] laptop:h-[45px] laptop:text-[16px]"
        >
          Оставить заявку
        </button>
      </div>
    </>
  )
}
