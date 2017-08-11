import React, { Component } from 'react'
import './App.css'
import Navigation from './Navigation'

class App extends Component {
  render() {
    return (	  
      <div className="App">
	    <Navigation />

		<div id="page-wrapper">
			<div className="row">
			  <div className="col-lg-12">
				<h1 className="page-header">Dashboard</h1>
			  </div>		
			</div>
		</div>		
        
      </div>
    )
  }
}

export default App
