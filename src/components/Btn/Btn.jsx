import { useState, useEffect } from "react";

import { useIsHovered } from "../../hooks/useIsHovered";
import styles from "./Btn.module.css";

export const Btn = ({ text, btnStyles, name, onClick }) => {
  const { isHovered, isHoveredOn, isHoveredOff } = useIsHovered();

  // useEffect(() => {}, []);
  // const [s, setS] = useState(false);
  return (
    <button
      className={`${styles.btn} ${
        btnStyles === "main" ? styles.btnMain : styles.btnSecond
      } ${isHovered ? styles[`${btnStyles}BtnHover`] : ""}`}
      type="button"
      name={name}
      onClick={(e) => {
        e.currentTarget.blur();
        if (!onClick) {
          return;
        }
        onClick();
        if (e.nativeEvent.pointerType === "touch") {
          isHoveredOff();
        }
      }}
      onMouseEnter={isHoveredOn}
      onMouseLeave={isHoveredOff}
    >
      {text}
    </button>
  );
};
