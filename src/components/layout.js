import React from "react"
import "./layout.css"
import Navbar from "./navbar"
import Particles from "react-particles-js"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
