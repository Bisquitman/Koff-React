import s from "./CartProducts.module.scss";

export const CartProducts = () => {
  return (
    <ul className={s.products}>
      <li key={1} className={s.product}>
        <img
          className={s.img}
          src="https://koff-api.vercel.app/img/1hb1m6ltcqiuugd5.jpg"
          alt="Тумба в ванную с раковиной подвесная"
        />
        <h3 className={s.titleProduct}>Тумба в ванную с раковиной подвесная</h3>
        <p className={s.price}>{parseInt("6685").toLocaleString()}&nbsp;₽</p>
        <p className={s.article}>арт. 16954522818</p>

        <div className={s.productControls}>
          <button className={s.productBtn}>-</button>
          <p className={s.productCount}>3</p>
          <button className={s.productBtn}>+</button>
        </div>
      </li>
      <li key={2} className={s.product}>
        <img
          className={s.img}
          src="https://koff-api.vercel.app/img/1hb1m6ltcqiuugd5.jpg"
          alt="Тумба в ванную с раковиной подвесная"
        />
        <h3 className={s.titleProduct}>Тумба в ванную с раковиной подвесная</h3>
        <p className={s.price}>{parseInt("6685").toLocaleString()}&nbsp;₽</p>
        <p className={s.article}>арт. 16954522818</p>

        <div className={s.productControls}>
          <button className={s.productBtn}>-</button>
          <p className={s.productCount}>1</p>
          <button className={s.productBtn}>+</button>
        </div>
      </li>
      <li key={3} className={s.product}>
        <img
          className={s.img}
          src="https://koff-api.vercel.app/img/1hb1m6ltcqiuugd5.jpg"
          alt="Тумба в ванную с раковиной подвесная"
        />
        <h3 className={s.titleProduct}>Тумба в ванную с раковиной подвесная</h3>
        <p className={s.price}>{parseInt("6685").toLocaleString()}&nbsp;₽</p>
        <p className={s.article}>арт. 16954522818</p>

        <div className={s.productControls}>
          <button className={s.productBtn}>-</button>
          <p className={s.productCount}>2</p>
          <button className={s.productBtn}>+</button>
        </div>
      </li>
    </ul>
  );
};
