import React from "react"
import styles from "../components/projects.module.css"
import Title from "../components/title"
import Layout from "../components/layout"

const Projects = () => {
  return (
    <Layout>
      <div className={styles.projects}>
        <Title title={`Projects`} />
      </div>
    </Layout>
  )
}

export default Projects
