import { useIsVisibleContent } from "../../hooks/useIsVisibleContent";
import { useIsRendered } from "../../hooks/useIsRendered";
import { Container } from "../Container/Container";
import { CarouselGymImg } from "../Carousel/Carousel";
import { PhoneBox } from "../PhoneBox/PhoneBox";
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
  const { visible, phoneIsDisplayed } = useIsVisibleContent();
  const { isRendered } = useIsRendered();

  return (
    <section className={styles.heroSection}>
      {isRendered && <CarouselGymImg dataImg={images} />}
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
        <PhoneBox phoneIsVisible={visible} />
      </Container>
    </section>
  );
};
