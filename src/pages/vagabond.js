import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Vagabond = () => (
  <Layout>
    <h1>This is my third project</h1>
    <p>Welcome to page 4</p>
    <Link to="/">Home</Link>
    <Link to="/recipe-book">Next Project</Link>
  </Layout>
)

export default Vagabond
