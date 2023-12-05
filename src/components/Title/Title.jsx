import styles from "./Title.module.css";

export const Title = ({ text, tag: Tag = "h2", currentTitle = "" }) => {
  return (
    <Tag
      className={`${styles.title} ${currentTitle ? styles[currentTitle] : ""}`}
    >
      {text}
    </Tag>
  );
};
