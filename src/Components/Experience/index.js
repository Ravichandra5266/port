import './index.css'

import Navbar from '../Navbar'

import ContactUs from '../ContactUs'

const Experience = () => (
  <div className="experience-container">
    <Navbar />
    <h1 className="exp-title">Experience </h1>
    <div className="exp-con">
      <img
        src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685772692/Ravichandra-kadavakuti314_aqcgb1.jpg"
        alt="exp"
        className="exp-img"
      />
    </div>
    <ContactUs />
  </div>
)

export default Experience
