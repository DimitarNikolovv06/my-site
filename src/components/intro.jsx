import React from "react"
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa"
import { Link } from "gatsby"
import styles from "./intro.module.css"

const Intro = () => {
  return (
    <div className={styles.intro}>
      <hr />
      <h1>I'm Dimitar</h1>
      <h3>Web developer from Plovdiv</h3>
      <Link className={styles.contact}>Contact me</Link>
      <div>
        <Link className={styles.socialLink}>
          <FaFacebookSquare />
        </Link>
        <Link className={styles.socialLink}>
          <FaGithubSquare />
        </Link>
      </div>
    </div>
  )
}

export default Intro
