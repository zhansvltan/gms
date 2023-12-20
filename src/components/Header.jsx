import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleScrollClick = (targetId) => {
    const targetComponent = document.getElementById(targetId)

    if (targetComponent) {
      const yOffset =
        targetComponent.getBoundingClientRect().top + window.scrollY

      // Scroll to the target component
      window.scrollTo({ top: yOffset, behavior: 'smooth' })

      // Close the menu after clicking on a link
      setMenuOpen(false)
    }
  }

  return (
    <div>
      {/* Navigation */}
      <nav
        className={`relative flex justify-between
                      mobile:px-[30px] mobile:py-[5px]
                      tablet:px-[50px] tablet:py-[8px]
                      laptop:px-[70px] laptop:py-[10px]
                      mobile:h-[90px] tablet:h-[107px] laptop:h-[107px]  rounded-t-3xl bg-white shadow-[0px_2px_10px_rgba(3,3,3,0.1)]`}
      >
        <img
          src="logo.svg"
          alt="logo"
          className="mobile:w-[98px] mobile:h-[53px] tablet:w-[147px] tablet:h-[75px] laptop:w-[163px] laptop:h-[87px]"
        />

        {/* Burger Menu Button */}
        <button
          className="absolute mobile:text-[40px] mobile:top-[0px] mobile:right-[0px]
          tablet:text-[60px] tablet:top-[0px] tablet:right-[0px]  
          laptop:hidden focus:outline-none"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div
          className={`flex justify-between  items-center
          mobile:absolute mobile:gap-[5px] mobile:py-[5px] mobile:top-[0px] mobile:left-1/2 
          tablet:gap-[10px] tablet:py-[10px] 
          laptop:static laptop:flex-row laptop:gap-[150px] laptop:py-[0px] ${
            isMenuOpen ? 'flex-col' : 'hidden laptop:flex'
          }`}
        >
          <Link
            to="/"
            className="text-[#030303] mobile:text-[8px] tablet:text-[12px] laptop:text-[16px]"
            onClick={() => handleScrollClick('about')}
          >
            О нас
          </Link>
          <Link
            to="/"
            className="text-[#030303] mobile:text-[8px] tablet:text-[12px] laptop:text-[16px]"
            onClick={() => handleScrollClick('services')}
          >
            Услуги
          </Link>
          <Link
            to="/"
            className="text-[#030303] mobile:text-[8px] tablet:text-[12px] laptop:text-[16px]"
            onClick={() => handleScrollClick('projects')}
          >
            Проекты
          </Link>
          <Link
            to="/"
            className="text-[#030303] mobile:text-[8px] tablet:text-[12px] laptop:text-[16px]"
            onClick={() => handleScrollClick('main')}
          >
            Новости
          </Link>
          <Link
            to="/"
            className="text-[#030303] mobile:text-[8px] tablet:text-[12px] laptop:text-[16px]"
            onClick={() => handleScrollClick('contact')}
          >
            Контакты
          </Link>
        </div>
      </nav>
    </div>
  )
}
