import React from "react"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro"
import About from "../components/about"
import Projects from "../components/projects"
import Particles from "react-particles-js"
import Services from "../components/services"
import Contact from "../components/contact"

const IndexPage = props => {
  return (
    <>
      <Particles
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          background: {
            color: "#0a192f",
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                // mode: "repulse",
              },
            },
          },
        }}
      />
      <Layout>
        <SEO title="Home" />
        <Intro />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </>
  )
}

export default IndexPage
