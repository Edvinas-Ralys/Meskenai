import React from "react"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My Library
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-row">
          <li className="nav-item m-2">
            <a className="nav-link active" aria-current="page" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item m-2">
            <a className="nav-link" href="#authors">
              Authors
            </a>
          </li>
          <li className="nav-item m-2">
            <a className="nav-link" href="#books">
              Books
            </a>
          </li>
          <li className="nav-item m-2">
            <a className="nav-link" href="#heroes">
              Heroes
            </a>
          </li>
        </ul>
        <span className="navbar-text">Login / Logout</span>
      </div>
    </nav>
  )
}

export default Nav
