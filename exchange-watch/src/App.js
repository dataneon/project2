import './App.css';
import React from 'react'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
        <Header />
        <Nav />
        <About />
        <Dashboard />
    </div>
  )
}

export default App;
