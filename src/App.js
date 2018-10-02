import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { Component } from 'react'
import './App.css'
import AddRecipe from './pages/AddRecipe'
import RecipeList from './pages/RecipeList'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="recipe-app">
          <Header />
          <Route exact path="/" component={RecipeList} />
          <Route path="/add-recipe" component={AddRecipe} />
        </div>
      </Router>
    )
  }
}

export default App
