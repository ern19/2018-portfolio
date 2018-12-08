import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const KidSafe = () => (
  <Layout>
    <h1 className="project-header">Kidsafe Video App</h1>
    <p>The idea for this project came from a personal concern over the ever-increasing 
      popularity of YouTube, coupled with the constant stream of low-effort 
      and often inappropriate kid's content. I wanted to build an application that
       would allow parents to curate educational content for their kids and take advantage 
       of the great content on Youtube without all the not-so-great content in between. 
       Log-in with kathy_bates@mom.com/password to see an example profile.</p>
    <Link to="/">Home</Link>
    <Link to="/vagabond">Next Project</Link>
  </Layout>
)

export default KidSafe
