import React from "react";
import styles from "@/styles/nav-bar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.navLogo}>
          <span className={styles.logo}>BR</span>
          <span className={styles.logoText}>Architects</span>
        </Link>
        <div className={styles.navLinks}>
          <Link href="/#projects" className={styles.navBtnProject}>
            Projects
          </Link>

          <Link href="/#about" className={styles.navBtnProject}>
            About
          </Link>
          <Link href="#contact" className={styles.navBtnProject}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
