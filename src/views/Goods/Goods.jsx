import s from "./Goods.module.scss";
import { Container } from "../Container/Container.jsx";
import { CardItem } from "../../components/CardItem/CardItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../store/products/products.slice.js";
import { useSearchParams } from "react-router-dom";

export const Goods = ({ isFavorites }) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const q = searchParams.get("search");
  const favoriteList = useSelector((state) => state.favorite.favoriteList).join(",");
  const list = isFavorites ? favoriteList : null;

  const { data, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts({ category, q, list }));
  }, [category, dispatch, list, q]);

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

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={`${s.title} visually-hidden`}>{isFavorites ? "Избранное" : "Список товаров"}</h2>
        {data?.length ? (
          <ul className={s.list}>
            {data.map((item) => (
              <li key={item.id}>
                <CardItem {...item} />
              </li>
            ))}
          </ul>
        ) : (
          <h3 className={s.empty}>По вашему запросу ничего не найдено...</h3>
        )}
      </Container>
    </section>
  );
};
