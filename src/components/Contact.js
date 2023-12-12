import styles from "@/styles/contact.module.css";
const Contact = () => {
  return (
    <div>
      <h3 className={styles.aboutHeading}>Contact</h3>
      <p className={styles.aboutText}>
        Lets get in touch and talk about your next project.
      </p>
      <input className={styles.contactInput} type="text" placeholder="Name" />
      <input className={styles.contactInput} type="email" placeholder="Email" />
      <input
        className={styles.contactInput}
        type="text"
        placeholder="Subject"
      />
      <input
        className={styles.contactInput}
        type="text"
        placeholder="Comment"
      />

      <button className={styles.contactBtn}>SEND MESSAGE</button>
    </div>
  );
};

export default Contact;
