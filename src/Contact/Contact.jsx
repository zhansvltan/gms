import React from 'react'
import style from './Contact.module.scss'

const Contact = () => {
  return (
    <div className={style.wrapper}>
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
        style={{
          marginTop: '93px',
          borderRadius: '24px',
          maxWidth: '1232px',
          width: '100%',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '240px',
        }}
        src="/image.png"
        alt=""
      />
    </div>
  )
}

export default Contact
