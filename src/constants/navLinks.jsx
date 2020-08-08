import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const data = [
  { id: 1, title: "Home", url: "body" },
  { id: 2, title: "About", url: "#about" },
  { id: 3, title: "Projects", url: "#projects" },
  { id: 4, title: "Contact", url: "#contact" },
]

export default function NavLinks({ open, setOpen }) {
  return (
    <ul className={`nav-links ${open ? "open" : ""}`}>
      {data.map(link => (
        <li key={link.id}>
          <button
            className="nav-link"
            onClick={() => {
              setOpen(!open)
              setTimeout(() => {
                scrollTo(link.url)
              }, 300)
            }}
          >
            {link.title}
          </button>
        </li>
      ))}
    </ul>
  )
}
