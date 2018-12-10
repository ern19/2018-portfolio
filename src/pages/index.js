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
import twitterIcon from '../images/twitter.png'
import linkedInIcon from '../images/linkedIn.png'
import githubIcon from '../images/github.png'

const blurStack = () => {
  return console.log('hmm')
}

const IndexPage = (data) => (

  <Layout>
    <div className="index"> 
      <h1 className="name">Aaron Trammell</h1>
      <p className="sub-header">Full Stack Developer</p>
      <ul className="stack-list" onMouseEnter={blurStack}>
        <img src={jsLogo} alt="Javascript logo" className="stack"/>
        <img src={cssLogo} alt="CSS logo" className="stack"/>
        <img src={htmlLogo} alt="html logo" className="stack"/>
        <img src={reactLogo} alt="react logo" className="stack"/>
        <img src={nodeLogo} alt="node logo" className="stack"/>
        <img src={rubyLogo} alt="ruby logo" className="stack hide"/>
      </ul>
    </div>

    <p className="find-me">Find me on</p>
    <div className="social-container">
      <a href="https://github.com/ern19" target="_blank" rel="noopener noreferrer"> <img src={githubIcon} className="social-icons" id="github" alt="github icon"/> </a>
      <a href="https://www.linkedin.com/in/aaron-trammell-5a613a8b/" target="_blank" rel="noopener noreferrer"> <img src={linkedInIcon} className="social-icons" id="linkedIn" alt="linkedin icon"/> </a>
      <a href="https://twitter.com/Trammell19" target="_blank" rel="noopener noreferrer"> <img src={twitterIcon} className="social-icons" id="twitter" alt="twitter icon"/> </a>
    </div>  

    <div className="projects">
      <Link to="/kidsafe/" className='projects'>View my projects</Link>
    </div>

  </Layout>
)

export default IndexPage
