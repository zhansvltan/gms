import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const handleScrollClick = (targetId) => {
    const targetComponent = document.getElementById(targetId)

    if (targetComponent) {
      const yOffset =
        targetComponent.getBoundingClientRect().top + window.scrollY

      // Scroll to the target component
      window.scrollTo({ top: yOffset, behavior: 'smooth' })
    }
  }
  return (
    <>
      <nav className="relative flex justify-between px-[70px] py-[10px] rounded-t-3xl bg-white shadow-[0px_2px_10px_rgba(3,3,3,0.1)]">
        <img src="logo.svg" alt="logo" />
        <div className="flex justify-between gap-[150px] items-center">
          <Link
            to="/"
            className=" text-[#030303] text-[16px]"
            onClick={() => handleScrollClick('about')}
          >
            О нас
          </Link>
          <Link
            to="/"
            className=" text-[#030303] text-[16px]"
            onClick={() => handleScrollClick('services')}
          >
            Услуги
          </Link>
          <Link
            to="/"
            className=" text-[#030303] text-[16px]"
            onClick={() => handleScrollClick('projects')}
          >
            Проекты
          </Link>
          <Link
            to="/"
            className=" text-[#030303] text-[16px]"
            onClick={() => handleScrollClick('main')}
          >
            Новости
          </Link>
          <Link
            to="/"
            className=" text-[#030303] text-[16px]"
            onClick={() => handleScrollClick('contact')}
          >
            Контакты
          </Link>
        </div>
      </nav>
    </>
  )
}
