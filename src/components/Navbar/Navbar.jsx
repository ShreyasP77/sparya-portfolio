import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { HiMenuAlt2, HiX } from "react-icons/hi";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        <img
          className={styles.logo}
          src={getImageUrl("nav/myLogo.png")}
          alt="Portfolio"
          id={styles.imgDviewNav}
        />
        <img
          className={styles.logo}
          src={getImageUrl("nav/myLogoShort.png")}
          alt="Portfolio"
          id={styles.imgMviewNav}
        />
      </a>
      <div className={styles.menu}>
      

        {menuOpen ?(
          <HiX
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        ): (
          <HiMenuAlt2
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        )
      }

        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
