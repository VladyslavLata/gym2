import Image from "next/image";

import styles from "./SectionStories.module.css";

import james from "../../../public/james.webp";
import robert from "../../../public/robert.webp";
import mary from "../../../public/mary.webp";

const persons = [
  {
    url: james,
    name: "James John",
    lostKg: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget lectus urna. Nulla magna tortor, bibendum in molestie sed, gravida nec felis. Sed id egestasegestas risu.",
  },
  {
    url: mary,
    name: "Mary Patricia",
    lostKg: 17,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget lectus urna. Nulla magna tortor, bibendum in mo.",
  },
  {
    url: robert,
    name: "Robert Micheal",
    lostKg: 43,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const SectionStories = () => {
  return (
    <section className={styles.section}>
      <div className={styles.storiesContainer}>
        <div className={styles.titleWrapp}>
          <h2 className={styles.title}>
            Real Stories from <br /> Real Customers
          </h2>
          <p className={styles.text}>Be inspired with these experiences.</p>
        </div>
        <ul className={styles.list}>
          {persons.map(({ url, name, lostKg, text }) => {
            return (
              <li key={name} className={styles.item}>
                <div className={styles.storyWrapp}>
                  <p className={styles.lost}>{`${lostKg}Kg lost!`}</p>
                  <div className={styles.storyTextWrapp}>
                    <p className={styles.symbol}>&#10077;</p>
                    <p className={styles.story}>{text}</p>
                  </div>
                </div>
                <div className={styles.personInfo}>
                  <div className={styles.imgWrapp}>
                    <Image
                      src={url}
                      alt={`Portrait of ${name}`}
                      fill
                      sizes="(max-width: 767px) 40px, 60px"
                      quality={100}
                    />
                  </div>
                  <h3 className={styles.personName}>{name}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
