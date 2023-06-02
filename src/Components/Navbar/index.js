/* eslint-disable import/no-extraneous-dependencies */
import './index.css'

import {NavLink} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'

import {RxCrossCircled} from 'react-icons/rx'

import {useState} from 'react'

import resumePDF from '../../Resume/Ravichandar Kadavakuti.pdf'

const Navbar = () => {
  const [ham, setHam] = useState(false)

  const onclickHam = () => {
    setHam(!ham)
  }
  return (
    <nav className="nav-container">
      <div className="nav-flex ">
        <NavLink to="/" className="link" activeClassName="active" exact>
          <h1 className="nav-logo">Portfolio</h1>
        </NavLink>

        {ham ? (
          <RxCrossCircled className="ham-icon" onClick={onclickHam} />
        ) : (
          <GiHamburgerMenu className="ham-icon" onClick={onclickHam} />
        )}
      </div>

      {ham ? (
        <ul className="sm-nav-list">
          <NavLink to="/" className="link" activeClassName="active" exact>
            <li className="nav-item">Home</li>
          </NavLink>
          <NavLink
            to="/projects"
            className="link"
            activeClassName="active"
            exact
          >
            <li className="nav-item">Projects</li>
          </NavLink>
          <NavLink
            to="/certificates"
            className="link"
            activeClassName="active"
            exact
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
        <NavLink to="/" className="link" activeClassName="active" exact>
          <li className="nav-item">Home</li>
        </NavLink>
        <NavLink to="/projects" className="link" activeClassName="active" exact>
          <li className="nav-item">Projects</li>
        </NavLink>
        <NavLink
          to="/certificates"
          className="link"
          activeClassName="active"
          exact
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
