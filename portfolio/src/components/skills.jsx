import React, { Component } from 'react'

export default class Skills extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-skills colorlib-skills-background2" data-section="skills">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Specialty</span>
								<h2 className="colorlib-heading animate-box fadeInUp animated">My Skills</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
								<p>Constantly evolving skills and mastery</p>
							</div>
							<div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
								<div className="progress-wrap">
									<h3>HTML5</h3>
									<div className="progress">
										<div className="progress-bar color-1" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{ width: '85%' }}>
											<span>{'( very good )'}</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
								<div className="progress-wrap">
									<h3>CSS3</h3>
									<div className="progress">
										<div className="progress-bar color-1" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }}>
											<span>{'( very good )'}</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
								<div className="progress-wrap">
									<h3>Java Script</h3>
									<div className="progress">
										<div className="progress-bar color-4" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} style={{ width: '65%' }}>
											<span>{'( good )'}</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
								<div className="progress-wrap">
									<h3>React</h3>
									<div className="progress">
										<div className="progress-bar color-4" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '70%' }}>
											<span>{'( good )'}</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
								<div className="progress-wrap">
									<h3>Sass</h3>
									<div className="progress">
										<div className="progress-bar color-1" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{ width: '75%' }}>
											<span>{'( good )'}</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
								<div className="progress-wrap">
									<h3>Git/Github</h3>
									<div className="progress">
										<div className="progress-bar color-6" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} style={{ width: '65%' }}>
											<span>{'( good )'}</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
								<div className="progress-wrap">
									<h3>VScode</h3>
									<div className="progress">
										<div className="progress-bar color-3" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{ width: '85%' }}>
											<span>{'( very good )'}</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
								<div className="progress-wrap">
									<h3>Php</h3>
									<div className="progress">
										<div className="progress-bar color-5" role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} style={{ width: '45%' }}>
											<span>{'( basics )'}</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
								<div className="progress-wrap">
									<h3>Java</h3>
									<div className="progress">
										<div className="progress-bar color-5" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{ width: '40%' }}>
											<span>{'( basics )'}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
};