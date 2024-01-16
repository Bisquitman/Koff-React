import { Container } from "../../views/Container/Container.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import s from "./Card.module.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const Card = () => {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { productId } = useParams();
  console.log(productId);

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
                <img src="../img/goods-img.jpg" className={s.mainImg} alt="Кресло с подлокотниками"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src="../img/goods-img.jpg" className={s.mainImg} alt="Кресло с подлокотниками"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src="../img/goods-img.jpg" className={s.mainImg} alt="Кресло с подлокотниками"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src="../img/goods-img.jpg" className={s.mainImg} alt="Кресло с подлокотниками"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src="../img/goods-img.jpg" className={s.mainImg} alt="Кресло с подлокотниками"/>
              </SwiperSlide>
            </Swiper>

            <button onClick={() => mainSwiper.slidePrev()}>prev</button>
            <button onClick={() => mainSwiper.slideNext()}>next</button>
          </div>

          <div className={s.sliderThumb}>
            <Swiper
              modules={[Thumbs]}
              watchSlidesProgress
              spaceBetween={14}
              slidesPerView={4}
              onSwiper={setThumbsSwiper}
            >
              <SwiperSlide>
                <img src="../img/goods-img.jpg" className={s.thumbImg} alt="Кресло с подлокотниками"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src="../img/goods-img.jpg" className={s.thumbImg} alt="Кресло с подлокотниками"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src="../img/goods-img.jpg" className={s.thumbImg} alt="Кресло с подлокотниками"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src="../img/goods-img.jpg" className={s.thumbImg} alt="Кресло с подлокотниками"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src="../img/goods-img.jpg" className={s.thumbImg} alt="Кресло с подлокотниками"/>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className={s.info}>
          <p className={s.price}>{"5000".toLocaleString()}&nbsp;&#8381;</p>
          <p className={s.article}>арт. 84348945757</p>

          <div className={s.characteristics}>
            <h3>Общие характеристики</h3>
          </div>
        </div>
      </Container>
    </section>
  )
};
