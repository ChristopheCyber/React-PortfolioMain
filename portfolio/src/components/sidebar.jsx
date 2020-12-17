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
              <h1 id="colorlib-logo">
                <a href="index.html">
                  Schlienger<br />Christophe
                </a>
              </h1>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
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
                  <a href="https://christophecyber.github.io/CV_new/" target="_blank" rel="noopener noreferrer"> CV <i className="icon-file"></i></a>
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
              <br />
              <p>
                <small>
                  Made with {'\u00A0'}
                  {/* Bootstrap smiley icon */}
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-emoji-smile" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path fill-rule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z" />
                    <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                  </svg>
                  {'\u00A0'} & {'\u00A0'}
                  <i className="icon-coffee" aria-hidden="true"></i>
                  {'\u00A0'} & {'\u00A0'}
                  <i className="icon-watch" aria-hidden="true" />
                  {'\u00A0'} on my {'\u00A0'}
                  <i className="icon-monitor" aria-hidden="true" />
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
