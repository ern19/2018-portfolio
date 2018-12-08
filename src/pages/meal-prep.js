import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const MealPrep = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Home</Link>
    <Link to="/hangman">Next Project</Link>
  </Layout>
)

export default MealPrep
