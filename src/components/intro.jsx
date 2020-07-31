import React from "react"
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa"
import { Link, graphql, useStaticQuery } from "gatsby"
import styles from "./intro.module.css"

import Image from "gatsby-image"

const Intro = () => {
  const {
    images: { nodes },
  } = useStaticQuery(graphql`
    query AvatarQ {
      images: allImageSharp(
        filter: { sizes: { src: { regex: "/me.jpg*/" } } }
      ) {
        nodes {
          fixed(grayscale: true, width: 360, height: 380) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <hr />
        <h1>I'm Dimitar</h1>
        <h3>Web developer from Plovdiv</h3>
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
      <div className={styles.avatar}>
        <div className="c-image">
          <Image fixed={nodes[0].fixed} className="image" alt="avatar" />
        </div>
      </div>
    </div>
  )
}

export default Intro
