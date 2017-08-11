import React, {Component} from 'react'
import {Link} from 'react-router'

class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<header>
						<NavDrawer/>						
					</header>
					<main>
						{this.props.children}
					</main>
				</div>
			</MuiThemeProvider>
		)
	}
}