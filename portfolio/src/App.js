import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
//import Blog from './components/blog'
import Skills from './components/skills'
import Projects from './components/projects'

class App extends Component {
	render() {
		return (
			<div id="colorlib-page">
				<div id="container-wrap">
					<Sidebar />
					<div id="colorlib-main">
							<Introduction />
						<About />
						<Skills />
						<Projects />
						<Timeline />
						{ /*<Blog></Blog> */}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
