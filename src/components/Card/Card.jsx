import { Container } from "../../views/Container/Container.jsx";
import s from "./Card.module.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "../Slider/Slider.jsx";
import { fetchProduct } from "../../store/product/product.slice.js";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton.jsx";
import classNames from "classnames";
import { AddCartButton } from "../AddCartButton/AddCartButton.jsx";
import { Preloader } from "../Preloader/Preloader.jsx";

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
        <Preloader/>
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

  if (!data) {
    return (
      <Container>
        <div>Нет данных...</div>
      </Container>
    );
  }

  return (
    <section className={s.card}>
      <Container className={s.container}>
        <h2 className={s.title}>{data?.name}</h2>

        <Slider images={data?.images} name={data?.name} />

        <div className={s.info}>
          <p className={s.price}>{data?.price?.toLocaleString()}&nbsp;&#8381;</p>
          <p className={s.article}>арт. {data?.article}</p>

          <div className={s.characteristics}>
            <h3 className={s.characteristicsTitle}>Общие характеристики</h3>

            <table className={s.characteristicsTable}>
              <tbody>
                {data?.characteristics?.map((item, i) => (
                  <tr key={i} className={s.tableRow}>
                    <td className={s.tableField}>{item[0]}</td>
                    <td className={s.tableValue}>{item[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={s.btns}>
            <AddCartButton className={classNames(s.btn, "btn", "btn_filled")} id={data?.id} />
            <FavoriteButton className={s.like} id={data?.id} />
          </div>
        </div>
      </Container>
    </section>
  );
};
