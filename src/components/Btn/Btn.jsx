import styles from "./Btn.module.css";

export const Btn = ({ text, btnStyles, name, onClick }) => {
  return (
    <button
      className={`${styles.btn} ${
        btnStyles === "main" ? styles.btnMain : styles.btnSecond
      }`}
      type="button"
      name={name}
      onClick={(e) => {
        e.currentTarget.blur();
        if (!onClick) {
          return;
        }
        onClick();
      }}
    >
      {text}
    </button>
  );
};
