import React from "react"
import styles from "../components/projects.module.css"
import Title from "./title"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { FaGithubSquare } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

const Projects = () => {
  const {
    allMarkdownRemark: { info },
    allImageSharp: { images },
  } = useStaticQuery(graphql`
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
      allImageSharp(
        filter: { fluid: { src: { regex: "/project/" } } }
        sort: { fields: fixed___base64 }
      ) {
        images: nodes {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const icons = [<FaGithubSquare />, <FiExternalLink />]

  return (
    <div id="projects" className={styles.projects}>
      <div className={styles.title}>
        <Title title={`Projects`} />
      </div>

      <div className={styles.cards}>
        {info.map((p, i) => (
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image fluid={images[i].fluid} />
            </div>
            <span className={styles.projectNumber}>{`.${i + 1} ${
              p.frontmatter.title
            }`}</span>
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
    </div>
  )
}

export default Projects
