import cx from './App.module.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { Component } from 'react'
import AddRecipe from './pages/AddRecipe'
import RecipeList from './pages/RecipeList'
import Recipe from './pages/Recipe'
import Background from './components/Background'

class App extends Component {
  render() {
    return (
      <Router>
        <div className={ cx['cookie-jar'] }>
          <Background />
          <div className={ cx['content'] }>
            <Route exact path="/" component={RecipeList} />
            <Route path="/add-recipe" component={AddRecipe} />
            <Route path="/recipe/:id" component={Recipe} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
