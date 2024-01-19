import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import { API_URL } from "../../consts.js";
import { useState } from "react";
import s from "./Slider.module.scss";

export const Slider = ({ images, name }) => {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={s.picture}>
      <div className={s.sliderMain}>
        {images?.length ? (
          <>
            <Swiper
              modules={[Navigation, Thumbs]}
              spaceBetween={20}
              thumbs={{ swiper: thumbsSwiper }}
              onSwiper={setMainSwiper}>
              {images.map((image, i) => (
                <SwiperSlide key={i} className={s.slide}>
                  <img src={`${API_URL}/${image}`} className={s.mainImg} alt={name} />
                </SwiperSlide>
              ))}
            </Swiper>

            <button onClick={() => mainSwiper.slidePrev()}>prev</button>
            <button onClick={() => mainSwiper.slideNext()}>next</button>
          </>
        ) : (
          <div>Загрузка...</div>
        )}
      </div>

      <div className={s.sliderThumb}>
        {images?.length ? (
          <Swiper
            modules={[Thumbs]}
            watchSlidesProgress={true}
            spaceBetween={14}
            slidesPerView={4}
            onSwiper={setThumbsSwiper}>
            {images.map((image, i) => (
              <SwiperSlide key={i}>
                <img src={`${API_URL}/${image}`} className={s.thumbImg} alt={name} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div>Загрузка...</div>
        )}
      </div>
    </div>
  );
};
