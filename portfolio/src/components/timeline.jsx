import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience colorlib-experience-background" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>IT specialist<span> 2000 - 2015</span></h2>
                        <p>IT specialist</p>
                        {/*
                         <p>parag text 2.</p>
                         */}
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Front End Web Developer<span> 2019-2020</span></h2>
                        <p>Front End Web Developer</p>
                        {/*
                         <p>parag text 2.</p>
                        */}
                      </div>
                    </div>
                  </article>
                  {/*  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduation and Higher Education <span>2009- Jul 2011</span></h2>
                        <p>Engineering (Computer Science): 2011-2015<br />
						Higher Secondary Education: 2009-2011<br />
						Senior Secondary Education: 2009</p> 						
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
