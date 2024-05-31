import s from "./CartPlace.module.scss";
import { declOfNum } from "../../helpers/declOfNum.js";


export const CartPlace = ({ totalPrice, totalCount }) => (
  <div className={s.place}>
    <h3 className={s.subtitle}>Оформление</h3>
    <div className={s.placeInfo}>
      <p>{totalCount}&nbsp;{declOfNum(totalCount, ["товар", "товара", "товаров"])} на сумму:</p>
      <p>{totalPrice.toLocaleString()}&nbsp;₽</p>
    </div>
    <p className={s.placeDelivery}>Доставка 0&nbsp;₽</p>
    <button className={`${s.placeBtn} btn btn_filled`} form="orderForm">Оформить заказ</button>
  </div>
);
