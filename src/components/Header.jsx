import React, { useState } from 'react'
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
    <div id="header" className="max-w-[100vw]">
      {/* Navigation */}
      <nav
        className={`flex items-center justify-between relative rounded-t-3xl bg-white shadow-[0px_2px_10px_rgba(3,3,3,0.1)] p-4 
        mobile:z-10`}
      >
        <img
          src="logo.svg"
          alt="logo"
          className="
          mobile:w-[81px] 
          tablet:w-[147px] 
          laptop:w-[163px]"
        />
        {/* Burger Menu Button */}
        <button
          className="
          mobile:w-[30px]
          laptop:hidden"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <img src="burger.svg" className="laptop:hidden" />
        </button>
        {/* Navigation Links */}
        <div
          className={`flex justify-between items-center
                    mobile:absolute mobile:z-10 mobile:top-[7vh] mobile:w-[100%] mobile:py-4 mobile:left-[0px] mobile:bg-white
                    laptop:static laptop:w-[50%] ${
                      isMenuOpen ? 'flex-col' : 'hidden laptop:flex'
                    }`}
        >
          <Link
            to="/"
            className="text-[#030303] mobile:text-[18px] laptop:text-[16px]"
            onClick={() => handleScrollClick('about')}
          >
            О нас
          </Link>
          <Link
            to="/"
            className="text-[#030303] mobile:text-[18px] laptop:text-[16px]"
            onClick={() => handleScrollClick('services')}
          >
            Услуги
          </Link>
          <Link
            to="/"
            className="text-[#030303] mobile:text-[18px] laptop:text-[16px]"
            onClick={() => handleScrollClick('projects')}
          >
            Проекты
          </Link>
          <Link
            to="/"
            className="text-[#030303] mobile:text-[18px] laptop:text-[16px]"
            onClick={() => handleScrollClick('main')}
          >
            Новости
          </Link>
          <Link
            to="/"
            className="text-[#030303] mobile:text-[18px] laptop:text-[16px]"
            onClick={() => handleScrollClick('contact')}
          >
            Контакты
          </Link>
        </div>
      </nav>
    </div>
  )
}
