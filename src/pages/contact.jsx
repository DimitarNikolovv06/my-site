import React from "react"
import Layout from "../components/layout"
import styles from "../components/contact.module.css"

const Contact = () => {
  return (
    <Layout>
      <div className={styles.contactWrapper}>
        <form
          onSubmit={e => e.preventDefault()}
          name="contact"
          method="POST"
          data-netlify="true"
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
            placeholder="Your Email"
            className={styles.input}
            name="email"
            type="email"
          />

          <textarea
            placeholder="Your Message"
            className={styles.input}
            name="text"
            rows="5"
          />

          <button className={styles.btn}>Submit</button>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
