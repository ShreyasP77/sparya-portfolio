import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { GoLinkExternal } from "react-icons/go";
import { BsGithub } from "react-icons/bs";



export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />

      <div>
        <div className={styles.title}>
          {title}
          <span className={styles.links}>
            <a href={demo} className={styles.link} target="_blank">
              <GoLinkExternal />
            </a>
            <a href={source} className={styles.link} target="__blank">
              <BsGithub />
            </a>
          </span>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const ArticlesCard = () => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl("projects/articles.png")}
        alt="Content Writing"
        className={styles.image}
      />

      <div>
        <div className={styles.title}>Technical Content Writing</div>
      </div>
      <p className={styles.description}>
        Contributed an article for geeksforgeeks.org on
        <a
          href="https://www.geeksforgeeks.org/how-to-test-a-smart-contract-for-ethereum/"
          style={{ color: "red" }}
          className={styles.link}
          target="__blank"
        >
          smart contract testing
        </a>
        ,how its done and it's importance. Also improved few articles on core
        computer science subjects
        <a
          href="https://auth.geeksforgeeks.org/user/parkarshreyas77/articles#"
          className={styles.link}
          style={{ color: "red" }}
          target="__blank"
        >
          core computer science subjects
        </a>{" "}
        such as DBMS and TOC.
      </p>
      <ul className={styles.skills}>
        <li key="1" className={styles.skill}>
          Content Writing
        </li>
        <li key="2" className={styles.skill}>
          Blockchain
        </li>
        <li key="3" className={styles.skill}>
          Unit Testing
        </li>
        <li key="4" className={styles.skill}>
          DBMS
        </li>
        <li key="5" className={styles.skill}>
          Theory of Computation
        </li>
      </ul>
    </div>
  );
};
