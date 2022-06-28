import React from 'react'
import style from '../styles/Card.module.css';
const Card = ({name, logo,img, clase, text, class_btn}) => {
    let style_btn = style.custom_btn;
    if (clase === 'green') {
        style_btn = style.custom_btn_green;
    }
  return (
    <div className="card">
        <div className={`circle ${clase}`}>
            <img src={`assets/${logo}`} className="logo"  alt='logo_coca_cola'/>
        </div>
        <div className="content">
            <h2>{name}</h2>
            <p>{text}</p>
            <button className={style_btn}>Explore</button>
        </div>
        <img src={`assets/${img}`} className="product_img" alt='coca_cola'/>
    </div>
  )
}

export default Card;
