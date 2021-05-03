import './App.css';
import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <div>
        <div className="app-Header">
          <Header />
        </div>
      </div>
      <main className="mainContent">
        <Route exact path="/" component={Dashboard}/>
      </main>
    </div>
  )
}

export default App;