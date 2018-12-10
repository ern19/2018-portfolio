import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutMe = () => (
  <Layout>
    <h1>About me:</h1>
    <p>I've always been passionate about technology, and I decided to make a career
      change that reflected what I love doing: solving problems and making cool stuff.
      I started my coding career in August 2017, getting a headstart from the Web
      Development immersive course at General Assembly in Atlanta. I spent three months 
      learning the ropes and built five projects you can view here on my portfolio site 
      (Or maybe you already looked at all of them; either way, thanks for visiting!)
      <br/>
      <br/>
      Since my time at GA, I've had the opportunity to work for two very cool companies
      in metro Atlanta, Osborn Visual Solutions and Mozeus Worldwide, that allowed my to keep
      chasing my passion for building cool stuff. If you'd like to know more, I'd love to talk 
      to you about it. 
    </p>
    <h1>What else I'm into:</h1>

    <p>I'm a real person with non-coding interests too!</p>
    <p>I'm a proud dad to a 3 year old girl, who loves to help me with my projects.
      I'm an avid home baker, so I'm a real hit at office parties (hint, hint). I'm 
      also known to talk people's ear off about baseball given the slightest opportunity. 
      So if you want to talk bread, Braves or employment opps, feel free to reach out on my social 
      platforms or send me an email at aarontrammell19@gmail.com.
    </p>
    <Link to="/">Home</Link>
    <Link to="/kidsafe" className="next">View My Projects</Link>
  </Layout>
)

export default AboutMe
