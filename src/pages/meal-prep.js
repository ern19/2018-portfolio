import React from 'react'
import { Link } from 'gatsby'
import MealPrepImg from '../images/meal-prep-screenshot.png'

import Layout from '../components/layout'

const MealPrep = () => (
  <Layout>
    <h1 className="project-header">Meal Prep App</h1>
    <div className="project-container">
      <a href="https://calm-fjord-67950.herokuapp.com/recipes" target="_blank" rel="noopener noreferrer">
        <img src={MealPrepImg} alt="Meal prep project screenshot" className="project-screenshot" />
      </a>  
    </div>
    <p>As someone who's always trying to eat well and save money, I spend a lot of time scouring the internet for recipes that taste good and scale well to make leftovers.
      However, a majority of recipe sites and blogs are a nightmare to navigate. I wanted to make an app that was geared specifically towards meal-prepping, and that was 
      easy to use. The recipes are user-curated, and are submitted with a short-list of the major ingredients. Before you follow the link to the site, you can view a checklist 
      with the main ingredients to make sure you have the ingredients. Although I'd love to scale this up to a major site, I've used it as my own personal recipe book to make my lunches for the week.
    </p>
    <div className="navLinks">
      <Link to="/">Home</Link>
      <Link to="/hangman" className="next">Next Project</Link>
    </div>
  </Layout>
)

export default MealPrep
