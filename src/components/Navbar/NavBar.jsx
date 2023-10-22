import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

const NavBar = () => {
  const { container, logo,logout } = styles;
  return (
    <div className={container}>
      <Link href={"/"} className={logo}>
        TechTales
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link className={styles.link} key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        <button className={logout}>Logout</button>
      </div>
    </div>
  );
};

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

export default NavBar;
