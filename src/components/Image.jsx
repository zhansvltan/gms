import React from 'react'
export default function ImageComponent() {
  return (
    <>
      <img
        src="card1.svg"
        alt="background"
        style={{ width: '100%', height: '560px', objectFit: 'cover' }}
        className="rounded-none brightness-50 pt-2"
      />
      <div
        style={{ left: '55px', top: '170px' }}
        className="absolute flex-col justify-between space-y-10"
      >
        <h2
          style={{
            maxWidth: '646px',
            width: '100%',
          }}
          className="text-white text-[52px] font-[500]"
        >
          Формируем будущее инфраструктуры
        </h2>
        <p
          style={{
            maxWidth: '610px',
            width: '100%',
          }}
          className="text-[24px] text-white font-[100]"
        >
          Частная консалтинговая компания, работающая в формате фабрики мысли,
          расположенная в Астане в юрисдикции МФЦА
        </p>
        <button className="leading-tight text-[16px] text-[#000000] bg-[#c3f2cb] rounded-3xl font-[500] w-[316px] h-[45px]">
          Узнать подробнее
        </button>
      </div>
    </>
  )
}
