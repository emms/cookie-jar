import cx from './App.module.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { Component } from 'react'
import AddRecipe from './pages/AddRecipe'
import Recipe from './pages/Recipe'
import Landing from './pages/Landing'

class App extends Component {
  render() {
    return (
      <Router>
        <div className={ cx['cookie-jar'] }>
          <div className={ cx['content'] }>
            <Route exact path="/" component={ Landing } />
            <Route path="/add-recipe" component={ AddRecipe } />
            <Route path="/recipe/:id" component={ Recipe } />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
