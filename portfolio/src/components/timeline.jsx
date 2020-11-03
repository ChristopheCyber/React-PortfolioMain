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
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Front End Web Developer<br /><span> 2019-2020</span></h2>
                        <p>
                          Updated and oriented my skills towards Front-End development.
                          Specialized on React framework.
                          Following MOOC trainings mainly on OpenClassrooms both in French & English and Udemy / ZTM in English.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Discretionary Trader-Programmer<br /><span> 2014 - 2018</span></h2>
                        <p>Developing scrips for Automated Forex Trading / Algorithmic Trading.
                        Programming and testing with ActFX & MetaQuotes Language MQL4/5.
                        Discretionary trading on ActTrader platform.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>IT specialist<br /><span> 1999 - 2015</span></h2>
                        <p>Trained from 1999 in programmation on IBM Mainframes environment mainly in COBOL II.
                        Working on large scale Applications in different teams for important companies such as Banks ( Credit-Mutuel, France ), Automotive ( PSA ) and Transport/delivery ( DHL ) industries.
                        Mostly on Mainframe MVS, OS/390 IBM, IMS DB2, SQL, JCL, Batch, transaction monitoring development with CICS 3270, DL1, VB ACCESS project, HTML ...
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Mathematics & IT Master diploma<br /><span> 1998</span></h2>
                        <p>
                          Master’s degree in IT / Computer Science and Mathematics. Master with Engineer mention obtained at ULP University of Strasbourg in France.
                        </p>
                      </div>
                    </div>
                  </article>
                  {/*  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduation and Higher Education <span>2009- Jul 2011</span></h2>
                        <p>Engineering (Computer Science): 2011-2015<br />
                            Higher Secondary Education: 2009-2011<br />
                            Senior Secondary Education: 2009
                        </p> 						
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
