import React from 'react'
import { Link } from 'gatsby'
import KidsafeImg from '../images/kidsafe.png'

import Layout from '../components/layout'

const KidSafe = () => (
  <Layout>
    <h1 className="project-header">Kidsafe Video App</h1>
    <div className="project-container">
      <a href="https://kidsafevideos.herokuapp.com/" target="_blank" rel="noopener noreferrer">
        <img src={KidsafeImg} alt="Kidsafe screenshot" className="project-screenshot"/>
      </a>
    </div>  
    <p>The idea for this project came from a personal concern over the ever-increasing 
      popularity of YouTube, coupled with the constant stream of low-effort 
      and often inappropriate kid's content. I wanted to build an application that
       would allow parents to curate educational content for their kids and take advantage 
       of the great content on Youtube without all the not-so-great content in between. 
       Log-in with kathy_bates@mom.com/password to see an example profile.</p>

    <div className="navLinks">   
      <Link to="/">Home</Link>
      <Link to="/vagabond" className="next">Next Project</Link>
    </div>
  </Layout>
)

export default KidSafe
