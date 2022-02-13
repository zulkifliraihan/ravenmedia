import React from 'react'

import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll'

const About = () => {
    return (
        <>
            <div className="about-area ptb-100 bg-image-gagak bg-dark-color" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                            <span className="sub-title">ABOUT US</span>
                                <h2 className="clr-white">Who we are?</h2>
                                
                                <p className="clr-white mt-4">
                                    Raven Media is a digital agency that has been established since 2019, 
                                    We are here to assist you in developing your business in this rapidly growing digital world. 
                                    For you, our team will create and develop applications for Android & IOS, and Websites 
                                    that suit your business needs and our team of experts will also be able to help manage 
                                    your business in the digital world to excel in terms of strategy, technology, creation and content. 
                                    With the right solutions for every domain and in every industry.
                                </p>
                                
                                <p className="clr-white">
                                    For many of our clients, our Team is not only a third party, but we present a credible and strategic solution that covers all aspects of the digital arena. We work directly 
                                    with our clients ambitiously in formulating plans to get the best out of their digital shopping and marketing. 
                                    Our experienced team of experts will bring your innovations online, directing and delivering the best combination of 
                                    web development, search optimization, conversion management, ecommerce enhancement and social media management needed 
                                    to meet the ultimate goal.
                                </p>

                                {/* <div className="features-text">
                                    <h6 className="clr-white">Technology</h6>
                                    <p className="clr-white">
                                        Our extensive tech stack guarantees freedom in development, testing, support and maintenance. Count on the best match with your project.
                                    </p>
                                </div>

                                <div className="features-text">
                                    <h6 className="clr-white">Strategy</h6>
                                    <p className="clr-white">
                                        We help you develop a competitive advantage. Count on our actionable, forward-looking advice.
                                    </p>
                                </div>

                                <div className="features-text">
                                    <h6 className="clr-white">Creative</h6>
                                    <p className="clr-white">
                                        We create unique brands, logos and all related assets, tailored to your needs and our constantly evolving society.
                                    </p>
                                </div>

                                <div className="features-text">
                                    <h6 className="clr-white">Content</h6>
                                    <p className="clr-white">
                                        We feed your audience with the right content at the right time, in word and image, throughout the entire customer journey.
                                    </p>
                                </div> */}

                            </div>
                        </div>

                        {/* <div className="col-lg-6 col-md-12">
                            <div className="about-img">
                                <ScrollAnimation animateIn='fadeInRight'>
                                    <img className="img-gagak" src="/images/gagak.png" alt="about" />
                                </ScrollAnimation>
                                <img className="img-gagak" src="/images/gagak.png" alt="about" />
                            </div>
                        </div> */}
                    
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default About;