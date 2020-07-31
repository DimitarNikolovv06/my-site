import React, { useEffect } from "react"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Services from "../components/services"

const IndexPage = props => {
  useEffect(() => {
    if (window.innerWidth >= 768) {
      document.getElementsByTagName("body")[0].style.background =
        "linear-gradient(to right, var(--bg-color) 70%, white 30%)"
    } else {
      document.getElementsByTagName("body")[0].style.background =
        "var(--bg-color)"
    }

    return () =>
      (document.getElementsByTagName("body")[0].style.background =
        "var(--clr-well)")
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Intro />
      <Services />
    </Layout>
  )
}

export default IndexPage
