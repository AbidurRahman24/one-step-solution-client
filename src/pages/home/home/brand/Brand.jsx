import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import image1 from "./img/brand-1.png";
import image2 from "./img/brand-2.png";
import image3 from "./img/brand-3.png";
import image4 from "./img/brand-4.jpeg";
import image5 from "./img/brand-5.png";
import image6 from "./img/brand-6.png";
import './Brand.css'
const Brand = () => {
  return (
    <div className="brand-container" style={{ backgroundColor: '#151515' }}>
      <div className="brand-header">
        <h2>WHY CHOSE US</h2>
      </div>
      <div className="mx-auto col-md-12 col-sm-8 px-4" >
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // when window width is >= 320px
            100: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            769: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            900: {
              slidesPerView: 5,
              spaceBetween: 70,
            },
          }}
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          // pagination={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="my-10 img">
              <img src={image1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="my-10 img">
              <img src={image2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="my-10 img">
              <img src={image3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="my-10 img">
              <img src={image4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="my-10 img">
              <img src={image5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="my-10 img" style={{ width: '119px', height: '119px' }}>
              <img className="img" src={image6} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;