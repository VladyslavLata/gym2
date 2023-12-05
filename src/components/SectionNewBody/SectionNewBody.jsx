import { useRef } from "react";

import { Container } from "../Container/Container";
import { Img } from "../Img/Img";
import { Title } from "../Title/Title";
import { Btn } from "../Btn/Btn";
import { useObserver } from "../../hooks/useObserver";

import maleLiftingWeights from "../../../public/male-lifting-weights.jpg";
import femaleDoingSitups from "../../../public/female-doing-situps.jpg";
import styles from "./SectionNewBody.module.css";

const Images = [
  {
    url: maleLiftingWeights,
    num: "First",
    alt: "male lifting weights",
    sizes: "(max-width: 1439px) 175px, 350px",
  },
  {
    url: femaleDoingSitups,
    num: "Second",
    alt: "female doing situps",
    sizes: "(max-width: 1439px) 145px, 240px",
  },
];

export const SectionNewBody = () => {
  const elementRef = useRef(null);
  const { isIntersecting } = useObserver(0, elementRef);

  return (
    <section ref={elementRef} className={styles.section}>
      <Container>
        <div className={styles.wrappContent}>
          <div className={styles.wrappImages}>
            {Images.map(({ url, num, alt, sizes }) => (
              <Img
                key={alt}
                url={url}
                num={num}
                alt={alt}
                isVisibile={isIntersecting}
                sizes={sizes}
              />
            ))}
          </div>
          <div className={styles.wrappText}>
            <Title text="Meet your new body" />
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eget lectus urna. Nulla magna tortor, bibendum in molestie sed,
              gravida nec felis. Sed id egestasegestas risus, ut imperdiet
              augue.
            </p>
            <Btn text="View the FAQ" name="view the FAQ" />
          </div>
        </div>
      </Container>
    </section>
  );
};
