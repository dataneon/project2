import './App.css';
import React from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <div>
        <div className="app-Header">
        <Header />
        </div>
      </div>
      <div>
        <div className="app-Navbar">
          <Nav />
        </div>
      </div>
      <main>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/about" component={About}/>
      </main>
    </div>
  )
}

export default App;
