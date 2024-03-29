import {
  FunctionComponent,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import Link from "next/link";
import { resources } from "../../utils/constants";
import styles from "./Header.module.scss";
import LayoutContext from "../../utils/context/LayoutContext";

const Header: FunctionComponent = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  const isAtTopRef = useRef(isAtTop);
  isAtTopRef.current = isAtTop;

  const { isDark } = useContext(LayoutContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isAtTop = isAtTopRef.current;
      if (window.scrollY === 0 && !isAtTop) {
        setIsAtTop(true);
      } else if (isAtTop && window.scrollY !== 0) {
        setIsAtTop(false);
      }
    });
  }, []);

  return (
    <header
      className={[
        styles.header,
        isDark ? styles.dark : styles.light,
        isAtTop && styles.top
      ].join(" ")}
    >
      <Link href="/" passHref>
        <img
          alt="logo"
          src={resources.icons.LOGO_FULL}
          className={styles.logo}
        />
      </Link>
      <nav className={styles.nav}>
        {/* <Link href="#about" passHref className={styles.link}>
          About
        </Link>
        <Link href="#work" passHref className={styles.link}>
          Work
        </Link>
        <Link href="#mySkills" passHref className={styles.link}>
          My Skills
        </Link>
        <Link href="#contact" passHref className={styles.link}>
          Contact
        </Link> */}
        <ResumeDownloader />
      </nav>
    </header>
  );
};

export const ResumeDownloader: FunctionComponent = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1HuyX051AGOw3MZG103_jY86dX__arDw6/view?usp=sharing"
      className={styles.download}
      target="_blank"
      rel="noreferrer"
    >
      My Resume
      <img alt="download" src={resources.icons.DOWNLOAD} />
    </a>
  );
};

export default Header;
