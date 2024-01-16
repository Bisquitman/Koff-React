import s from "./Catalog.module.scss";
import { Container } from "../Container/Container.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/categories.slice.js";
import { Link } from "react-router-dom";

export const Catalog = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) return <Container><div>Загрузка...</div></Container>;
  if (error) return <Container><div>Ошибка: {error}</div></Container>;

  return (
    <nav className={s.catalog}>
      <Container className={s.container}>
        <ul className={s.list}>
          {data.map((item, i) => (
            <li className={s.item} key={i}>
              <Link className={s.link} to={`/category?slug=${item}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};
