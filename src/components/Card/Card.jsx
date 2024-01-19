import { Container } from "../../views/Container/Container.jsx";
import s from "./Card.module.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "../Slider/Slider.jsx";
import { fetchProduct } from "../../store/product/product.slice.js";

export const Card = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  if (loading) {
    return (
      <Container>
        <div>Загрузка...</div>
      </Container>
    );
  }
  if (error) {
    return (
      <Container>
        <div>Ошибка: {error}</div>
      </Container>
    );
  }
  console.log("data", data);

  return (
    <section className={s.card}>
      <Container className={s.container}>
        <h2 className={s.title}>{data?.name}</h2>

        <Slider images={data?.images} name={data?.name} />

        <div className={s.info}>
          <p className={s.price}>{data?.price.toLocaleString()}&nbsp;&#8381;</p>
          <p className={s.article}>арт. {data?.article}</p>

          <div className={s.characteristics}>
            <h3 className={s.characteristicsTitle}>Общие характеристики</h3>

            <table className={s.characteristicsTable}>
              <tbody>
                {data?.characteristics.map((item, i) => (
                  <tr key={i} className={s.tableRow}>
                    <td className={s.tableField}>{item[0]}</td>
                    <td className={s.tableValue}>{item[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={s.btns}>
            <button className={`${s.btn} btn btn_filled`}>В корзину</button>
            <button
              className={`${s.like} favorite-btn`}
              data-id={data.id}
              type="button"
              aria-label="Добавить в Избранное"
              title="Добавить в Избранное">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="favorite-icon"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="white">
                <path
                  d="M8.41337 13.8733C8.18671 13.9533 7.81337 13.9533 7.58671 13.8733C5.65337 13.2133 1.33337 10.46 1.33337 5.79332C1.33337 3.73332 2.99337 2.06665 5.04004 2.06665C6.25337 2.06665 7.32671 2.65332 8.00004 3.55998C8.67337 2.65332 9.75337 2.06665 10.96 2.06665C13.0067 2.06665 14.6667 3.73332 14.6667 5.79332C14.6667 10.46 10.3467 13.2133 8.41337 13.8733Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                </path>
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
