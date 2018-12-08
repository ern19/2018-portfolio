import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const RecipeBook = () => (
  <Layout>
    <h1>This is my second project</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Home</Link>
    <Link to="/meal-prep">Next Project</Link>
  </Layout>
)

export default RecipeBook
