import { FunctionComponent } from "react";
import Header from "../header/Header";
import { email } from "../../utils/constants";
import useDarkMode from "use-dark-mode";
import styles from "./Portfolio.module.scss";
import Switch from "../switch/Switch";

const Portfolio: FunctionComponent = () => {
  const { value: isDark, toggle } = useDarkMode();
  return (
    <div className="app-layout">
      <Header />
      <main className={styles.wrapper}>
        <section
          className={[
            styles.section,
            styles.first,
            isDark ? styles.dark : styles.light
          ].join(" ")}
        >
          <span className={styles.hello}>Hi, my name is</span>
          <h2 className={styles.johnson}>Johnson,</h2>
          <h2 className={styles.identity}>I'm a Web Developer</h2>
          <span className={styles.desc}>
            Experienced full stack engineer with demonstrably strong technical
            skills and interpersonal acumen
          </span>
          <span className={styles.invite}>
            <span>Let's work together</span>{" "}
            <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
              {email}
            </a>
          </span>
          <span className={styles.switch}>
            <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
            <Switch checked={isDark} onChange={toggle} />
          </span>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
