import s from "./CartProducts.module.scss";
import { useDispatch } from "react-redux";
import { API_URL } from "../../consts.js";
import { removeProductFromCart, updateProductInCart } from "../../store/cart/cart.slice.js";
import { Loader } from "../Loader/Loader.jsx";

export const CartProducts = ({ products, loadingFetch, error }) => {
  const dispatch = useDispatch();

  const handleMinus = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateProductInCart({
        productId: id,
        quantity: quantity - 1
      }));
    } else {
      dispatch(removeProductFromCart(id));
    }
  };

  const handlePlus = (id, quantity) => {
    dispatch(updateProductInCart({
      productId: id,
      quantity: quantity + 1
    }));
  };

  return (
    <>
      {loadingFetch && <Loader/>}
      {error && <>Ошибка получения данных из корзины : {error}</>}
      <ul className={s.products}>
        {!error && !loadingFetch && products?.length > 0 &&
          products.map(({ id, images: [image], name, price, article, quantity }) => (
            <li key={id} className={s.product}>
              <img
                className={s.img}
                src={`${API_URL}/${image.replace("img//", "img/")}`}
                alt={name}
                title={name}
              />
              <h3 className={s.titleProduct}>{name}</h3>
              <p className={s.price}>{parseInt(price).toLocaleString()}&nbsp;₽</p>
              <p className={s.article}>арт.&nbsp;{article}</p>

              <div className={s.productControls}>
                <button
                  className={s.productBtn}
                  onClick={() => handleMinus(id, quantity)}
                >-
                </button>
                <p className={s.productCount}>{quantity}</p>
                <button
                  className={s.productBtn}
                  onClick={() => handlePlus(id, quantity)}
                >+
                </button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};
