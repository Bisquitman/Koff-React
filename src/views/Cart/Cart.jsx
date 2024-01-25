import s from "./Cart.module.scss";
import { Container } from "../Container/Container.jsx";
import { CartProducts } from "../../components/CartProducts/CartProducts.jsx";
import { CartPlace } from "../../components/CartPlace/CartPlace.jsx";
import { CartForm } from "../../components/CartForm/CartForm.jsx";

export const Cart = () => {
  return (
    <section className={s.cart}>
      <Container className={s.container}>
        <h2 className={s.title}>Корзина</h2>
        <CartProducts />
        <CartPlace />
        <CartForm />
      </Container>
    </section>
  );
};
