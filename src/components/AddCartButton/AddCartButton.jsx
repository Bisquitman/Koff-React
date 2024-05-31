import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../../store/cart/cart.slice.js";

export const AddCartButton = ({ className, id }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.cart.products);

  const isCart = product.find(item => item.id === id);

  const handlerAddToCart = (e) => {
    e.preventDefault();

    if (!isCart) {
      dispatch(addProductToCart({ productId: id, quantity: 1 }));
    } else {
      dispatch(removeProductFromCart(id));
    }
  };

  return (
    <button
      className={className}
      data-id={id}
      type="button"
      aria-label={isCart ? "Удалить из корзины" : "Добавить в корзину"}
      title={isCart ? "Удалить из корзины" : "Добавить в корзину"}
      onClick={handlerAddToCart}
    >
      {isCart ? "В корзине" : "В корзину"}
    </button>
  );
};
