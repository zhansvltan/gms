import React from 'react'
import style from './Contact.module.scss'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
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
      {/* <img
        className={`${style.image} ${style.responsiveImage}`}
        src="/image.png"
        alt=""
      /> */}
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[51.505, -0.09]}>
          <Popup>Here is marker</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Contact
