import React from "react"
import Layout from "../components/layout"
import styles from "../components/about.module.css"
import Title from "../components/title"
import { graphql } from "gatsby"
import Image from "gatsby-image"

const About = ({ data }) => {
  const stack = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "Node.js",
    "Gatsby",
    "Express",
    "mongoDB",
  ]

  return (
    <Layout>
      <div className={styles.about}>
        <div className="c-image center">
          <div className="image ">
            <Image fixed={data.images.nodes[0].fixed} alt="avatar" />
          </div>
        </div>
        <div>
          <Title className={styles.title} title={`About me`} />

          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            perferendis dolor in. Hic accusantium illo quas consequatur, laborum
            odio, omnis, praesentium ipsam harum necessitatibus eius mollitia
            animi neque? Facere ipsum quisquam hic quod necessitatibus
            voluptatibus iusto nesciunt tempora unde non architecto autem
            corporis cupiditate rerum, nam sed dolorem porro tempore.
          </p>
          <p className={styles.skills}>
            {stack.map((skill, i) => (
              <span key={i} className={styles.skill}>
                {skill}
              </span>
            ))}
          </p>
        </div>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query AvatarAbout {
    images: allImageSharp(filter: { sizes: { src: { regex: "/me.jpg*/" } } }) {
      nodes {
        fixed(grayscale: true, width: 360, height: 380) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default About
