import React from "react"
import styles from "./title.module.css"

const Title = ({ title }) => {
  return <h2 className={styles.title}>{title ? title : `No Title`}</h2>
}

export default Title
