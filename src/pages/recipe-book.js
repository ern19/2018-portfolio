import React from 'react'
import { Link } from 'gatsby'
import CocktailsImg from '../images/cocktails.png'

import Layout from '../components/layout'

const Divebar = () => (
  <Layout>
    <h1 className="project-header">Divebar Cocktail App</h1>
    <div className="project-container">
      <a href="https://divebar-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
        <img src={CocktailsImg} alt="Cocktail Project screenshot" className="project-screenshot" />
      </a>  
    </div>
    <p>The Divebar app was my first independent project using the React.js framework. 
      I used the Material-UI styling framework to create a responsive and intuitive user-experience. 
      I enjoyed using Materialize in my server-side rendered apps, and though 
      Material-UI was not as simple as Materialize, I thought the tools it offered were worth the challenge. 
      I used React-Router to do my routes that allowed the user to easily and quickly navigate around the app.</p>

    <div className="navLinks">            
      <Link to="/">Home</Link>
      <Link to="/meal-prep" className="next">Next Project</Link>
    </div>  
  </Layout>
)

export default Divebar
