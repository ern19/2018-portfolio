import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Hangman = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Home</Link>
    <Link to="/about-me">Check out what else I'm into.</Link>
  </Layout>
)

export default Hangman
