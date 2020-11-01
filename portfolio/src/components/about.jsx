import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Me</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>Self learner, patient, logical, analyst.</p>
                                            <p>Both Independent and Team worker.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">Here are some of my expertise</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3>Technical Knowledge</h3>
                                        <p>JavaScript, HTML5, CSS3, Sass, REACT.js, JSX, Redux, Git, Github, Php, Java, Firebase, Firestore, Stripe, Ajax, npm, yarn, Heroku, Bootstrap, ...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-6">
                                    <span className="icon">
                                        <i className="icon-monitor" />
                                    </span>
                                    <div className="desc">
                                        <h3>Other complementary IT skills</h3>
                                        <p>Visual Studio Code, Sublime, Brackets, ESLint, Emmet, Eclipse JDK, IntelliJIDEA, Photoshop, ...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-4">
                                    <span className="icon">
                                    <i className="icon-bulb" />
                                    </span>
                                    <div className="desc">
                                        <h3>Other skills and hobbies</h3>
                                        <p>French native, English upper level.</p>
                                        <p>Philosphy/Metaphysics, SciFi fan, Mountain Bicycle, healthy life, taste for Arts, Beauty & Harmony...</p>
                                    </div>
                                </div>
                            </div>
                            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
