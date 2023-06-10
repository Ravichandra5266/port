import {SiHtml5, SiCss3, SiSemanticuireact} from 'react-icons/si'

import {TbBrandJavascript} from 'react-icons/tb'

import {IoIosNavigate} from 'react-icons/io'

import {useRef, useEffect} from 'react'

import {Link} from 'react-router-dom'

import Typed from 'typed.js'

import Aos from 'aos'

import 'aos/dist/aos.css'

import Navbar from '../Navbar'

import ContactUs from '../ContactUs'

import './index.css'

const Home = () => {
  const typedTextRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: ['Hi MySelf Ravichandra Kadavakuti', 'Im a Front-end Developer'],
      typeSpeed: 100,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  const onclickScroll = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  useEffect(() => {
    Aos.init()
  })

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <div className="profile">
          <img
            src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685355397/311431796_1181249342758752_3664529721297008871_n_xxa8d4.jpg"
            alt="profile"
            className="profile-img"
          />
          <span className="typed-title" ref={typedTextRef} />
        </div>
        <div className="content">
          <div data-aos="zoom-in-up" className="skills-container">
            <h1 className="skills-title">Technical Skills</h1>
            <ul className="skill-list">
              <div className="skill-item-container">
                <SiHtml5 className="skill-icons" />
                <li className="skill-item">Html</li>
              </div>
              <div className="skill-item-container">
                <SiCss3 className="skill-icons" />
                <li className="skill-item">Css</li>
              </div>
              <div className="skill-item-container">
                <TbBrandJavascript className="skill-icons" />
                <li className="skill-item">Javascript</li>
              </div>
              <div className="skill-item-container">
                <SiSemanticuireact className="skill-icons" />
                <li className="skill-item">React.js</li>
              </div>
            </ul>
          </div>
          <div data-aos="zoom-in-up" className="navigation-links-container">
            <Link
              className="link-btn-container"
              to="/about"
              onClick={onclickScroll}
            >
              <IoIosNavigate className="navigate-icons" />

              <button type="button" className="link-btn">
                About Me
              </button>
            </Link>

            <Link
              className="link-btn-container"
              to="/certificates"
              onClick={onclickScroll}
            >
              <IoIosNavigate className="navigate-icons" />

              <button type="button" className="link-btn">
                Certificates
              </button>
            </Link>
            <Link
              className="link-btn-container"
              to="/experience"
              onClick={onclickScroll}
            >
              <IoIosNavigate className="navigate-icons" />

              <button type="button" className="link-btn">
                Experience
              </button>
            </Link>

            <Link
              className="link-btn-container"
              to="/projects"
              onClick={onclickScroll}
            >
              <IoIosNavigate className="navigate-icons" />
              <button type="button" className="link-btn">
                Mini Projects
              </button>
            </Link>

            <Link
              className="link-btn-container"
              to="/minor-projects"
              onClick={onclickScroll}
            >
              <IoIosNavigate className="navigate-icons" />

              <button type="button" className="link-btn">
                Minor Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  )
}
export default Home
