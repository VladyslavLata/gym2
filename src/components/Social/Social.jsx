import { Title } from "../Title/Title";
import { Container } from "../Container/Container";
import { LinckBtn } from "../LinckBtn/LinckBtn";

import instIcon from "/public/inst.svg";
import fIcon from "/public/f.svg";
import ytIcon from "/public/yt.svg";
import styles from "./Social.module.css";

const socialIcons = [
  { name: "facebook", icon: fIcon, link: "https://www.facebook.com/" },
  { name: "youtube", icon: ytIcon, link: "https://www.youtube.com/" },
  { name: "instagram", icon: instIcon, link: "https://www.instagram.com/" },
];

export const Social = () => {
  return (
    <section className={styles.section}>
      <Container>
        <Title text={"Social"} />
        <ul className={styles.linkList}>
          {socialIcons.map(({ name, link, icon }) => (
            <LinckBtn
              href={link}
              key={name}
              icon={icon}
              currentLink={"main"}
              name={name}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
};
