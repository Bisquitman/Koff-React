export const Order = () => (
  <>
    <div className="order__body">
      <div className="order__header">
        <h2 className="order__title">Заказ успешно размещён</h2>
        <div className="order__total-price">20&nbsp;000&nbsp;&#8381;</div>
      </div>
      <div className="order__number">№43435</div>
      <h3 className="order__subtitle">Данные доставки</h3>
      <table className="order__table table">
        <tr className="table__row">
          <td className="table__field">Получатель</td>
          <td className="table__value">Иванов Петр Александрович</td>
        </tr>
        <tr className="table__row">
          <td className="table__field">Телефон</td>
          <td className="table__value">+7 (737) 346 23 00</td>
        </tr>
        <tr className="table__row">
          <td className="table__field">E-mail</td>
          <td className="table__value">Ivanov84@gmail.com</td>
        </tr>
        <tr className="table__row">
          <td className="table__field">Адрес доставки</td>
          <td className="table__value">Москва, ул. Ленина, 21, кв. 33</td>
        </tr>
        <tr className="table__row">
          <td className="table__field">Способ оплаты</td>
          <td className="table__value">Картой при получении</td>
        </tr>
        <tr className="table__row">
          <td className="table__field">Способ получения</td>
          <td className="table__value">Доставка</td>
        </tr>
      </table>
      <a className="order__btn btn btn_filled" href="/">На главную</a>
    </div>
  </>
);