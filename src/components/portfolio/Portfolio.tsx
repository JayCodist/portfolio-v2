import { FunctionComponent } from "react";
import Header from "../header/Header";
import { email } from "../../utils/constants";
import useDarkMode from "use-dark-mode";
import styles from "./Portfolio.module.scss";

const Portfolio: FunctionComponent = () => {
  const { value: isDark } = useDarkMode();
  return (
    <div className="app-layout">
      <Header />
      <main
        className={`${styles.wrapper} ${isDark ? styles.dark : styles.light}`}
      >
        <section className={`${styles.section} ${styles.first}`}>
          <span>Hi, my name is</span>
          <h2>Johnson,</h2>
          <h2>I'm a Web Developer</h2>
          <span>
            Experienced full stack engineer with demonstrably strong technical
            skills and interpersonal acumen
          </span>
          <span>
            Let's work together <a href={`mailto:${email}`}>{email}</a>
          </span>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
