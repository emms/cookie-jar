import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { Component } from 'react'
import './App.css'
import AddRecipe from './pages/AddRecipe'
import RecipeList from './pages/RecipeList'
import Recipe from './pages/Recipe'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="recipe-app">
          <Header />
          <Route exact path="/" component={RecipeList} />
          <Route path="/add-recipe" component={AddRecipe} />
          <Route path="/recipe/:id" component={Recipe} />
        </div>
      </Router>
    )
  }
}

export default App
