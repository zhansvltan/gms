import React from 'react'
import style from './Contact.module.scss'
const Contact = () => {
  const position = [51.505, -0.09]
  return (
    <div className={style.wrapper} id="contact">
      <h1 className={style.heading}>Связаться с нами</h1>
      <div className={style.contactSection}>
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
          <h2 className={style.infoHeading}>Контактная информация</h2>
          <span>Адрес</span>
          <p>Мангилик Ел 55/19</p>
          <p>МФЦА, офис 219</p>
          <span>Телефоны</span>
          <span>+7 123 456 7890</span>
          <span>Email</span>
          <span>
            <strong>info@infraeconomy.kz</strong>
          </span>
        </div>
      </div>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.9698856010987!2d71.40905707689787!3d51.09056327172152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585701844b831%3A0xcccf73ca09422f3!2sMfts%20Astana!5e0!3m2!1sen!2skz!4v1703416044916!5m2!1sen!2skz"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="laptop:pl-[7%] mobile:w-[100%] laptop:w-[93%]"
      ></iframe>
    </div>
  )
}

export default Contact
