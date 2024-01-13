import s from "./CardItem.module.scss";
import { CardButton } from "../CardButton/CardButton.jsx";

export const CardItem = () => (
  <article className={s.card}>
    <a className={`${s.link} ${s.link_img}`} href="/product/id">
      <img className={s.image} src="./img/goods-img.jpg"
        alt="Диван-кровать ИТАЛИЯ Muse Confortplus" title="Диван-кровать ИТАЛИЯ Muse Confortplus" width="302"
        height="250"/>
    </a>
    <div className={s.info}>
      <h3 className={s.title}>
        <a className={s.link} href="/product/id">Диван-кровать ИТАЛИЯ Muse Confortplus</a>
      </h3>
      <p className={s.price}>281&nbsp;170&nbsp;₽</p></div>
    <CardButton/>
    <button className={`${s.favorite} favorite-btn`} data-id="id" type="button" aria-label="Добавить в Избранное" title="Добавить в Избранное">
      <svg xmlns="http://www.w3.org/2000/svg" className="favorite-icon" width="16" height="16" viewBox="0 0 16 16"
        fill="white">
        <path
          d="M8.41337 13.8733C8.18671 13.9533 7.81337 13.9533 7.58671 13.8733C5.65337 13.2133 1.33337 10.46 1.33337 5.79332C1.33337 3.73332 2.99337 2.06665 5.04004 2.06665C6.25337 2.06665 7.32671 2.65332 8.00004 3.55998C8.67337 2.65332 9.75337 2.06665 10.96 2.06665C13.0067 2.06665 14.6667 3.73332 14.6667 5.79332C14.6667 10.46 10.3467 13.2133 8.41337 13.8733Z"
          stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    </button>
  </article>
);