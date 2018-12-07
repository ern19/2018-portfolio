import React from 'react'
import { Link } from 'gatsby'
import '../components/styles.css'
import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Aaron Trammell</h1>
    <p>Full Stack Developer</p>
    <ul className="stack-list">
      <li className="stack">ES6+</li>
      <li className="stack">CSS3</li>
      <li className="stack">HTML5</li>
      <li className="stack">React</li>
      <li className="stack">Node</li>
      <li className="stack">Ruby on Rails</li>
    </ul>
    <Link to="/page-2/">View my projects</Link>
  </Layout>
)

export default IndexPage
