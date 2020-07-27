import React, { useState } from "react"
import NavLinks from "../constants/navLinks"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="hamburger">
        <div
          onClick={() => setOpen(!open)}
          style={{ padding: "20px" }}
          className="menu"
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <NavLinks open={open} />
    </nav>
  )
}
