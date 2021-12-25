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
                                <p>
                                    we are here to help you to grow your business in this fast-developing world. 
                                    For you, our team will build, develop,and handle your social media business, android & ios apps and website asper your requirement 
                                    and our team of expert will also help you excel in terms of strategy, technology, creation, and content. With the right solutions for each domain and in each industry. 
                                </p>
                                
                                <div className="features-text">
                                    <h6>Technology</h6>
                                    <p>
                                        Our extensive tech stack guarantees freedom in development, testing, support and maintenance. Count on the best match with your project.
                                    </p>
                                </div>

                                <div className="features-text">
                                    <h6>Strategy</h6>
                                    <p>
                                        We help you develop a competitive advantage. Count on our actionable, forward-looking advice.
                                    </p>
                                </div>

                                <div className="features-text">
                                    <h6>Creative</h6>
                                    <p>
                                        We create unique brands, logos and all related assets, tailored to your needs and our constantly evolving society.
                                    </p>
                                </div>

                                <div className="features-text">
                                    <h6>Content</h6>
                                    <p>
                                        We feed your audience with the right content at the right time, in word and image, throughout the entire customer journey.
                                    </p>
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