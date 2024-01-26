import React from "react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <button className={styles.navbar__toggle}></button>
    </header>
  );
}
