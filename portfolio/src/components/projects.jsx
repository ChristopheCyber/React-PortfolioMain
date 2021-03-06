import React, { Component } from 'react'

export default class Projects extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-work colorlib-work-background3" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{ backgroundImage: 'url(images/projCards.jpg)' }}>
									<div className="desc proj1">
										<div className="con">
											<span>Project 1: React Website page</span>
											<h3>Link : <br /><br />
												<a href="https://christophecyber.github.io/React-App-Cards-List/" target="_blank" rel="noreferrer">
													<span className="text-project-background">
														React App with Cards list & tsParticles animations
													</span>
												</a>
											</h3>
											<span className="text-project-background">
												A little React App done with CRA, selective search among a set of cards representing different IT skills. Integrated a TypeScript API through NPM with react-tsparticles for dynamic colorful background.
												Redux/Reducers in connected Components. Unit Tests & Snapshots with Jest / ENZYME.
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{ backgroundImage: 'url(images/projCalcul.jpg)' }}>
									<div className="desc proj2">
										<div className="con">
											<span>Project 2: JS Website page</span>
											<h3>Link : <br /><br />
												<a href="https://christophecyber.github.io/JS-Vanilla-Calculator/" target="_blank" rel="noreferrer">
													<span className="text-project-background">
														Calculator in JS Vanilla & tsParticles animation
													</span>
												</a>
											</h3>
											<span className="text-project-background">
												Scientific Calculator developed purely in JS 'Vanilla'. Futuristic design with 'tsParticules' API loaded from jQuery AJAX library and customized for suiting effects. Click and Keyboard JS listeners, many functions, some advanced CSS3 options used.
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{ backgroundImage: 'url(images/projEcomm.jpg)' }}>
									<div className="desc proj3">
										<div className="con">
											<span>Project 3: React Full E-commerce Website</span>
											<h3>Link : {'\u00A0'}
												<a href="https://king-e-shop.herokuapp.com/" target="_blank" rel="noreferrer">
													<span className="text-project-background">
														React E-commerce Website
													</span>
												</a>
											</h3>
											<span className="text-project-background">
												Functional E-commerce interactive-responsive Website, with virtual luxurious products, build with React, Redux/Reducers, Reselect/Selectors, Firebase-Firestore, Stripe API, SASS, JS, JSX. Web App with dynamic features such as sign-up/sign-in, searching within products list, add/remove from/to cart, cart checkout, payment gateway (test mode)
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{ backgroundImage: 'url(images/projPong.jpg)' }}>
									<div className="desc proj4">
										<div className="con">
											<span>Project 4: JS Website page</span>
											<h3>Link : <br /> 
												<a href="https://christophecyber.github.io/JS-Vanilla-PingPong/" target="_blank" rel="noreferrer">
													<span className="text-project-background">
														Ping-Pong / Space Game in JS Vanilla
													</span>
												</a>
											</h3>
											<span className="text-project-background">
												Pure Vanilla JavaScript project creating and manipulating Canvas API for graphic Game. Ping-Pong game of Visitor vs Computer playing with elementary AI algorithm. 'Space / Universe' design.
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{ backgroundImage: 'url(images/projBook.jpg)' }}>
									<div className="desc proj5">
										<div className="con">
											<span>Project 5: this React Portfolio</span>
											<h3>Link : <br /> <br />
												<a href="work.html">
													<span className="text-project-background">
														React Portfolio page <br /> (where you are)
													</span>
												</a>
											</h3>
											<span className="text-project-background">
												My Portfolio page where you are now.
												Done with React and elements generated by Bootstrap
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{ backgroundImage: 'url(images/CyberEngineC.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3>{/*<a href="work.html">Project 5: In construction</a>*/}
											Project 6: In development: writing tests with JEST</h3>
											<span className="text-project-background">
												React Jest project
											</span>
										</div>
									</div>
								</div>
							</div>
							{/*
 							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
 								<div className="project" style={{ backgroundImage: 'url(images/CyberFutureD.jpg)' }}>
 									<div className="desc">
 										<div className="con">
 											<h3><a href="work.html">Project 6: In conception</a></h3>
 											<span>Web Design</span>
 											<p className="icon">
 												<span><a href="#icon16"><i className="icon-share3" /></a></span>
 												<span><a href="#icon17"><i className="icon-eye" /> 100</a></span>
 												<span><a href="#icon18"><i className="icon-heart" /> 49</a></span>
 											</p>
 										</div>
 									</div>
 								</div>
 							</div>
						*/}
						</div>
						<div className="row">
							{/*<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div> */}
						</div>
					</div>
				</section>
			</div>
		)
	}
}
