import styles from "@/styles/about.module.css";
const About = () => {
  return (
    <div>
      <h3 className={styles.aboutHeading}>About</h3>
      <p className={styles.aboutText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            className={styles.houseImg}
            src="/assets/images/team1.jpg"
            alt="img"
          />
          <div>
            <h1 className={styles.cardTitle}>John Doe</h1>
            <h3 className={styles.cardSubTitle}>CEO & Founder</h3>
            <p className={styles.cardDescription}>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <button className={styles.cardBtn}>Contact</button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.houseImg}
            src="/assets/images/team2.jpg"
            alt="img"
          />
          <div>
            <h1 className={styles.cardTitle}>Jane Doe</h1>
            <h3 className={styles.cardSubTitle}>Architect</h3>
            <p className={styles.cardDescription}>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <button className={styles.cardBtn}>Contact</button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.houseImg}
            src="/assets/images/team3.jpg"
            alt="img"
          />
          <div>
            <h1 className={styles.cardTitle}>Mike Ross</h1>
            <h3 className={styles.cardSubTitle}>Architect</h3>
            <p className={styles.cardDescription}>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <button className={styles.cardBtn}>Contact</button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.houseImg}
            src="/assets/images/team4.jpg"
            alt="img"
          />
          <div>
            <h1 className={styles.cardTitle}>John Doe</h1>
            <h3 className={styles.cardSubTitle}>Architect</h3>
            <p className={styles.cardDescription}>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <button className={styles.cardBtn}>Contact</button>
          </div>
        </div>
      </div>
      <div id="contact"></div>
    </div>
  );
};

export default About;
