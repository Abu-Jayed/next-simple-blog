import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Abu Jayed. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Abu Jayed Facebook Account" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Abu Jayed" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Abu Jayed" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Abu Jayed" />
      </div>
    </div>
  );
};

export default Footer;
