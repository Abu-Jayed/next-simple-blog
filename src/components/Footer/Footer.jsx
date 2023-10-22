import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  const { container } = styles;
  return (
    <div className={container}>
      <div>&copy;2024, Abu Jayed. All rights reserved.</div>
      <div className={styles.social}>
        <Image className="opacity-[0.6] cursor-pointer" src={"/facebook.png"} width={15} height={15} alt="Abu Jayed facebook"></Image>
        <Image className="opacity-[0.6] cursor-pointer" src={"/instagram.png"} width={15} height={15} alt="Abu Jayed facebook"></Image>
        <Image className="opacity-[0.6] cursor-pointer" src={"/tiktok.png"} width={15} height={15} alt="Abu Jayed facebook"></Image>
        <Image className="opacity-[0.6] cursor-pointer" src={"/youtube.png"} width={15} height={15} alt="Abu Jayed facebook"></Image>
      </div>
    </div>
  );
};

export default Footer;
