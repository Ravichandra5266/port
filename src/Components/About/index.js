import {useRef, useEffect} from 'react'

import Typed from 'typed.js'

import './index.css'

import Navbar from '../Navbar'

import ContactUs from '../ContactUs'

const About = () => {
  const typedTextRef = useRef(null)
  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: ['Hi MySelf Ravichandra Kadavakuti', 'Im a Front-end Developer'],
      typeSpeed: 50,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])
  return (
    <div className="ab-con">
      <Navbar />
      <h1 className="about-title">About Me</h1>
      <span className="about-scroll-title" ref={typedTextRef} />

      <div className="about-container">
        <div className="home-des-scroll">
          <li>
            Welcome to my portfolio! I am a passionate and dedicated frontend
            developer with a strong foundation in HTML, CSS, and JavaScript. I
            specialize in creating intuitive and interactive user interfaces
            that deliver exceptional user experiences.
          </li>
          <li>
            Throughout my career, I have worked on various mini projects, honing
            my skills in front-end development and design. My expertise includes
            responsive web design, cross-browser compatibility, and mobile
            optimization, ensuring that websites I create are accessible and
            engaging across different devices.
          </li>
          <li>
            In my portfolio, you will find a collection of projects that
            showcase my abilities and creativity. Each project represents a
            unique challenge I have overcome, highlighting my problem-solving
            skills and attention to detail. I have collaborated with designers,
            UX professionals, and backend developers to create seamless and
            visually stunning websites that not only meet client requirements
            but also exceed user expectations.
          </li>
          <li>
            I am well-versed in popular frontend framework such as React. By
            utilizing these tools effectively, I have created dynamic and
            scalable web applications that provide seamless user experiences. My
            knowledge extends to version control systems like Git, ensuring
            smooth collaboration and efficient code management.
          </li>
          <li>
            As a frontend developer, I believe in staying updated with the
            latest industry trends and technologies. I am constantly learning
            and exploring new techniques to enhance my skills and deliver
            innovative solutions. In my portfolio, you will see my commitment to
            continuous improvement and my willingness to push the boundaries of
            frontend development.
          </li>
          <li>
            I am excited to bring my skills and passion to new projects and
            collaborate with talented individuals or organizations. If you have
            any inquiries or would like to discuss potential opportunities,
            please feel free to get in touch. Thank you for visiting my
            portfolio, and I look forward to hearing from you!
          </li>
        </div>
      </div>
      <ContactUs />
    </div>
  )
}

export default About
