import React from "react";

export default function ConsultationComponent() {
  return (
    <div className="flex justify-center bg-[#c3f2cb]">
    <div className="flex-col">
      <h2 className="text-[#030303] text-[52px] font-[600] pt-[90px] text-center pb-[28px]">Получить консультацию</h2>
      <p className="text-[#5d5d5b] text-[24px] text-center pb-[38px]">Консультации, экспертиза</p>
      <div className="flex gap-[31px] justify-center pb-[85px]">
        <button className="leading-tight text-[16px] text-[#030303] bg-[#ffffff] rounded-[24px] font-[600] w-[208px] h-[54px]">Оставить заявку</button>
        <button className="leading-tight text-[16px] text-[#030303] bg-[#ffffff] rounded-[24px] font-[600] w-[208px] h-[54px]">Контакты</button>
      </div>
    </div>
    </div>
  );
}
