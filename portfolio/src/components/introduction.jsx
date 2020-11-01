import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={
                {
                  backgroundImage: 'url(images/Rings25fps6s04.gif)',
                  // backgroundSize:"cover"
                }
              }>
                {/*
               <video className='videoTag' autoPlay loop muted>
                 <source src={require('../assets/rings.m4v')} type='video/mp4' />
               </video> */}

                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>
                            Welcome on my Portfolio<br /><br />
                            {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}
                            I'm Christophe Schlienger
                          </h1>
                          {/*  <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/15coSa2rnZcdywihM-pWTvoGqE65JAkxQAh6JDBNrF2Q/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={
                {
                  backgroundImage: 'url(images/Rings25fps6s04.gif)',
                  backgroundSize: 'stretch'
                }
              }>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            I'm an IT specialist<br /><br />
                            {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}
                            Front-End developer
                          </h1>
                          {/* <p><a className="btn btn-primary btn-learn" href="https://github.com/anuupadhyay" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={
                { backgroundImage: 'url(images/Rings25fps6s04.gif)' }
              }>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Continuously learning
                          <br /><br />
                            {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}
                            and developing my skills
                           </h1>``
                          {/*  <p><a className="btn btn-primary btn-learn" href="https://auth.geeksforgeeks.org/user/anuupadhyay/articles" target="_blank" rel="noopener noreferrer">View Blog <i className="icon-book" /></a></p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
