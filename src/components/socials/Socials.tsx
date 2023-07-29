import { FunctionComponent } from "react";
import styles from "./Socials.module.scss";
import { resources } from "../../utils/constants";

const Socials: FunctionComponent<{ className?: string }> = ({ className }) => {
  return (
    <div className={[styles.socials, className].join(" ")}>
      <a
        href=""
        target="_blank"
        rel="noreferer noopener"
        className={styles.social}
      >
        <img
          alt="linkedin"
          src={resources.icons.LINKEDIN}
          className={styles.icon}
        />
      </a>
      <a
        href=""
        target="_blank"
        rel="noreferer noopener"
        className={styles.social}
      >
        <img
          alt="stack overflow"
          src={resources.icons.STACK_OVERFLOW}
          className={styles.icon}
        />
      </a>
      <a
        href=""
        target="_blank"
        rel="noreferer noopener"
        className={styles.social}
      >
        <img
          alt="github"
          src={resources.icons.GITHUB}
          className={styles.icon}
        />
      </a>
      <a
        href=""
        target="_blank"
        rel="noreferer noopener"
        className={styles.social}
      >
        <img
          alt="twitter"
          src={resources.icons.TWITTER}
          className={styles.icon}
        />
      </a>
    </div>
  );
};

export default Socials;
