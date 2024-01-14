import logoImg from "./logo.svg";
import s from "./Logo.module.scss";

export const Logo = () => (
  <a href="./" className={s.link}>
    <img className={s.img} src={logoImg} alt="Логотип сайта Koff" />
  </a>
);
