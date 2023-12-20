import React from 'react'
import style from './Contact.module.scss'

const Contact = () => {
  return (
    <div className={style.wrapper} id="contact">
      <h1>Связаться с нами</h1>
      <div className={style.wrapper__contact}>
        <div className={style.contactForm}>
          <input
            className={style.inputField}
            type="text"
            placeholder="Ваше имя"
          />
          <input
            className={style.inputField}
            type="text"
            placeholder="Ваш email"
          />
          <textarea
            className={style.textareaField}
            placeholder="Текст обращения"
          />
          <button className={style.submitButton}>Отправить</button>
        </div>
        <div className={style.contactInfoContainer}>
          <h2>Контактная информация</h2>
          <span>Адрес</span>
          <p
            style={{
              margin: '0px',
            }}
          >
            Мангилик Ел 55/19
          </p>
          <p
            style={{
              marginBottom: '24px',
            }}
          >
            {' '}
            МФЦА, офис 219
          </p>
          <span>Телефоны</span>
          <span
            style={{
              marginBottom: '24px',
            }}
          >
            +7 123 456 7890
          </span>
          <span
            style={{
              marginBotton: '12px',
            }}
          >
            Email
          </span>
          <span>
            <strong>info@infraeconomy.kz</strong>
          </span>
        </div>
      </div>
      <img
        className="h-[240px] w-[1232px] rounded-3xl mobile:mt-[190px] object-cover no-repeat laptop: mt-[93px]"
        src="/image.png"
        alt=""
      />
    </div>
  )
}

export default Contact
