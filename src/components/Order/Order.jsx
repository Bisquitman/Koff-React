import s from "./Order.module.scss";
import { Container } from "../../views/Container/Container.jsx";
import classNames from "classnames";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearOrder, fetchOrder } from "../../store/order/order.slice.js";
import { fetchCart } from "../../store/cart/cart.slice.js";

export const Order = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();

  const { orderData, loading, error } = useSelector(state => state.order);

  useEffect(() => {
    dispatch(fetchCart());
  });

  useEffect(() => {
    dispatch(fetchOrder(orderId));

    return () => {
      dispatch(clearOrder());
    };
  }, [dispatch, orderId]);

  if (loading) {
    return (
      <>
        <section className={s.order}>
          <Container className={s.container}>
            <div className={s.body}>
              <div className={s.header}>
                <h2 className={s.title}>Загрузка...</h2>
              </div>
            </div>
          </Container>
        </section>
      </>
    );
  }

  if (error) {
    return (
      <>
        <section className={s.order}>
          <Container className={s.container}>
            <div className={s.body}>
              <div className={s.header}>
                <h2 className={s.title}>Ошибка: {error}</h2>
              </div>
            </div>
          </Container>
        </section>
      </>
    );
  }

  if (!orderData) {
    return (
      <>
        <section className={s.order}>
          <Container className={s.container}>
            <div className={s.body}>
              <div className={s.header}>
                <h2 className={s.title}>Заказ не найден...</h2>
              </div>
            </div>
          </Container>
        </section>
      </>
    );
  }

  return (
    <>
      <section className={s.order}>
        <Container className={s.container}>
          <div className={s.body}>
            <div className={s.header}>
              <h2 className={s.title}>Заказ успешно размещён</h2>
              <div className={s.totalPrice}>{parseInt(orderData?.totalPrice).toLocaleString()}&nbsp;&#8381;</div>
            </div>
            <div className={s.number}>№&nbsp;{orderData?.id}</div>

            <div className={s.tableWrapper}>
              <h3 className={s.subtitle}>Данные доставки</h3>
              <table className={s.table}>
                <tbody>
                  <tr className={s.row}>
                    <td className={s.field}>Получатель</td>
                    <td className={s.value}>{orderData?.name}</td>
                  </tr>
                  <tr className={s.row}>
                    <td className={s.field}>Телефон</td>
                    <td className={s.value}>{orderData?.phone}</td>
                  </tr>
                  <tr className={s.row}>
                    <td className={s.field}>E-mail</td>
                    <td className={s.value}>{orderData?.email}</td>
                  </tr>
                  <tr className={s.row}>
                    <td className={s.field}>Адрес доставки</td>
                    <td className={s.value}>{orderData?.address}</td>
                  </tr>
                  <tr className={s.row}>
                    <td className={s.field}>Способ оплаты</td>
                    <td className={s.value}>{orderData?.paymentType === "card" ? "Картой при получении" : "Наличными при получении"}</td>
                  </tr>
                  <tr className={s.row}>
                    <td className={s.field}>Способ получения</td>
                    <td className={s.value}>{orderData?.deliveryType === "delivery" ? "Доставка" : "Самовывоз"}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Link className={classNames(s.btn, "btn", "btn_filled")} to="/">
              На главную
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};
