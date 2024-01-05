import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { RxDownload } from "react-icons/rx";

export const Hero = () => {
 
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shreyas Parkar</h1>
        <p className={styles.description}>
        Aspiring freelance developer and blockchain enthusiast, skilled in DApps,React and NodeJS, 
        actively seeking job opportunities to apply my skills—let's connect for potential collaborations!
        </p>
        <a href={getImageUrl("hero/Shreyas-Resume.pdf")} className={styles.contactBtn}>
        <RxDownload/>  Resume
        </a>
       
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="exploring Job Opportunities"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
