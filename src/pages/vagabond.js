import React from 'react'
import { Link } from 'gatsby'
import VagabondImg from '../images/vagabond.png'

import Layout from '../components/layout'

const Vagabond = () => (
  <Layout>
    <h1 className="project-header">Vagabond Travel App</h1>
    <div className="project-container">
      <a href="https://wander-wisely.herokuapp.com/" target="_blank" rel="noopener noreferrer">
        <img src={VagabondImg} alt="Vagabond screenshot" className="project-screenshot" />
      </a>    
    </div>
    <p>Vagabond was our only group project we did during the WDI course.
      Our instructors gave us a wireframe of what they wanted to look like,
      then we had 2 full days to deliver. We utilized Trello to map out user stories to make sure we stayed focused on specific goals as we started building the app.
      We used our first day to build out the back-end with Ruby on Rails and get a skeleton view built out with React.
      The second day, we built out each React component. The morning before we presented to our "clients", we put the final polish on the styling using Material-UI. The project was a valuable lesson in using
      Git/Github as a collaboration tool, as well as getting more practice with pair/mob programming.</p>
    <div className="navLinks">
     <Link to="/">Home</Link>
     <Link to="/recipe-book" className="next">Next Project</Link>
    </div>
  </Layout>
)

export default Vagabond
