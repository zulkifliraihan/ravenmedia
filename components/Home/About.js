import React from 'react'

import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll'

const About = () => {
    return (
        <>
            <div className="about-area ptb-100" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span className="sub-title">ABOUT US</span>
                                <h2>Who we are?</h2>
                                <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. Never missyour chance its just began.</p>
                                
                                <div className="features-text">
                                    <h6>Our App</h6>
                                    <p>Most provabily best you can trust on it, just log in with your mail account from play store and using whatever you want for your business.</p>
                                </div>

                                <div className="features-text">
                                    <h6>Our Mission</h6>
                                    <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy of your business purpose text.</p>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-img">
                                <ScrollAnimation animateIn='fadeInUp'>
                                    <img src="/images/app/app-img8.png" alt="about" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About;