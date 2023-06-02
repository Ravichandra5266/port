import Aos from 'aos'

import 'aos/dist/aos.css'

import {useEffect} from 'react'

import Navbar from '../Navbar'

import ContactUs from '../ContactUs'

import './index.css'

const Certificates = () => {
  useEffect(() => {
    Aos.init()
  })

  return (
    <div className="certificates-container">
      <Navbar />
      <h1 className="certificates-title">Certificates</h1>
      <div className="ceritficate-flex">
        <a
          data-aos="zoom-in-down"
          className="link"
          href="https://certificates.ccbp.in/intensive/static-website?id=ZDJVVRYQJQ"
        >
          <div className="certificate-box">
            <img
              src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685510556/sw-1_p2ayo2.png"
              alt="certificate"
              className="certificate-img"
            />
            <h1 className="certificate-titile">
              Build Your Own Static Website
            </h1>
          </div>
        </a>

        <a
          data-aos="zoom-in-down"
          className="link"
          href="https://certificates.ccbp.in/intensive/responsive-website?id=CWQXPTXHLO"
        >
          <div className="certificate-box">
            <img
              src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685508749/rsw-1_dh5smz.png"
              alt="certificate"
              className="certificate-img"
            />
            <h1 className="certificate-titile">
              Build Your Own Responsive Website
            </h1>
          </div>
        </a>

        <a
          data-aos="zoom-in-down"
          className="link"
          href="https://certificates.ccbp.in/intensive/dynamic-web-application?id=TKRNCSHXTK"
        >
          <div className="certificate-box">
            <img
              src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685510804/js-1_suoj3y.png"
              alt="certificate"
              className="certificate-img"
            />
            <h1 className="certificate-titile">
              Build Your Own Dynamic Web Application
            </h1>
          </div>
        </a>

        <a
          data-aos="zoom-in-down"
          className="link"
          href="https://certificates.ccbp.in/intensive/introduction-to-databases?id=LMRLCKNBYE"
        >
          <div className="certificate-box">
            <img
              src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685510949/sql-1_jxe1ez.png"
              alt="certificate"
              className="certificate-img"
            />
            <h1 className="certificate-titile">Introduction to Databases</h1>
          </div>
        </a>

        <a
          data-aos="zoom-in-down"
          className="link"
          href="https://certificates.ccbp.in/intensive/javascript-essentials?id=CTFVBXHIOA"
        >
          <div className="certificate-box">
            <img
              src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685511150/CTFVBXHIOA-1_brbuam.png"
              alt="certificate"
              className="certificate-img"
            />
            <h1 className="certificate-titile">JavaScript Essentials</h1>
          </div>
        </a>

        <a
          data-aos="zoom-in-down"
          className="link"
          href="https://certificates.ccbp.in/intensive/flexbox?id=HFPTZJWUQP"
        >
          <div className="certificate-box">
            <img
              src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685511332/HFPTZJWUQP-1_zuxd1v.png"
              alt="certificate"
              className="certificate-img"
            />
            <h1 className="certificate-titile">
              Responsive Web Design using Flexbox
            </h1>
          </div>
        </a>

        <a
          data-aos="zoom-in-down"
          className="link"
          href="https://certificates.ccbp.in/intensive/developer-foundations?id=XWCPDSPEWQ"
        >
          <div className="certificate-box">
            <img
              src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685511503/XWCPDSPEWQ-1_yc7hds.png"
              alt="certificate"
              className="certificate-img"
            />
            <h1 className="certificate-titile">Developer Foundations</h1>
          </div>
        </a>
        <a
          data-aos="zoom-in-down"
          className="link"
          href="https://certificates.ccbp.in/intensive/react-js?id=CQKGUQYOIF"
        >
          <div className="certificate-box">
            <img
              src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685511618/CQKGUQYOIF-1_bmapfr.png"
              alt="certificate"
              className="certificate-img"
            />
            <h1 className="certificate-titile">React JS</h1>
          </div>
        </a>
      </div>

      <ContactUs />
    </div>
  )
}

export default Certificates
