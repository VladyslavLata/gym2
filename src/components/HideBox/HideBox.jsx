import styles from "./HideBox.module.css";

export const HideBox = ({ isVisible, children }) => {
  return (
    <div
      className={
        isVisible ? `${styles.hideBox} ${styles.visibleBox}` : styles.hideBox
      }
    >
      <div
        className={
          isVisible
            ? `${styles.wrapContent} ${styles.openWrapContent}`
            : styles.wrapContent
        }
      >
        {children}
      </div>
    </div>
  );
};
