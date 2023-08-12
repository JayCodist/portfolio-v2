import { FunctionComponent } from "react";
import styles from "./Socials.module.scss";
import { resources } from "../../utils/constants";

const Socials: FunctionComponent<{ className?: string }> = ({ className }) => {
  return (
    <div className={[styles.socials, className].join(" ")}>
      <a
        href="https://www.linkedin.com/in/johnson-ubaezuonu-a46149172"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.social}
        title="LinkedIn"
      >
        <img
          alt="linkedin"
          src={resources.icons.LINKEDIN}
          className={styles.icon}
        />
      </a>
      <a
        href="https://stackoverflow.com/users/12011575/jaycodist"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.social}
        title="Stack Overflow"
      >
        <img
          alt="stack overflow"
          src={resources.icons.STACK_OVERFLOW}
          className={styles.icon}
        />
      </a>
      <a
        href="https://github.com/JayCodist"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.social}
        title="GitHub"
      >
        <img
          alt="github"
          src={resources.icons.GITHUB}
          className={styles.icon}
        />
      </a>
      <a
        href="https://twitter.com/JayCodist"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.social}
        title="Twitter"
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
