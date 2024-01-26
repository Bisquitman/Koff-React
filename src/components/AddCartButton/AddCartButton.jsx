import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/cart/cart.slice.js";

export const AddCartButton = ({ className, id }) => {
  const dispatch = useDispatch();

  const handlerAddToCart = (e) => {
    e.preventDefault();
    dispatch(addProductToCart({ productId: id, quantity: 1 }));
  };

  return (
    <button
      className={className}
      data-id={id}
      type="button"
      aria-label="Добавить в корзину"
      title="Добавить в корзину"
      onClick={handlerAddToCart}
    >
      В корзину
    </button>
  );
};
