import s from "./Goods.module.scss";
import { Container } from "../Container/Container.jsx";
import { CardItem } from "../../components/CardItem/CardItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../store/products/products.slice.js";
import { useLocation, useSearchParams } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination.jsx";
import { Loader } from "../../components/Loader/Loader.jsx";

export const Goods = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { data, loading, error, pagination } = useSelector((state) => state.products);
  const favoriteList = useSelector((state) => state.favorite.favoriteList.join(","));
  const { pathname } = useLocation();

  const category = searchParams.get("category");
  const q = searchParams.get("search");
  const page = searchParams.get("page");

  const [isFavoritePage, setIsFavoritePage] = useState(false);

  useEffect(() => {
    if (pathname !== "/favorite") {
      dispatch(fetchProducts({ category, q, page }));
      setIsFavoritePage(false);
    }
  }, [category, dispatch, page, pathname, q]);

  useEffect(() => {
    if (pathname === "/favorite") {
      dispatch(fetchProducts({ list: favoriteList, page }));
      setIsFavoritePage(true);
    }
  }, [dispatch, favoriteList, page, pathname]);

  if (loading) {
    return (
      <Loader/>
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
        <h2 className={`${s.title} ${isFavoritePage || "visually-hidden"}`}>
          {isFavoritePage ? "Избранное" : "Список товаров"}
        </h2>

        {
          !loading && data?.length ? (
            <>
              <ul className={s.list}>
                {data.map((item) => (
                  <li key={item.id}>
                    <CardItem {...item} />
                  </li>
                ))}
              </ul>

              {pagination ? <Pagination pagination={pagination}/> : ""}
            </>
          ) : isFavoritePage ? (
            <h3 className={s.empty}>В Избранном ничего нет...</h3>
          ) : (
            <h3 className={s.empty}>По вашему запросу ничего не найдено...</h3>
          )
        }
      </Container>
    </section>
  );
};
