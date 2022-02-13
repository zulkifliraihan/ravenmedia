import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    nav: false,
    loop: true,
    margin: 25,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        "<i class='ri-arrow-left-s-line'></i>",
        "<i class='ri-arrow-right-s-line'></i>",
    ],
    responsive: {
        0: {
            items: 2
        },
        450: {
            items: 3
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        992: {
            items: 4
        },
        1200: {
            items: 4
        }
    }
};

const Techstacks = () => {

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <div className="partner-area ptb-100">
                <div className="container">
                    <div className="partner-title">
                        Our Tech Stack:
                    </div>

                    {display ? <OwlCarousel 
                        className="partner-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="partner-item">
                            <img src="/images/tech-stack/partner3.png" alt="partner" />
                        </div> 
                        <div className="partner-item">
                            <img src="/images/tech-stack/partner5.png" alt="partner" />
                        </div> 
                        <div className="partner-item">
                            <img src="/images/tech-stack/partner6.png" alt="partner" />
                        </div> 
                        <div className="partner-item">
                            <img src="/images/tech-stack/partner7.png" alt="partner" />
                        </div> 
                        <div className="partner-item">
                            <img src="/images/tech-stack/partner8.png" alt="partner" />
                        </div> 
                        <div className="partner-item">
                            <img src="/images/tech-stack/tech-9.png" alt="partner" />
                        </div> 
                        <div className="partner-item">
                            <img src="/images/tech-stack/react-js.png" alt="partner" />
                        </div> 
                    </OwlCarousel> : ''}
                </div>
            </div>
        </>
    )
}

export default Techstacks;