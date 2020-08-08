import React, { useState } from "react"
import NavLinks from "../constants/navLinks"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="hamburger">
        <div onClick={() => setOpen(!open)} className="menu">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </div>
      <NavLinks open={open} setOpen={setOpen} />
    </nav>
  )
}
