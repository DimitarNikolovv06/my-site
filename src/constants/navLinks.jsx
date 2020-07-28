import React from "react"
import { Link } from "gatsby"
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa"
import { socialLink } from "../components/intro.module.css"

const data = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/about" },
  { id: 3, title: "Projects", url: "/projects" },
  { id: 4, title: "Contact", url: "/contact" },
  { id: 5, title: "Resume", url: "/" },
]

export default function NavLinks({ open }) {
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
          <Link to="https://facebook.com" className={socialLink}>
            <FaFacebookSquare />
          </Link>
          <Link to="https:github.com" className={socialLink}>
            <FaGithubSquare />
          </Link>
        </div>
      ) : null}
    </ul>
  )
}
