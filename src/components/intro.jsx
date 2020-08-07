import React from "react"
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa"
import { Link } from "gatsby"
import styles from "./intro.module.css"

const Intro = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <hr />
        <h1>I'm Dimitar</h1>
        <h3 className={styles.work}>Web developer from Plovdiv</h3>
        <Link to="/contact" className={styles.contact}>
          Contact me
        </Link>
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
