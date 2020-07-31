import React from "react"
import styles from "../components/projects.module.css"
import Title from "../components/title"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { FaGithubSquare } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

const Projects = props => {
  const {
    allMarkdownRemark: { info },
    allImageSharp: { images },
  } = props.data

  const icons = [<FaGithubSquare />, <FiExternalLink />]

  return (
    <Layout>
      <div className={styles.projects}>
        <Title title={`Projects`} />
        {info.map((p, i) => (
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image fluid={images[i].fluid} />
            </div>
            <span className={styles.projectNumber}>{`.${i + 1}`}</span>
            <div className={styles.cardInfo}>{p.excerpt}</div>
            <div className={styles.skills}>
              {p.frontmatter.technologies.split(",").map((tech, ind) => (
                <span key={ind} className={styles.skill}>
                  {tech}
                </span>
              ))}
            </div>
            <div className={styles.links}>
              {p.frontmatter.links.split(",").map((link, ind) => (
                <a className={styles.link} href={link} key={ind}>
                  {icons[ind]}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const data = graphql`
  query Projects {
    allMarkdownRemark(
      filter: { frontmatter: { technologies: { regex: "/React/" } } }
    ) {
      info: nodes {
        frontmatter {
          title
          technologies
          links
        }
        excerpt
        id
      }
    }
    allImageSharp(filter: { fluid: { src: { regex: "/project/" } } }) {
      images: nodes {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Projects
