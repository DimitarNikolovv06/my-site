import React from "react"

import Header from "./header"
import "./layout.css"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main> {children}</main>
      <Footer />
    </>
  )
}

export default Layout
