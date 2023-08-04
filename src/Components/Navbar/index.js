/* eslint-disable import/no-extraneous-dependencies */
import './index.css'

import {NavLink, Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'

import {RxCrossCircled} from 'react-icons/rx'

import {useState} from 'react'

import resumePDF from '../../Ravichandra(IT).pdf'

const Navbar = () => {
  const [ham, setHam] = useState(false)

  const onclickHam = () => {
    setHam(!ham)
  }

  const onclickScroll = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <nav className="nav-container">
      <div className="nav-flex ">
        <Link to="/" className="link" onClick={onclickScroll}>
          <h1 className="nav-logo">Portfolio</h1>
        </Link>

        {ham ? (
          <RxCrossCircled className="ham-icon" onClick={onclickHam} />
        ) : (
          <GiHamburgerMenu className="ham-icon" onClick={onclickHam} />
        )}
      </div>

      {ham ? (
        <ul className="sm-nav-list">
          <NavLink
            to="/"
            className="link"
            activeClassName="active"
            exact
            onClick={onclickScroll}
          >
            <li className="nav-item">Home</li>
          </NavLink>
          <NavLink
            to="/projects"
            className="link"
            activeClassName="active"
            exact
            onClick={onclickScroll}
          >
            <li className="nav-item">Projects</li>
          </NavLink>
          <NavLink
            to="/certificates"
            className="link"
            activeClassName="active"
            exact
            onClick={onclickScroll}
          >
            <li className="nav-item">Certificates</li>
          </NavLink>

          <a className="link" href={resumePDF} download>
            <li className="nav-item">Resume</li>
          </a>
        </ul>
      ) : (
        ''
      )}

      <ul className="lg-nav-list">
        <NavLink
          to="/"
          className="link"
          activeClassName="active"
          exact
          onClick={onclickScroll}
        >
          <li className="nav-item">Home</li>
        </NavLink>
        <NavLink
          to="/projects"
          className="link"
          activeClassName="active"
          exact
          onClick={onclickScroll}
        >
          <li className="nav-item">Projects</li>
        </NavLink>
        <NavLink
          to="/certificates"
          className="link"
          activeClassName="active"
          exact
          onClick={onclickScroll}
        >
          <li className="nav-item">Certificates</li>
        </NavLink>
        <a className="link" href={resumePDF} download>
          <li className="nav-item">Resume</li>
        </a>
      </ul>
    </nav>
  )
}

export default Navbar
