import React from "react"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Services from "../components/services"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Services />
  </Layout>
)

export default IndexPage
