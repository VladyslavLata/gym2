import { Container } from "../Container/Container";
import { CarouselGymImg } from "../Carousel/Carousel";
import { Btn } from "../Btn/Btn";

import gymPhoto1 from "../../../public/gym1.webp";
import gymPhoto2 from "../../../public/gym2.webp";
import gymPhoto3 from "../../../public/gym3.webp";

import styles from "./Hero.module.css";

const images = [
  { img: gymPhoto1, alt: "girl with dumbbells" },
  { img: gymPhoto2, alt: "girl with a barbell" },
  { img: gymPhoto3, alt: "girl on a fitness ball" },
];

export const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <CarouselGymImg dataImg={images} />
      <Container currentContainer="heroContainer">
        <div className={styles.contentWrapp}>
          <h1 className={styles.title}>
            Welcome to Good<span className={styles.accent}>lyfe</span> Gyms
          </h1>
          <div className={styles.btnWrapp}>
            <Btn
              text="See the benefits"
              btnStyles="main"
              name="a button showing contact information"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
