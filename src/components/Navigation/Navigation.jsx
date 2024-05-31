import { useDispatch, useSelector } from "react-redux";
import s from "./Navigation.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCart } from "../../store/cart/cart.slice.js";

export const Navigation = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.cart.products);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const location = useLocation();
  const isFavoritePage = location.pathname === "/favorite";
  const [hover, setHover] = useState(false);

  return (
    <nav className={s.navigation}>
      <Link
        className={s.link} to="/favorite"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span className={s.text}>Избранное</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8.41325 13.8733C8.18658 13.9533 7.81325 13.9533 7.58659 13.8733C5.65325 13.2133 1.33325 10.46 1.33325 5.79332C1.33325 3.73332 2.99325 2.06665 5.03992 2.06665C6.25325 2.06665 7.32658 2.65332 7.99992 3.55998C8.67325 2.65332 9.75325 2.06665 10.9599 2.06665C13.0066 2.06665 14.6666 3.73332 14.6666 5.79332C14.6666 10.46 10.3466 13.2133 8.41325 13.8733Z"
            fill={isFavoritePage ? "#780096" : "white"}
            stroke={(isFavoritePage || hover) ? "#780096" : "#1c1c1c"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <Link className={s.link} to="/cart">
        <span className={s.text}>Корзина</span>
        <span>({product.length})</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.87329 1.33325L3.45996 3.75325"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.1267 1.33325L12.54 3.75325"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.33337 5.23324C1.33337 3.9999 1.99337 3.8999 2.81337 3.8999H13.1867C14.0067 3.8999 14.6667 3.9999 14.6667 5.23324C14.6667 6.66657 14.0067 6.56657 13.1867 6.56657H2.81337C1.99337 6.56657 1.33337 6.66657 1.33337 5.23324Z"
            stroke="currentColor"
          />
          <path d="M6.50671 9.33325V11.6999" stroke="currentColor" strokeLinecap="round" />
          <path d="M9.57336 9.33325V11.6999" stroke="currentColor" strokeLinecap="round" />
          <path
            d="M2.33337 6.66675L3.27337 12.4267C3.48671 13.7201 4.00004 14.6667 5.90671 14.6667H9.92671C12 14.6667 12.3067 13.7601 12.5467 12.5067L13.6667 6.66675"
            stroke="currentColor"
            strokeLinecap="round"
          />
        </svg>
      </Link>
    </nav>
  );
};
