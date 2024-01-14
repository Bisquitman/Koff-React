import s from "./Developer.module.scss";

export const Developer = () => (
  <ul className={s.developer}>
    <li className={s.item}>
      Designer:{" "}
      <a className={s.link} href="https://t.me/Mrshmallowww" target="_blank" rel="noopener noreferrer">
        Anastasia Ilina
      </a>
    </li>
    <li className={s.item}>
      Developer:{" "}
      <a className={s.link} href="https://github.com/Bisquitman/Koff-React" target="_blank" rel="noopener noreferrer">
        Bisquitman
      </a>
    </li>
  </ul>
);
