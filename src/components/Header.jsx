import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  /* useEffect(() => {
    // Add/remove a class to the body when isMenuOpen changes
    if (isMenuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }

    // Cleanup effect
    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [isMenuOpen]) */

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
    <div
      id="header"
      className="max-w-[100vw] mobile:h-[64px] tablet:h-[90px] laptop:h-[107px]"
    >
      {/* Navigation */}
      <nav
        className={`relative flex justify-between gap-[7vw]
                      mobile:px-[30px] mobile:py-[5px]
                      tablet:px-[50px] tablet:py-[8px]
                      laptop:px-[70px] laptop:py-[10px]
                      rounded-t-3xl bg-white shadow-[0px_2px_10px_rgba(3,3,3,0.1)]`}
      >
        <img
          src="logo.svg"
          alt="logo"
          className="mobile:w-[98px] mobile:h-[53px] tablet:w-[147px] tablet:h-[75px] laptop:w-[163px] laptop:h-[87px]"
        />

        {/* Burger Menu Button */}
        <button
          className="absolute mobile:top-[2vh] mobile:right-[5vw] mobile:z-10 w-[7vw]
          tablet:top-[2vh] tablet:right-[5vw]
          laptop:hidden focus:outline-none"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <img src="burger.svg" />
        </button>

        {/* Navigation Links */}
        <div
          className={`flex justify-between
          mobile:absolute mobile:z-10 mobile:gap-[10px] mobile:py-[5px] mobile:top-[6.7vh] mobile:left-[0px] mobile:w-[100%] mobile:bg-white mobile:items-end mobile:pr-[2vw]
          tablet:absolute tablet:gap-[20px] tablet:py-[8px] tablet:top-[6.7vh] tablet:left-[0px] tablet:w-[100%] tablet:bg-white
          laptop:static laptop:flex-row laptop:items-center laptop:gap-[150px] laptop:py-[0px] laptop:bg-transparent ${
            isMenuOpen ? 'flex-col' : 'hidden laptop:flex'
          }`}
        >
          <Link
            to="/"
            className="laptop:text-[#030303] mobile:text-[20px] mobile:text-green-800  tablet:text-[28px] laptop:text-[16px]"
            onClick={() => handleScrollClick('about')}
          >
            О нас
          </Link>
          <Link
            to="/"
            className="laptop:text-[#030303] mobile:text-[20px] mobile:text-green-800  tablet:text-[28px] laptop:text-[16px]"
            onClick={() => handleScrollClick('services')}
          >
            Услуги
          </Link>
          <Link
            to="/"
            className="laptop:text-[#030303] mobile:text-[20px] mobile:text-green-800  tablet:text-[28px] laptop:text-[16px]"
            onClick={() => handleScrollClick('projects')}
          >
            Проекты
          </Link>
          <Link
            to="/"
            className="laptop:text-[#030303] mobile:text-[20px] mobile:text-green-800  tablet:text-[28px] laptop:text-[16px]"
            onClick={() => handleScrollClick('main')}
          >
            Новости
          </Link>
          <Link
            to="/"
            className="laptop:text-[#030303] mobile:text-[20px] mobile:text-green-800  tablet:text-[28px] laptop:text-[16px]"
            onClick={() => handleScrollClick('contact')}
          >
            Контакты
          </Link>
        </div>
      </nav>
    </div>
  )
}
