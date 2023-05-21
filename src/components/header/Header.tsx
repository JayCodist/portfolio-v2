import { FunctionComponent } from "react";
import Link from "next/link";
import { resources } from "../../utils/constants";
import styles from "./Header.module.scss";

const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <a>
          <img
            alt="logo"
            src={resources.icons.LOGO_FULL}
            className={styles.logo}
          />
        </a>
      </Link>
      <nav className={styles.nav}>
        <Link href="#about" passHref>
          <a className={styles.link}>About</a>
        </Link>
        <Link href="#work" passHref>
          <a className={styles.link}>Work</a>
        </Link>
        <Link href="#mySkills" passHref>
          <a className={styles.link}>My Skills</a>
        </Link>
        <Link href="#contact" passHref>
          <a className={styles.link}>Contact</a>
        </Link>
        <a
          href="https://drive.google.com/file/d/1uCRYmuRf_zPpMbOvhTqTA8RCsuA6hwbC/view?usp=sharing"
          className={styles.download}
        >
          My Resume
          <img alt="download" src={resources.icons.DOWNLOAD} />
        </a>
      </nav>
    </header>
  );
};

export default Header;
