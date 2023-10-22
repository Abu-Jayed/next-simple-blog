import React from "react";
import styles from "./page.module.css";

const Footer = () => {
  const { container } = styles;
  return (
    <div className={container}>
      <div>&copy;2024, Abu Jayed. All rights reserved.</div>
      <div></div>
    </div>
  );
};

export default Footer;
