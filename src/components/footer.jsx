import React from "react"
import { Link } from "gatsby"
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa"
import { useState } from "react"

export default function Footer() {
  return (
    <div className="footer">
      <Link className="footer-link" to="https://Facebook.com">
        <FaFacebookSquare />
      </Link>
      <Link className="footer-link" to="https://Github.com">
        <FaGithubSquare />
      </Link>
    </div>
  )
}
