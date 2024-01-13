import s from "./Catalog.module.scss";
import { Container } from "../../views/Container/Container.jsx";

export const Catalog = () => (
  <nav className="catalog">
    <Container className={s.container}>
      <ul className={s.list}>
        <li className={s.item}><a className={s.link} href="/category?slug=Тумбы">Тумбы</a></li>
        <li className={s.item}><a className={s.link} href="/category?slug=Стулья">Стулья</a></li>
        <li className={s.item}><a className={s.link} href="/category?slug=Столы">Столы</a></li>
        <li className={s.item}><a className={s.link} href="/category?slug=Пуфы и банкетки">Пуфы и
          банкетки</a></li>
        <li className={s.item}><a className={s.link} href="/category?slug=Кровати">Кровати</a></li>
        <li className={s.item}><a className={s.link} href="/category?slug=Диваны">Диваны</a></li>
        <li className={s.item}><a className={s.link} href="/category?slug=Полки">Полки</a></li>
        <li className={s.item}><a className={s.link} href="/category?slug=Стеллажи">Стеллажи</a></li>
      </ul>
    </Container>
  </nav>
);