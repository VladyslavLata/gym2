import Image from "next/image";

import { Container } from "../Container/Container";
import { Title } from "../Title/Title";

import googlePlay from "../../../public/google-play.png";
import appStore from "../../../public/app-store.png";
import phoneImageFirst from "../../../public/phone1.webp";
import phoneImageSecond from "../../../public/phone2.webp";
import styles from "./SectionOurApp.module.css";

const downloodData = [
  {
    src: googlePlay,
    name: "Google Play",
    url: "https://play.google.com/",
  },
  { src: appStore, name: "App Store", url: "https://www.apple.com/" },
];

const appMobileImages = [{ src: phoneImageFirst }, { src: phoneImageSecond }];

export const SectionOurApp = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrappContent}>
          <Title
            text="Don&#8217;t forget our app"
            currentTitle="titleAccentSeccond"
          />
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            eget lectus urna. Nulla magna tortor, bibendum in molestie sed,
            gravida nec felis. Sed id egestasegestas risus, ut imperdiet augue.
          </p>
          <p className={styles.downloodText}>Download now:</p>
          <ul className={styles.dawnLoodList}>
            {downloodData.map(({ name, src, url }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Application GoodLife in ${name}`}
                >
                  <Image
                    src={src}
                    width={135}
                    height={40}
                    alt={`${name} icon`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className={styles.imagesWrapp}>
        <ul className={styles.appMobileList}>
          {appMobileImages.map((img, i) => (
            <li key={i} className={styles.phoneImgWrapp}>
              <Image
                src={img.src}
                alt="image of a gym app on your phone"
                fill
                sizes="(max-width: 1439px) 165px, 230px"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
