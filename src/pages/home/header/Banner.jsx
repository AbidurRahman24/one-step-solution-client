import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

const Banner = () => {
    const items = [
        {
          _id: 1,
          subtitle: "Discount Up To 40% Off",
          headtitle: "WHEELS & TIRES ",
          headsubtitle: "COLLECTIONS",
          btntext: "Shop Now",
          img: "https://i.ibb.co/qdpvqqy/slider-1.webp",
        },
        {
          _id: 2,
          subtitle: "NEW TECHNOLOGY & BUILD",
          headtitle: "WHEELS & TIRES",
          headsubtitle: "COLLECTIONS",
          btntext: "Shop Now",
          img: "https://i.ibb.co/6B35QM1/slider-2.webp",
        },
        {
          _id: 3,
          subtitle: "Discount Up To 40% Off",
          headtitle: "WHEELS & TIRES ",
          headsubtitle: "COLLECTIONS",
          btntext: "Shop Now",
          img: "https://i.ibb.co/qdpvqqy/slider-1.webp",
        },
        {
          _id: 4,
          subtitle: "NEW TECHNOLOGY & BUILD",
          headtitle: "WHEELS & TIRES",
          headsubtitle: "COLLECTIONS",
          btntext: "Shop Now",
          img: "https://i.ibb.co/6B35QM1/slider-2.webp",
        },
        {
          _id: 5,
          subtitle: "Discount Up To 40% Off",
          headtitle: "WHEELS & TIRES ",
          headsubtitle: "COLLECTIONS",
          btntext: "Shop Now",
          img: "https://i.ibb.co/qdpvqqy/slider-1.webp",
        },
      ];
    return (
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
    >
      {items.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="relative ">
              <div>
                <img src={item.img} alt="" />
              </div>
              <div className="absolute">
                <h2 >
                  {item.subtitle}
                </h2>
                <h1 >
                  {item.headtitle}
                  <br />
                  {item.headsubtitle}
                </h1>
                <Link to={"/shop"}>
                  <Button>{item.btntext}</Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      <div className="prev hidden sm:block text-center text-neutral leading-relaxed sm:leading-10 text-xl sm:text-2xl absolute top-1/2 left-4 -translate-y-1/2 z-10 rounded-full w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-2 border-neutral cursor-pointer hover:ring hover:ring-offset-2 duration-500 ring-neutral">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="next  hidden sm:block text-center text-neutral leading-relaxed sm:leading-10 text-xl sm:text-2xl absolute top-1/2 right-4 -translate-y-1/2 z-10 rounded-full w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-2 border-neutral cursor-pointer hover:ring hover:ring-offset-2 duration-500 ring-neutral">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
    </Swiper>
    );
};

export default Banner;