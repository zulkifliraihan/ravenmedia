import React from 'react';
import Link from 'next/link';
import TrustedPartners from '@/components/HomeDemo1/TrustedPartners';

const Banner = () => {
    return (
        <>
            <div className="main-banner" id="home">
                <div className="container">
                    <div className="content">
                        <h1>
                        Website creation services with in-depth research use the most effective and efficient way to achieve your Marketing Goals!
                        </h1>

                        <Link href="https://wa.me/6287789142851">
                            <a className="default-btn">Contact Us</a>
                        </Link>

                        <img src="/images/772.png" alt="image" />
                    </div>
                </div>

                <div className="divider"></div>

                {/* Banner Images */}
                <div className="shape-overlay"></div>
                <div className="banner-shape1">
                    <img src="/images/shape/shape9.png" alt="image" />
                </div>
                <div className="banner-shape2">
                    <img src="/images/shape/shape7.png" alt="image" />
                </div>
                <div className="banner-shape3">
                    <img src="/images/shape/shape2.png" alt="image" />
                </div>
                <div className="banner-shape4">
                    <img src="/images/shape/shape10.png" alt="image" />
                </div>
                <div className="banner-shape5">
                    <img src="/images/shape/shape11.png" alt="image" />
                </div>

                
            </div>
        </>
    )
}

export default Banner;