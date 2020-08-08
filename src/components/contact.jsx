import React from "react"
import styles from "../components/contact.module.css"

const Contact = () => {
  return (
    <div id="contact" className={styles.contactWrapper}>
      <form
        name="contact"
        method="POST"
        action="https://formspree.io/mdowbqeb"
        className={styles.form}
      >
        <h3 style={{ color: "var(--primary-clr1)", margin: "20px auto" }}>
          Get In Touch
        </h3>
        <input
          placeholder="Your Name"
          className={styles.input}
          name="name"
          type="text"
        />

        <input
          required
          placeholder="Your Email"
          className={styles.input}
          name="email"
          type="email"
        />

        <textarea
          required
          placeholder="Your Message"
          className={styles.input}
          name="text"
          rows="5"
        />

        <button className={styles.btn}>Submit</button>
      </form>
    </div>
  )
}

export default Contact
