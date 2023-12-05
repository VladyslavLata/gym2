import styles from "./LinckBtn.module.css";

export const LinckBtn = ({ href, icon: Icon, name, currentLink }) => {
  return (
    <li className={styles[`${currentLink}LinkWrapp`]}>
      <a
        href={href}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`we are on ${name}`}
        onClick={(e) => e.currentTarget.blur()}
      >
        <div className={styles[`${currentLink}IconWrapp`]}>
          <Icon alt="icon" width="100%" height="100%" fill="currentcolor" />
        </div>
      </a>
    </li>
  );
};
