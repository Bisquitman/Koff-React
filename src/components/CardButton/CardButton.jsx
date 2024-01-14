import s from "./CardButton.module.scss";

export const CardButton = ({ data: { id } }) => (
  <button className={`btn ${s.btn}`} data-id={id} type="button" aria-label="Добавить в корзину">
    В корзину
  </button>
);
