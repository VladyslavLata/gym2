import Image from "next/image";

import styles from "./Img.module.css";

export const Img = ({ url, alt, num, sizes, isVisibile }) => {
  // const createClass = (numImg, isVisibileImg) => {
  //   switch (numImg) {
  //     case 1:
  //       return isVisibileImg
  //         ? `${styles.wrappImgFirstHidden} ${styles.wrappImgVisible}`
  //         : styles.wrappImgFirstHidden;
  //     case 2:
  //       return isVisibileImg
  //         ? `${styles.wrappImgSecondHidden} ${styles.wrappImgVisible}`
  //         : styles.wrappImgSecondHidden;
  //     default:
  //       styles.wrappImg;
  //   }
  // };

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
