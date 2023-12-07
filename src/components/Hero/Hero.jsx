import { useState } from "react";

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
  const [phoneIsVisible, setPhoneIsVisible] = useState(false);

  const phoneIsDisplayed = () => {
    if (phoneIsVisible) {
      return;
    }
    setPhoneIsVisible(true);
  };

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
              onClick={phoneIsDisplayed}
            />
          </div>
        </div>
        <p
          className={
            phoneIsVisible
              ? `${styles.phone} ${styles.phoneVisible}`
              : styles.phone
          }
        >
          +88 98765 43210
        </p>
      </Container>
    </section>
  );
};
