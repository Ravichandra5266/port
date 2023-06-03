/* eslint-disable react/no-unescaped-entities */
import Aos from 'aos'

import 'aos/dist/aos.css'

import {useEffect} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

import Navbar from '../Navbar'

import ContactUs from '../ContactUs'

const Projects = () => {
  useEffect(() => {
    Aos.init()
  })
  const onclickscroll = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
  return (
    <div className="project">
      <Navbar />
      <h1 className="major-project-title">Mini Projects</h1>

      <div className="projects">
        <a href="https://jobbykrcrjs.ccbp.tech" className="link">
          <div data-aos="zoom-in-up" className="project-container">
            <h1 className="project-title">Jobby App</h1>
            {/* <div className="project-flex"> */}
            <img
              src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685438990/jobby-app-login-lg-output_hewhhv.png"
              alt="jobbyapp"
              className="jobby-img"
            />
            {/* <ul className="project-list">
              <li>
                Implemented Jobby App where users can log in and can see a list
                of jobs with search by Job title, filters based on Salary range
                and Employment type, etc
              </li>
              <li>
                Implemented different pages like Login, Home, Jobs, Job item
                details using React components, props, state, lists, event
                handlers, form inputs.
              </li>
              <li>
                Authenticating by taking username, password and doing login post
                HTTP API Call.
              </li>
              <li>
                Persisted user login state by keeping jwt token in client
                storage, Sending it in headers of further API calls to authorize
                the user.
              </li>
              <li>
                Implemented different routes for Login, Home, Jobs, Job item
                details pages by using React Router components Route, Switch,
                Link.
              </li>
              <li>
                Implemented filters and search text by sending them as query
                parameters to jobs API calls.
              </li>
              <li>
                Redirecting to the login page if the user tries to open Home,
                Jobs, Job item details routes which need authentication by
                implementing protected routes.
              </li>
            </ul> */}
          </div>
          {/* </div> */}
        </a>

        <a href="https://mp02rjskrc.ccbp.tech" className="link">
          <div data-aos="zoom-in-up" className="project-container">
            <h1 className="project-title"> Insta Share</h1>
            {/* <div className="project-flex"> */}
            <img
              src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685446435/Login_page_le7lfi.png"
              alt="jobbyapp"
              className="jobby-img"
            />
            {/* <ul className="project-list">
                <li>
                  Implemented responsive Streaming Application like Instagram
                  Clone where users can log in and see a list of stories and
                  posts, users can also search posts with post captions, users
                  can be able to like and dislike the post and also view the
                  user specific posts.
                </li>
                <li>
                  Implemented different routes for features like login, home,
                  user profile, profile by using React Router components Route,
                  Switch, Link.
                </li>
                <li>
                  Implemented horizontal scrolling (In stories section) using
                  React Third Party library called React Slick.
                </li>
                <li>
                  Used Figma mockups to implement UI-rich and pixel-perfect
                  React components.
                </li>
                <li>
                  Used fetch to call REST APIs for authentication, list of
                  posts, user profile, and posts search APIs.
                </li>
                <li>
                  Implemented username and password authentication and persisted
                  login state using client storage.
                </li>
                <li>
                  Implemented a protected route to ensure only authenticated
                  users can access the pages like user profile, Home, etc.
                </li>
              </ul> */}
          </div>
          {/* </div> */}
        </a>

        <a href="https://bhrejskrc.ccbp.tech" className="link">
          <div data-aos="zoom-in-up" className="project-container">
            <h1 className="project-title"> Book Hub</h1>
            {/* <div className="project-flex"> */}
            <img
              src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685447110/Login_page_1_duzxed.png"
              alt="jobbyapp"
              className="jobby-img"
            />
            {/* <ul className="project-list">
                <li>
                  Implemented responsive Goodreads Clone where users can log in
                  and see a list of books, bookshelves like all shelves (books
                  sorted by rating), completed reading shelf, currently reading
                  shelf, want to read shelf , and user can also search books
                  with author's name and book's name.
                </li>
                <li>
                  Implemented different routes for features like login, home,
                  bookshelves by using React Router components Route, Switch,
                  Link.
                </li>
                <li>
                  Implemented stars (rating), dropdown (select) using React
                  Third Party libraries called React Rating Stars, React Select.
                </li>
                <li>
                  Used Figma mockups to implement UI-rich and pixel-perfect
                  React components.
                </li>
                <li>
                  Used fetch to call REST APIs for a list of books, bookshelves
                  details and books search APIs.
                </li>
                <li>
                  Implemented username and password authentication and persisted
                  login state using client storage.
                </li>
                <li>
                  Implemented a protected route to ensure only authenticated
                  users can access the pages like home, bookshelves, etc.
                </li>
              </ul> */}
          </div>
          {/* </div> */}
        </a>

        <a href="https://tskrjskrc.ccbp.tech" className="link">
          <div data-aos="zoom-in-up" className="project-container">
            <h1 className="project-title">Tasty Kitchens</h1>
            {/* <div className="project-flex"> */}
            <img
              src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685447386/Login_Empty_g2l9zg.png"
              alt="jobbyapp"
              className="jobby-img"
            />
            {/* <ul className="project-list">
                <li>
                  Implemented a responsive Online Food Ordering System like
                  Swiggy/Zomato where users can see popular restaurants with
                  sort by rating, specific restaurant details, adding or
                  removing food items to cart, and payments section.
                </li>
                <li>
                  Implemented different routes for features like login, home,
                  specific restaurant details, cart by using React Router
                  components Route, Switch, Link.
                </li>
                <li>
                  Implemented horizontal scrolling (carousel images on the home
                  page) using React Third Party library called React Slick.
                </li>
                <li>
                  Used Figma mockups to implement UI-rich and pixel-perfect
                  React components.
                </li>
                <li>
                  Used fetch to call REST APIs for popular restaurants with sort
                  by, specific restaurant details.
                </li>
                <li>
                  Implemented username and password authentication and persisted
                  login state using client storage.
                </li>
                <li>
                  Implemented a protected route to ensure only authenticated
                  users can access the pages like home, specific restaurant
                  details, etc.
                </li>
              </ul> */}
          </div>
          {/* </div> */}
        </a>
      </div>
      <Link className="minor-btn-container" to="/minor-projects">
        <button
          type="button"
          className="minor-projects-btn"
          onClick={onclickscroll}
        >
          Navigate Minor Projects
        </button>
      </Link>
      <ContactUs />
    </div>
  )
}

export default Projects
