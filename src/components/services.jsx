import React from "react"
import styles from "./services.module.css"
import Title from "./title"
import { FaCode, FaSketch } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"

const Services = () => {
  const {
    services: { nodes },
  } = useStaticQuery(graphql`
    query MyQuery {
      services: allMarkdownRemark(
        filter: { frontmatter: { title: { regex: "/Web/" } } }
      ) {
        nodes {
          frontmatter {
            title
          }
          excerpt
          id
        }
      }
    }
  `)

  return (
    <div className={styles.services}>
      <Title title={`Services`} />
      <div className={styles.info}>
        <FaCode style={{ fontSize: "2rem" }} />
        <h3 className={styles.title}>{nodes[1].frontmatter.title}</h3>
        <hr className={styles.underline} />
        <p className={styles.text}>{nodes[1].excerpt}</p>
      </div>
      <div className={styles.info}>
        <FaSketch style={{ fontSize: "2rem" }} />
        <h3 className={styles.title}>{nodes[0].frontmatter.title}</h3>
        <hr className={styles.underline} />
        <p className={styles.text}>{nodes[0].excerpt}</p>
      </div>
    </div>
  )
}

export default Services
