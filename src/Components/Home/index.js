import {SiHtml5, SiCss3, SiSemanticuireact} from 'react-icons/si'

import {TbBrandJavascript} from 'react-icons/tb'

import {useRef, useEffect} from 'react'

import {Link} from 'react-router-dom'

import Typed from 'typed.js'

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
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-lg-flex-container">
        <div className="home-lg-col-container">
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685355397/311431796_1181249342758752_3664529721297008871_n_xxa8d4.jpg"
              alt="profile"
              className="profile-img"
            />
          </div>
          <div className="skills-container">
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
          <div className="sm-contact-container">
            <ContactUs />
          </div>
        </div>

        <div className="home-description-container">
          <span className="typed-title" ref={typedTextRef} />
          <p>
            Welcome to my portfolio! I am a passionate and dedicated frontend
            developer with a strong foundation in HTML, CSS, and JavaScript. I
            specialize in creating intuitive and interactive user interfaces
            that deliver exceptional user experiences.
          </p>
          <p>
            Throughout my career, I have worked on various mini projects, honing
            my skills in front-end development and design. My expertise includes
            responsive web design, cross-browser compatibility, and mobile
            optimization, ensuring that websites I create are accessible and
            engaging across different devices.
          </p>
          <p>
            In my portfolio, you will find a collection of projects that
            showcase my abilities and creativity. Each project represents a
            unique challenge I have overcome, highlighting my problem-solving
            skills and attention to detail. I have collaborated with designers,
            UX professionals, and backend developers to create seamless and
            visually stunning websites that not only meet client requirements
            but also exceed user expectations.
          </p>
          <p>
            I am well-versed in popular frontend framework such as React. By
            utilizing these tools effectively, I have created dynamic and
            scalable web applications that provide seamless user experiences. My
            knowledge extends to version control systems like Git, ensuring
            smooth collaboration and efficient code management.
          </p>
          <p>
            As a frontend developer, I believe in staying updated with the
            latest industry trends and technologies. I am constantly learning
            and exploring new techniques to enhance my skills and deliver
            innovative solutions. In my portfolio, you will see my commitment to
            continuous improvement and my willingness to push the boundaries of
            frontend development.
          </p>
          <p>
            I am excited to bring my skills and passion to new projects and
            collaborate with talented individuals or organizations. If you have
            any inquiries or would like to discuss potential opportunities,
            please feel free to get in touch. Thank you for visiting my
            portfolio, and I look forward to hearing from you!
          </p>
          <Link className="link-btn-container" to="/projects">
            <button type="button" className="link-btn" onClick={onclickScroll}>
              Navigate To Projects
            </button>
          </Link>
        </div>
      </div>
      <div className="lg-contacts-container">
        <ContactUs />
      </div>
    </div>
  )
}
export default Home
