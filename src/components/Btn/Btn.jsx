import { useIsHovered } from "../../hooks/useIsHovered";
import styles from "./Btn.module.css";

export const Btn = ({ text, btnStyles, name, onClick }) => {
  const { isHovered, isHoveredOn, isHoveredOff } = useIsHovered();

  return (
    <button
      className={`${styles.btn} ${
        btnStyles === "main" ? styles.btnMain : styles.btnSecond
      } ${isHovered ? styles[`${btnStyles}BtnHover`] : ""}`}
      type="button"
      name={name}
      onClick={(e) => {
        e.currentTarget.blur();
        if (e.nativeEvent.pointerType === "touch") {
          isHoveredOff();
        }
        onClick();
      }}
      onMouseEnter={isHoveredOn}
      onMouseLeave={isHoveredOff}
    >
      {text}
    </button>
  );
};
