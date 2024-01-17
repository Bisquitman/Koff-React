import { Container } from "../../views/Container/Container.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import s from "./Card.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/product/product.slice.js";
import { API_URL } from "../../consts.js";

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
    !loading &&
    +productId === data.id && (
      <section className={s.card}>
        <Container className={s.container}>
          <h2 className={s.title}>{data.name}</h2>
          <div className={s.picture}>
            <div className={s.sliderMain}>
              <Swiper
                modules={[Navigation, Thumbs]}
                spaceBetween={20}
                thumbs={{ swiper: thumbsSwiper }}
                onSwiper={setMainSwiper}>
                {data.images.map((image, i) => (
                  <SwiperSlide key={i}>
                    <img src={`${API_URL}/${image}`} className={s.mainImg} alt={data.name} />
                  </SwiperSlide>
                ))}
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
                onSwiper={setThumbsSwiper}>
                {data.images.map((image, i) => (
                  <SwiperSlide key={i}>
                    <img src={`${API_URL}/${image}`} className={s.thumbImg} alt={data.name} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className={s.info}>
            <p className={s.price}>{data.price.toLocaleString()}&nbsp;&#8381;</p>
            <p className={s.article}>арт. {data.article}</p>

            <div className={s.characteristics}>
              <h3 className={s.characteristicsTitle}>Общие характеристики</h3>
            </div>

            <table className={s.characteristicsTable}>
              <tbody>
                {data.characteristics.map((item, i) => (
                  <tr key={i} className={s.tableRow}>
                    <td className={s.tableField}>{item[0]}</td>
                    <td className={s.tableValue}>{item[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>
    )
  );
};
