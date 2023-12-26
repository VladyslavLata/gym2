import { useRef } from "react";

import { useIsVisibleContent } from "../../hooks/useIsVisibleContent";
import { Container } from "../Container/Container";
import { Img } from "../Img/Img";
import { Title } from "../Title/Title";
import { Btn } from "../Btn/Btn";
import { HideBox } from "../HideBox/HideBox";
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
  const { visible, togleVisibility } = useIsVisibleContent();
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
            <HideBox isVisible={visible}>
              <ul>
                {[1, 2, 3].map((el) => (
                  <li key={el}>
                    <details>
                      <summary className={styles.summary}>Read more?</summary>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec viverra nec nulla vitae mollis.
                      </p>
                    </details>
                  </li>
                ))}
              </ul>
            </HideBox>
            <Btn
              text={visible ? "Hide the FAQ" : "View the FAQ"}
              name={visible ? "hide the FAQ" : "view the FAQ"}
              btnStyles={"second"}
              onClick={togleVisibility}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
