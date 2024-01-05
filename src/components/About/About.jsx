import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { IoIosSchool } from "react-icons/io";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage3.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
          id={styles.imgDview}
        />
        <img
          src={getImageUrl("about/aboutImage3.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
          id={styles.imgMview}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                Greetings, I'm Shreyas Parkar, an aspiring full-stack developer
                and blockchain enthusiast with a keen interest in creating
                robust and innovative digital solutions. I hold a Bachelor's
                degree in Computer Engineering from Atharva College Of
                Engineering, Mumbai, where I achieved a commendable CGPA of
                9/10. I am enthusiastic about exploring the dynamic realms of
                full-stack development and blockchain technology.
              </p>
              <p style={{ marginTop: "10px" }}>
                In my approach to software development, I firmly believe that
                the essence lies in effective problem-solving and delivering
                intuitive, enjoyable user experiences. From blockchain-based
                voting systems to Progressive Web Applications, my projects
                reflect a dedication to functional excellence and a
                user-centered mindset. Fueled by a relentless pursuit of
                absolute perfection, I eagerly look forward to bringing this
                commitment to your next project, ensuring a thoughtful blend of
                functionality, innovation, and user-centric principles.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>

              <h3>
                <IoIosSchool style={{ fill: "teal" }} /> EDUCATION
              </h3>

              <ul className={styles.aboutItems}>
                <li className={styles.aboutItem} style={{ paddingLeft: 0 }}>
                  <div
                    className={styles.aboutItemText}
                    style={{ fontFamily: "var(--font-redressed)" }}
                  >
                    {" "}
                    <h3 style={{ fontWeight: 500 }}>
                      Atharva College of Engineering, Mumbai University,2023
                    </h3>
                    <h4>
                      BE,Computer Engineering
                    </h4>
                    <span className={styles.grade}> Grade: 8.98/10 </span>
                    <hr style={{margin:"5px 0"}} />
                    <p >
                      {" "}
                      Participated in hackathon and exhibitions. Maitained high
                      GPA through out the coursework, also completed various
                      courses and solved several problems on different
                      platforms.
                    </p>
                  </div>
                </li>
                <li className={styles.aboutItem} style={{ paddingLeft: 0, paddingTop:0 }}>
                  <div
                    className={styles.aboutItemText}
                    style={{ fontFamily: "var(--font-redressed)" }}
                  >
                    {" "}
                    <h3 style={{ fontWeight: 500 }}>
                      K.C. College, Mumbai University,2019
                    </h3>
                    <h4>
                      HSc(12<sup>th</sup>),Science
                    </h4>
                    <span className={styles.grade}> Grade: 82% </span>
                    <hr style={{margin:"5px 0"}} />
                    <p >
                      {" "}
                      Participated in Science exhibition organised by college and 
                      intercollegiate science exhibition where we secured 2nd place.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
