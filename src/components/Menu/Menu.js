import React from "react"

import Cross from "../../icons/xmark-solid.svg"

const Menu = ({ menuOpen, setMenuOpen }) => {
  const handleClasses = (menuOpen) => {
    let classes = menuOpen ? "menu-container open" : "menu-container"
    return classes
  }

  const baseURL = "https://eye.creativepreflight.com"

  return (
    <div className={handleClasses(menuOpen)}>
      <div className="menu-container-inner">
        <div className="top">
          <button
            className="closeInfo"
            id="closeInfo"
            onClick={() => {
              setMenuOpen(false)
            }}
          >
            <img
              src={Cross}
              className="close-icon"
              width="25"
              height="25"
              alt="close"
            />
          </button>
        </div>
        <div className="bottom">
          <ul className="menu-list">
            <li className="dot1 dot" data-scrollto="screen1">
              <a target="_blank" rel="noreferrer" href={`${baseURL}`}>
                Home
              </a>
            </li>
            <li className="dot2 dot" data-scrollto="screen2">
              <a target="_blank" rel="noreferrer" href={`${baseURL}#screen2`}>
                Facts about sight loss
              </a>
            </li>
            <li className="dot3 dot" data-scrollto="screen3">
              <a target="_blank" rel="noreferrer" href={`${baseURL}#screen3`}>
                What does sight loss look like?
              </a>
            </li>
            <li className="dot4 dot" data-scrollto="screen4">
              <a target="_blank" rel="noreferrer" href={`${baseURL}#screen4`}>
                Where do I go for a sight test?
              </a>
            </li>
            <li className="dot5 dot active">
              <a href={`${baseURL}/optician-search`}>Optician Search</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu
