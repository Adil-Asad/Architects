import styles from "@/styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      Powered by{" "}
      <a className={styles.w3} href="#">
        w3.css
      </a>
    </div>
  );
};

export default Footer;
