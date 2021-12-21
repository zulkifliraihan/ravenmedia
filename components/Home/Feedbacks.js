import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    nav: false,
    loop: true,
    margin: 25,
    dots: true,
    center: true,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        "<i class='ri-arrow-left-s-line'></i>",
        "<i class='ri-arrow-right-s-line'></i>",
    ],
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
};

const Feedbacks = () => {

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <div className="feedback-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">CLIENT REVIEWS</span>
                        <h2>
                            Apa kata mereka terkait Raven Media?
                        </h2>
                    </div>

                    {display ? <OwlCarousel 
                        className="feedback-slides owl-carousel owl-theme"
                        {...options}
                    > 
                        <div className="single-feedback-box">
                            <div className="client-info">
                                <div className="d-flex align-items-center">
                                    <div className="title">
                                        <h3>Zulkifli Raihan</h3>
                                        <span>Software Developer</span>
                                    </div>
                                </div>
                            </div>
                            <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."</p>
                            <div className="rating d-flex align-items-center justify-content-between">
                                <h5>Theme Customization</h5>
                                <div>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                </div>
                            </div>
                        </div>

                        <div className="single-feedback-box">
                            <div className="client-info">
                                <div className="d-flex align-items-center">
                                    <div className="title">
                                        <h3>James Andy</h3>
                                        <span>Moodle Developer</span>
                                    </div>
                                </div>
                            </div>
                            <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."</p>
                            <div className="rating d-flex align-items-center justify-content-between">
                                <h5>Responsive Design</h5>
                                <div>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-line"></i>
                                </div>
                            </div>
                        </div>

                        <div className="single-feedback-box">
                            <div className="client-info">
                                <div className="d-flex align-items-center"> 
                                    <div className="title">
                                        <h3>David Warner</h3>
                                        <span>Python Developer</span>
                                    </div>
                                </div>
                            </div>
                            <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."</p>
                            <div className="rating d-flex align-items-center justify-content-between">
                                <h5>Design Quality</h5>
                                <div>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-line"></i>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        </>
    )
}

export default Feedbacks;