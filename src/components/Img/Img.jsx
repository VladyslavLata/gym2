import Image from "next/image";

import styles from "./Img.module.css";

export const Img = ({ url, alt, num, sizes, isVisibile }) => {
  return (
    <div
      className={`${styles.wrappImg} 
      ${
        isVisibile
          ? `${styles[`wrappImg${num}Hidden`]} ${styles.wrappImgVisible}`
          : `${styles[`wrappImg${num}Hidden`]}`
      }`}
    >
      <Image src={url} fill alt={alt} sizes={sizes} />
    </div>
  );
};
