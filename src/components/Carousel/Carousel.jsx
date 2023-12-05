import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import styles from "./Carousel.module.css";

export const CarouselGymImg = ({ dataImg }) => {
  const settings = {
    dots: true,
    dotsClass: `${styles.dotsListWrapp}`,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul className={styles.dotsList}>{dots}</ul>
      </div>
    ),
    customPaging: () => <div className={styles.dot}></div>,
  };
  return (
    <div className={styles.sliderWrapp}>
      <Slider {...settings}>
        {dataImg.map(({ img, alt }, i) => (
          <div key={alt} className={styles.imgWrapp}>
            <Image
              src={img}
              fill
              alt={alt}
              priority={i === 0}
              sizes="(max-width: 1799px) 100vw, 1800px"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
