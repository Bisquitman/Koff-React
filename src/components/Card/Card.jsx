import { Container } from "../../views/Container/Container.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import s from "./Card.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/product/product.slice.js";

export const Card = () => {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { productId } = useParams();
  console.log(productId);
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.product);
  console.log("data", data);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

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
    <section className={s.card}>
      <Container className={s.container}>
        <h2 className={s.title}>Кресло с подлокотниками</h2>
        <div className={s.picture}>
          <div className={s.sliderMain}>
            <Swiper
              modules={[Navigation, Thumbs]}
              spaceBetween={20}
              thumbs={{ swiper: thumbsSwiper }}
              onSwiper={setMainSwiper}
            >
              <SwiperSlide>
                <img src="../img/goods-img.jpg" className={s.mainImg} alt="Кресло с подлокотниками" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="../img/goods-img.jpg" className={s.mainImg} alt="Кресло с подлокотниками" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="../img/goods-img.jpg" className={s.mainImg} alt="Кресло с подлокотниками" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="../img/goods-img.jpg" className={s.mainImg} alt="Кресло с подлокотниками" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="../img/goods-img.jpg" className={s.mainImg} alt="Кресло с подлокотниками" />
              </SwiperSlide>
            </Swiper>

            <button onClick={() => mainSwiper.slidePrev()}>prev</button>
            <button onClick={() => mainSwiper.slideNext()}>next</button>
          </div>

          <div className={s.sliderThumb}>
            <Swiper
              modules={[Thumbs]}
              watchSlidesProgress={true}
              spaceBetween={14}
              slidesPerView={4}
              onSwiper={setThumbsSwiper}
            >
              <SwiperSlide>
                <img src="../img/goods-img.jpg" className={s.thumbImg} alt="Кресло с подлокотниками" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="../img/goods-img.jpg" className={s.thumbImg} alt="Кресло с подлокотниками" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="../img/goods-img.jpg" className={s.thumbImg} alt="Кресло с подлокотниками" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="../img/goods-img.jpg" className={s.thumbImg} alt="Кресло с подлокотниками" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="../img/goods-img.jpg" className={s.thumbImg} alt="Кресло с подлокотниками" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className={s.info}>
          <p className={s.price}>{"5000".toLocaleString()}&nbsp;&#8381;</p>
          <p className={s.article}>арт. {data.article}</p>

          <div className={s.characteristics}>
            <h3 className={s.characteristicsTitle}>Общие характеристики</h3>
          </div>

          <table className={s.characteristicsTable}>
            <tbody>
              <tr className={s.tableRow}>
                <td className={s.tableField}>Тип</td>
                <td className={s.tableValue}>Прямой диван</td>
              </tr>
              <tr className={s.tableRow}>
                <td className={s.tableField}>Ширина, см</td>
                <td className={s.tableValue}>170</td>
              </tr>
              <tr className={s.tableRow}>
                <td className={s.tableField}>Глубина, см</td>
                <td className={s.tableValue}>65</td>
              </tr>
              <tr className={s.tableRow}>
                <td className={s.tableField}>Высота, см</td>
                <td className={s.tableValue}>80</td>
              </tr>
              <tr className={s.tableRow}>
                <td className={s.tableField}>Бренд</td>
                <td className={s.tableValue}>MAI HE MAI</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
};
