import React from "react"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Particles from "react-particles-js"

import Services from "../components/services"

const IndexPage = props => {
  return (
    <>
      <Particles
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
        params={{
          particles: {
            number: {
              value: 100,
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
      </Layout>
    </>
  )
}

export default IndexPage
