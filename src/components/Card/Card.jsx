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
          </div>

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
      </Container>
    </section>
  );
};
