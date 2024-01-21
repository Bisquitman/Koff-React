import s from "./CardItem.module.scss";
import { API_URL } from "../../consts.js";
import { Link } from "react-router-dom";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton.jsx";
import classNames from "classnames";

export const CardItem = ({ id, images: [image], name, price }) => (
  <article className={s.card}>
    <Link className={`${s.link} ${s.link_img}`} to={`/product/${id}`}>
      <img
        className={s.image}
        src={`${API_URL}/${image.replace("img//", "img/")}`}
        alt={name}
        title={name}
        width="302"
        height="250"
      />
    </Link>
    <div className={s.info}>
      <h3 className={s.title}>
        <Link className={s.link} to={`/product/${id}`}>
          {name}
        </Link>
      </h3>
      <p className={s.price}>{price.toLocaleString()}&nbsp;&#8381;</p>
    </div>

    <button
      className={classNames(s.btn, "btn")}
      data-id={id}
      type="button"
      aria-label="Добавить в корзину"
      title="Добавить в корзину">
      В корзину
    </button>

    <FavoriteButton className={s.favorite} id={id} />
  </article>
);
