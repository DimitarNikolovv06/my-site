import React from "react"
import styles from "../components/about.module.css"
import Title from "./title"

const About = () => {
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
    <div id="about" className={styles.about}>
      <div className={styles.title}>
        <Title title={`About`} />
      </div>
      <p className={styles.text}>
        Hello I am Dimitar, a web developer from Plovdiv.
        <br />
        <br />I am passionate about all things web related.I am currently
        studying Informatics part-time at Plovdiv University “Paisii
        Hilendarski”. I have recently finished my 2nd year of study there and am
        currently looking for an internship to improve my skill set and start
        off my professional career. My skills are mostly for the front end
        however i can also do back end.
      </p>
      <p className={styles.skills}>
        {stack.map((skill, i) => (
          <span key={i} className={styles.skill}>
            {skill}
          </span>
        ))}
      </p>
    </div>
  )
}

export default About
