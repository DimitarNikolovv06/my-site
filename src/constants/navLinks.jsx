import React from "react"
import { Link } from "gatsby"
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa"
import { socialLink } from "../components/intro.module.css"
import { useEffect } from "react"

const data = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/about" },
  { id: 3, title: "Projects", url: "/projects" },
  { id: 4, title: "Contact", url: "/contact" },
]

export default function NavLinks({ open }) {
  useEffect(() => {
    open ? (document.body.style.overflow = "hidden") : console.log("test")

    return () => {
      document.body.style.overflow = "auto"
    }
  })

  return (
    <ul className={`nav-links ${open ? "open" : ""}`}>
      {data.map(link => (
        <li key={link.id}>
          <Link className="nav-link" to={link.url}>
            {link.title}
          </Link>
        </li>
      ))}
      {open ? (
        <div>
          <a href="https://facebook.com" className={socialLink}>
            <FaFacebookSquare />
          </a>
          <a href="https:github.com" className={socialLink}>
            <FaGithubSquare />
          </a>
        </div>
      ) : null}
    </ul>
  )
}
