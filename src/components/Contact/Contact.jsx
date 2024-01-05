import React, { useState, useRef } from "react";

import styles from "./Contact.module.css";
import { BsGithub, BsLinkedin, BsFillSendFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiGeeksforgeeks } from "react-icons/si";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  // console.log(import.meta.env.VITE_PUBLIC_KEY)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const submsg = () => {
    setIsButtonVisible(true);
  };
  return (
    <div className={styles.footer} id="contact">
      <span className={styles.header}>Contact Me</span>

      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.left}>
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className={styles.name}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email/Contact"
            className={styles.email}
          />
        </div>
        <div className={styles.right}>
          <textarea
            className={styles.msg}
            onFocus={submsg}
            placeholder="message"
            name="message"
          />
          {isButtonVisible && (
            <button
              type="submit"
              value="Submit"
              id={styles.submitbtn}
              style={{
                display: "block",
                backgroundColor: "var(--lightblk)",
                padding: "15px",
                animation: "slide 0.5s ease-in-out",
              }}
            >
              <BsFillSendFill />
            </button>
          )}
        </div>
      </form>
      <hr />
      <div className={styles.bottom}>
        <div className={styles.ftrlinks} id={styles.start}>
          <a href="https://github.com/ShreyasP77/">
            <BsGithub />
          </a>
        </div>
        <div className={styles.ftrlinks}>
          <a href="https://www.linkedin.com/in/shreyas-parkar-379854241/">
            <BsLinkedin />
          </a>
        </div>
        <div className={styles.ftrlinks}>
          <a href="mailto:parkarshreyas77@gmail.com">
            <MdEmail />
          </a>
        </div>

        <div className={styles.ftrlinks} id={styles.end}>
          <a href="https://auth.geeksforgeeks.org/user/parkarshreyas77">
            <SiGeeksforgeeks />
          </a>
        </div>
      </div>
      <span className={styles.ftrtxt}>@S'Parya/__introvertEngineer 2023</span>
    </div>
    // </footer>
  );
};
