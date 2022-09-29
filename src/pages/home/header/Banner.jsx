import Carousel from 'react-bootstrap/Carousel';


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
   
    <Carousel >
      {items.map((item) => (
      <Carousel.Item key={item._id}>
        <img
          className="d-block w-100"
          src={item.img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>{item.subtitle}</h5>
          <p>{item.headsubtitle}</p>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
      </Carousel>
  );
};

export default Banner;