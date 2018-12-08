import React from 'react'
import { Link } from 'gatsby'
import '../components/styles.css'
import Layout from '../components/layout'
import jsLogo from '../images/hello-world.png'
import cssLogo from '../images/css3.png'
import htmlLogo from '../images/HTML_Logo.png'
import reactLogo from '../images/react.png'
import nodeLogo from '../images/nodejs.png'
import rubyLogo from '../images/ruby-on-rails.png'

const IndexPage = (data) => (
  <Layout>
    <div className="index"> 
      <h1 className="name">Aaron Trammell</h1>
      <p className="sub-header">Full Stack Developer</p>
      <ul className="stack-list">
        <img src={jsLogo} alt="Javascript logo" className="stack"/>
        <img src={cssLogo} alt="CSS logo" className="stack"/>
        <img src={htmlLogo} alt="html logo" className="stack"/>
        <img src={reactLogo} alt="react logo" className="stack"/>
        <img src={nodeLogo} alt="node logo" className="stack"/>
        <img src={rubyLogo} alt="ruby logo" className="stack hide"/>
      </ul>
    </div>  
    <Link to="/kidsafe/" className='projects'>View my projects</Link>
  </Layout>
)

export default IndexPage
