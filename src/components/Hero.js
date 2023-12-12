import styles from "@/styles/hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <img
        className={styles.banner}
        src="/assets/images/architect.jpg"
        alt="architect"
      />
      <h1 className={styles.heroLogo}>
        <span className={styles.logo}>
          <b>BR</b>
        </span>
        <span className={styles.logoText}>Architects</span>
      </h1>
      <div id="projects"></div>
    </div>
  );
};

export default Hero;
