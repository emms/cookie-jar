import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { Component } from 'react'
import AddRecipe from './pages/AddRecipe'
import Recipe from './pages/Recipe'
import Landing from './pages/Landing'
import Footer from './components/Footer'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Route exact path="/" component={ Landing } />
          <Route path="/add-recipe" component={ AddRecipe } />
          <Route path="/recipe/:id" component={ Recipe } />
          <Footer />
        </React.Fragment>
      </Router>
    )
  }
}

export default App
