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
    <div>
      {/* Navigation */}
      <nav
        className={`relative flex justify-between gap-[7vw]
                      mobile:px-[30px] mobile:py-[5px]
                      tablet:px-[50px] tablet:py-[8px]
                      laptop:px-[70px] laptop:py-[10px]
                      mobile:h-[90px] tablet:h-[117px] laptop:h-[107px]  rounded-t-3xl bg-white shadow-[0px_2px_10px_rgba(3,3,3,0.1)]`}
      >
        <img
          src="logo.svg"
          alt="logo"
          className="mobile:w-[98px] mobile:h-[53px] tablet:w-[147px] tablet:h-[75px] laptop:w-[163px] laptop:h-[87px]"
        />

        {/* Burger Menu Button */}
        <button
          className="absolute mobile:text-[40px] mobile:top-[0px] mobile:right-[2vw]
          tablet:text-[60px] tablet:top-[0px] tablet:right-[0px]  
          laptop:hidden focus:outline-none"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div
          className={`flex justify-between  items-center
          mobile:absolute mobile:z-10 mobile:gap-[10px] mobile:py-[5px] mobile:top-[40vh] mobile:left-[0px] mobile:rounded-md mobile:w-[100%] mobile:bg-black mobile:bg-opacity-50
          tablet:absolute tablet:gap-[20px] tablet:py-[8px] tablet:top-[40vh] tablet:left-[0px] tablet:rounded-md tablet:w-[100%] tablet:bg-black tablet:bg-opacity-50
          laptop:static laptop:flex-row laptop:gap-[150px] laptop:py-[0px] laptop:bg-transparent ${
            isMenuOpen ? 'flex-col' : 'hidden laptop:flex'
          }`}
        >
          <Link
            to="/"
            className="text-[#030303] mobile:text-[20px] mobile:text-white tablet:text-[28px] tablet:text-white laptop:text-[16px] laptop:text-[#030303]"
            onClick={() => handleScrollClick('about')}
          >
            О нас
          </Link>
          <Link
            to="/"
            className="laptop:text-[#030303] mobile:text-[20px] mobile:text-white tablet:text-[28px] tablet:text-white laptop:text-[16px]"
            onClick={() => handleScrollClick('services')}
          >
            Услуги
          </Link>
          <Link
            to="/"
            className="laptop:text-[#030303] mobile:text-[20px] mobile:text-white  tablet:text-[28px] tablet:text-white laptop:text-[16px]"
            onClick={() => handleScrollClick('projects')}
          >
            Проекты
          </Link>
          <Link
            to="/"
            className="laptop:text-[#030303] mobile:text-[20px] mobile:text-white tablet:text-[28px] tablet:text-white laptop:text-[16px]"
            onClick={() => handleScrollClick('main')}
          >
            Новости
          </Link>
          <Link
            to="/"
            className="laptop:text-[#030303] mobile:text-[20px] mobile:text-white  tablet:text-[28px] tablet:text-white laptop:text-[16px]"
            onClick={() => handleScrollClick('contact')}
          >
            Контакты
          </Link>
        </div>
      </nav>
    </div>
  )
}
