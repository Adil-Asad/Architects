import styles from "@/styles/projects.module.css";
const Projects = () => {
  return (
    <div>
      <h3 className={styles.projectsHeading}>Projects</h3>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <span className={styles.title}>Summer House</span>
          <img
            className={styles.houseImg}
            src="/assets/images/house1.jpg"
            alt="img"
          />
        </div>
        <div className={styles.imageContainer}>
          <span className={styles.title}>Brick House</span>
          <img
            className={styles.houseImg}
            src="/assets/images/house2.jpg"
            alt="img"
          />
        </div>
        <div className={styles.imageContainer}>
          <span className={styles.title}>Renovated</span>
          <img
            className={styles.houseImg}
            src="/assets/images/house3.jpg"
            alt="img"
          />
        </div>
        <div className={styles.imageContainer}>
          <span className={styles.title}>Barn House</span>
          <img
            className={styles.houseImg}
            src="/assets/images/house4.jpg"
            alt="img"
          />
        </div>
        <div className={styles.imageContainer}>
          <span className={styles.title}>Summer House</span>
          <img
            className={styles.houseImg}
            src="/assets/images/house2.jpg"
            alt="img"
          />
        </div>
        <div className={styles.imageContainer}>
          <span className={styles.title}>Brick House</span>
          <img
            className={styles.houseImg}
            src="/assets/images/house1.jpg"
            alt="img"
          />
        </div>
        <div className={styles.imageContainer}>
          <span className={styles.title}>Renovated</span>
          <img
            className={styles.houseImg}
            src="/assets/images/house4.jpg"
            alt="img"
          />
        </div>
        <div className={styles.imageContainer}>
          <span className={styles.title}>Barn House</span>
          <img
            className={styles.houseImg}
            src="/assets/images/house3.jpg"
            alt="img"
          />
        </div>
      </div>
      <div id="about"></div>
    </div>
  );
};

export default Projects;
