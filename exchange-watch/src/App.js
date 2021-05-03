import './App.css';
import React from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
// import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div>
          <div className="app-Header">
            <Header />
          </div>
        </div>
        <main className="mainContent">
          <Route exact path="/" component={Dashboard}/>
        </main>
      </div>
    </div>
  )
}

export default App;
