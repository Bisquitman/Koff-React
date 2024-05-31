import s from "./Cart.module.scss";
import { Container } from "../Container/Container.jsx";
import { CartProducts } from "../../components/CartProducts/CartProducts.jsx";
import { CartPlace } from "../../components/CartPlace/CartPlace.jsx";
import { CartForm } from "../../components/CartForm/CartForm.jsx";
import { useSelector } from "react-redux";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log("cart", cart);
  if (!cart?.totalCount) {
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
        <CartProducts products={cart?.products} />
        <CartPlace totalPrice={cart?.totalPrice} totalCount={cart?.totalCount} />
        <CartForm />
      </Container>
    </section>
  );
};
