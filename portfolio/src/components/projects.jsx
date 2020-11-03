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
									<div className="desc">
										<div className="con">
											<span>Project 1: React Website page</span>
											<h3>Link : <br /><br />
												<a href="https://christophecyber.github.io/React-App-Cards-List/" target="_blank" rel="noreferrer">
													React App with Cards list & tsParticles animations
												</a>
											</h3>
											<span>
											A little React App done with CRA, including selective search possibility among a set of cards representing different IT skills. Integrated a TypeScript API through NPM with react-tsparticles for dynamic colorful background.
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{ backgroundImage: 'url(images/projCalcul.jpg)' }}>
									<div className="desc">
										<div className="con">
											<span>Project 2: JS Website page</span>
											<h3>Link : <br /><br />
												<a href="https://christophecyber.github.io/JS-Vanilla-Calculator/" target="_blank" rel="noreferrer">
													Calculator in JS Vanilla & tsParticles animation
												</a>
											</h3>
											<span>
											Scientific Calculator developed purely in JS 'Vanilla'. Futuristic design with 'tsParticules' API loaded from jQuery AJAX library and customized for suiting effects. Click and Keyboard JS listeners, many functions, some advanced CSS3 options used.
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{ backgroundImage: 'url(images/projEcomm.jpg)' }}>
									<div className="desc">
										<div className="con">
											<span>Project 3: React Full E-commerce Website</span>
											<h3>Link : {'\u00A0'}
												<a href="https://king-e-shop.herokuapp.com/" target="_blank" rel="noreferrer">
												React E-commerce Website
												</a>
											</h3>
											<span>
											Functional E-commerce interactive-responsive Website, with virtual luxurious products, build with React, Redux/Reducers, Reselect/Selectors, Firebase-Firestore, Stripe API, SASS, JS, JSX. Web App with dynamic features such as sign-up/sign-in, searching within products list, add/remove from/to cart, cart checkout, payment gateway (test mode)
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{ backgroundImage: 'url(images/projBook.jpg)' }}>
									<div className="desc">
										<div className="con">
											<span>Project 4: this React Portfolio</span>
											<h3>Link : <br/> <br/>
												<a href="work.html">
												React Portfolio page <br/> (where you are already)
												</a>
											</h3>
											<span>
											My Portfolio page where you are now. 
											Done with React and elements generated with Boostrap
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
											Project 5: In construction</h3>
											<span>JS Vanilla project</span>
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
