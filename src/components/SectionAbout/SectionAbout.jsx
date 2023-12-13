import Image from "next/image";

import { Container } from "../Container/Container";
import { Title } from "../Title/Title";

import we from "/public/we.webp";
import styles from "./SectionAbout.module.css";

export const SectionAbout = () => {
  return (
    <section className={styles.aboutSection}>
      <Container>
        <Title text="About us" tag="h1" currentTitle="titleAbout" />
        <p className={styles.text}>
          Libero sunt pariatur quidem fugiat eius nobis, nisi officiis quasi
          beatae voluptates ut, veritatis consequatur cum iste. Dolor cupiditate
          adipisci quaerat nemo, at recusandae itaque id ut labore autem aperiam
          amet. Maxime mollitia officiis neque quia laboriosam, ratione alias
          explicabo sint!
        </p>
        <div className={styles.imgWrapp}>
          <Image
            className={styles.img}
            src={we}
            fill
            placeholder="blur"
            priority
            alt="a man doing pull-ups on the horizontal bar"
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 450px, (max-width: 1439px) 718px, 1160px"
          />
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          praesentium. Quae repellendus eos deleniti! Qui in illum error
          consequatur voluptatibus ipsa voluptates sequi, quia veritatis placeat
          ad ratione cupiditate porro culpa inventore laboriosam accusantium
          dolorum aspernatur cumque exercitationem! Beatae natus eligendi
          blanditiis delectus ipsam obcaecati odio. Ipsam debitis nemo
          laboriosam placeat veniam harum dignissimos distinctio? Atque
          laudantium et illo cumque fugiat ducimus blanditiis voluptas molestiae
          sapiente deserunt excepturi error dignissimos, rerum in amet dolores
          sunt explicabo asperiores, voluptate aliquid nobis assumenda corporis.
          Repellat, consequatur! Atque, temporibus dolor exercitationem, fugiat
          error quae repellendus necessitatibus aut sapiente asperiores in animi
          perspiciatis illo, veniam fugit ipsum totam voluptatibus aliquid fuga
          architecto laudantium? Minima beatae dolores dignissimos distinctio
          cupiditate iste ipsam, error itaque ab id architecto ad, nostrum,
          porro hic! Ad sapiente a numquam reiciendis explicabo expedita
          pariatur exercitationem excepturi earum. Necessitatibus nisi vitae
          quibusdam cumque tempore rerum magni! Itaque doloribus eveniet dolore
          reiciendis sint id, voluptate, quod repellendus illum dolorem
          obcaecati eaque.
        </p>
      </Container>
    </section>
  );
};
