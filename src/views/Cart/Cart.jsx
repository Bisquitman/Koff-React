import s from "./Cart.module.scss";
import { Container } from "../Container/Container";
import { CartProducts } from "../../components/CartProducts/CartProducts";
import { CartPlace } from "../../components/CartPlace/CartPlace";
import { CartForm } from "../../components/CartForm/CartForm";
import { useSelector } from "react-redux";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);

  if (!cart?.totalCount && !cart?.loadingFetch) {
    return (
      <section className={s.cart}>
        <Container className={s.container}>
          <h2 className={s.title}>Корзина пуста...</h2>
        </Container>
      </section>
    );
  }

  return (
    <section className={s.cart}>
      <Container className={s.container}>
        <h2 className={s.title}>Корзина</h2>
        <CartProducts products={cart?.products} loadingFetch={cart?.loadingFetch} error={cart?.error} />
        <CartPlace totalPrice={cart?.totalPrice} totalCount={cart?.totalCount} loadingFetch={cart?.loadingFetch} />
        <CartForm />
      </Container>
    </section>
  );
};
