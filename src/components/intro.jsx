import React from "react"
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa"
import styles from "./intro.module.css"
import scrollTo from "gatsby-plugin-smoothscroll"

const Intro = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <hr />
        <h1>I'm Dimitar</h1>
        <h3 className={styles.work}>Web developer from Plovdiv</h3>
        <button onClick={() => scrollTo("#contact")} className={styles.contact}>
          Contact me
        </button>
        <div className={styles.socialLinks}>
          <a href="https://Facebook.com" className={styles.socialLink}>
            <FaFacebookSquare />
          </a>
          <a href="https://Github.com" className={styles.socialLink}>
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Intro
