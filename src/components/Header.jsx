import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="relative flex justify-between px-[70px] py-[10px] rounded-t-3xl bg-white shadow-[0px_2px_10px_rgba(3,3,3,0.1)]">
        <img src="logo.svg" alt="logo"/>
        <div className="flex justify-between gap-[150px] items-center">
          <Link to="/" className=" text-[#030303] text-[16px]">
            О нас
          </Link>
          <Link to="/" className=" text-[#030303] text-[16px]">
            Услуги
          </Link>
          <Link to="/" className=" text-[#030303] text-[16px]">
            Проекты
          </Link>
          <Link to="/" className=" text-[#030303] text-[16px]">
            Новости
          </Link>
          <Link to="/contact" className=" text-[#030303] text-[16px]">
            Контакты
          </Link>
        </div>
      </nav>
    </>
  );
}


