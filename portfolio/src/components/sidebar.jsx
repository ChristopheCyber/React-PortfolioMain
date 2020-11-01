import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse" data-target="#navbar"
          // aria-expanded="false" aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
              <h1 id="colorlib-logo"><a href="index.html">Schlienger Christophe</a></h1>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                  {/*<li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                {/* <li><a href="https://www.facebook.com/dhruv.barochia" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://twitter.com/ddbarochiya" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/ddbarochiya/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li> */}

                <li>
                  <a href="https://www.linkedin.com/in/christophe-schlienger-04164a1a8/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a>
                </li>
                <li>
                  <a href="https://github.com/ChristopheCyber" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a>
                </li>
                <li>
                  <a href="https://www.facebook.com/highspi/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2"></i></a>
                </li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <span className="email">
                <i className="icon-mail"></i>
                {'\u00A0'}christophalpha@yahoo.com
              </span>
              <br/>
              <p>
                <small>
                  Made with {'\u00A0'}
                  <i className="icon-coffee" aria-hidden="true"></i>
                  {'\u00A0'} & {'\u00A0'}
                  <i className="icon-watch" aria-hidden="true" />
                  {'\u00A0'} on {'\u00A0'}
                  <i className="icon-monitor" aria-hidden="true" />
                  <br></br>
                  {/* Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration  */}
				          More coming {':)'}
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
