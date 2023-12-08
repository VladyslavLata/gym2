import styles from "./PhoneBox.module.css";

export const PhoneBox = ({ phoneIsVisible }) => {
  return (
    <p
      className={
        phoneIsVisible ? `${styles.phone} ${styles.phoneVisible}` : styles.phone
      }
    >
      +88 98765 43210
    </p>
  );
};
