import s from "./NotFound.module.scss";
import { Link, useRouteError } from "react-router-dom";

export const NotFound = () => {
  const routeError = useRouteError();
  return (
    <>
      <section className={s.notfound}>
        <h1 className={s.h1}>404</h1>

        <div className={s.cloak__wrapper}>
          <div className={s.cloak__container}>
            <div className={s.cloak}></div>
          </div>
        </div>

        <div className={s.info}>
          <h2>Страница не найдена</h2>
          <p>Была здесь, но пропала</p>
          <p className={s.message}>{routeError?.message ?? "Неизвестная ошибка"}</p>
          {/* <p>*/}
          {/*  Через 5 секунд вы будете перенаправлены на{" "}*/}
          {/*  <Link className={s.homeLink} to="/">*/}
          {/*    главную страницу*/}
          {/*  </Link>*/}
          {/* </p>*/}
          <Link className={`${s.link} btn btn_filled`} to="/">
            На главную
          </Link>
        </div>
      </section>
    </>
  );
};
