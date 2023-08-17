import { FunctionComponent, useContext } from "react";
import Header, { ResumeDownloader } from "../header/Header";
import { email, resources } from "../../utils/constants";
import styles from "./Portfolio.module.scss";
import Switch from "../switch/Switch";
import Socials from "../socials/Socials";
import LayoutContext from "../../utils/context/LayoutContext";

const Portfolio: FunctionComponent = () => {
  const { isDark, setIsDark } = useContext(LayoutContext);

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
          <h2 className={styles.identity}>
            I'm a <span className="nowrap">Web Developer</span>
          </h2>
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
            <span suppressHydrationWarning>
              {isDark ? "Light Mode" : "Dark Mode"}
            </span>
            <Switch checked={isDark} onChange={setIsDark} />
          </span>
        </section>
        <section
          className={[
            styles.section,
            styles.second,
            isDark ? styles.dark : styles.light
          ].join(" ")}
        >
          <h3 className={styles["section-header"]}>About Me</h3>
          <div className="flex between responsive">
            <div className={styles["johnson-image-wrapper"]}>
              <img
                alt="johnson ubaezuonu"
                src={resources.images.JOHNSON}
                className={styles["johnson-image"]}
              />
              <span className={styles["johnson-image-frame"]} />
            </div>
            <div className={styles.headline}>
              <h2 className={styles.name}>
                <span className="primary-text">Johnson</span>{" "}
                <span className="accent-text">Ubaezuonu</span>
              </h2>
              <p className={[styles["sub-text"], "sub-text"].join(" ")}>
                I am a Senior Frontend Developer at Interswitch Group, a leading
                fintech company in Africa, where I leverage my full-stack
                engineering skills and experience to build frontend interfaces
                and portals for fintech solutions. I have a Bachelor's degree in
                Computer Engineering from the University of Benin, and multiple
                certifications in AWS, Lean Six Sigma, and Data-Driven
                Serverless Applications.
                <br />
                <br />
                With over six years of experience in creating and maintaining
                web and mobile applications using various technologies and
                frameworks, such as React, Node.js, MongoDB, React-Native,
                ExpressJS, Angular, Ionic, and more, I am passionate about
                delivering high-quality, user-friendly, and scalable software
                products that meet the needs and expectations of clients and
                users. I collaborate with UI/UX designers, backend developers,
                and project managers to ensure the best possible outcomes and
                user experiences. I also write unit tests, automate workflows,
                and follow best practices and industry standards for code
                quality and performance.
              </p>
              <Socials className="vertical-margin" />
              <br />
              <ResumeDownloader />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
