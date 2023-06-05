import {BsLinkedin, BsWhatsapp, BsGithub, BsFillPhoneFill} from 'react-icons/bs'

import {SiGmail} from 'react-icons/si'

import './index.css'

const ContactUs = () => (
  <div className="contact-container">
    <h1 className="contact-title">Contact Me </h1>
    <div className="contact-icons-container">
      <a className="phone" href="tel:7993091099">
        <BsFillPhoneFill className="contact-icons" />
      </a>
      <a href="https://www.linkedin.com/in/ravichandrakadavakuti">
        <BsLinkedin className="contact-icons" />
      </a>
      <a href="https://wa.me/7993091099">
        <BsWhatsapp className="contact-icons" />
      </a>
      <a href="https://github.com/Ravichandra5266">
        <BsGithub className="contact-icons" />
      </a>
      <a href="mailto:krc263458@gmail.com">
        <SiGmail className="contact-icons" />
      </a>
    </div>
  </div>
)

export default ContactUs
