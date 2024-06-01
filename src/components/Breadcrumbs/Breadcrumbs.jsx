import s from "./Breadcrumbs.module.scss";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "../../views/Container/Container.jsx";

export const Breadcrumbs = () => {
  const [searchParam] = useSearchParams();
  const category = searchParam.get("category");
  const data = useSelector((state) => state.product.data);

  if (category || data?.category) {
    return (
      <div className={s.breadcrumbs}>
        <Container>
          <ul className={s.list}>
            <li className={s.item}>
              <Link to="/">Главная</Link>
              <span className={s.separator}>&gt;</span>
            </li>
            <li className={s.item}>
              <Link to={`/category?category=${category || data?.category}`}>
                {category || data?.category}
              </Link>
              <span className={s.separator}>&gt;</span>
            </li>

            {!category && data?.name && (
              <li className={s.item}>
                <a>{data?.name}</a>
                <span className={s.separator}>&gt;</span>
              </li>
            )}
          </ul>
        </Container>
      </div>
    );
  }
};